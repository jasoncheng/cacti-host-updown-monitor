global.conf = require("./config");
var flow = require("flow")
  , db   = require("./model/Model.js")
  , mail = require("mailer")
  , downServers = {};

function checkUpDown(){
  flow.exec(
    function(){
      db.Host.all().success(this).error(function(err){
        console.log(err.message);
        process.exit(1);
      });
    },

    function(hosts){
      for(var idx in hosts){
        var host = hosts[idx];
        var mailConf = conf.mail;
        mailConf.body = host.getTextStatus();
        mailConf.subject = host.description + " status update";
        
        if(!host.isServerUp()){
          // if still down and status not update, no need to alarm again
          if(downServers[host.id] && downServers[host.id] == host.status){
            continue;
          }
          // add to container
          downServers[host.id] = host.status;
          // send email
          mail.send(mailConf, this.MULTI());
        } else if(downServers[host.id]) { // server first time up , need to notify
          // remove from container
          delete downServers[host.id];
          // send email
          mail.send(mailConf, this.MULTI());
        }
      }
    },

    function(results){
      for(var idx in results){
        if(results[idx][0]){
          console.dir(results[idx][0]);
        }
      }
    }
  );
}

checkUpDown();
setInterval(checkUpDown, conf.hostCheckerTimer);
