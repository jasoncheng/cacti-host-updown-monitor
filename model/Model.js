var Sequelize = require("sequelize")
  , sequelize = new Sequelize(conf.db.database, conf.db.username, conf.db.password, {
      host: conf.db.host,
      sync: {force: false},
      logging: false,
      define: {
        freezeTableName: true
      }
    });


module.exports = {
  Host: sequelize.import(__dirname + "/Host")
};
