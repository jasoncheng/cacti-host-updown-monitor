cacti-host-updown-gmail-notify
==============================

This is a very very very simple [NodeJS](http://nodejs.org) code, for personal use; if u like, just use it!

What for
=================
  
   - Checking cacti database, monitor host.status change; default check interval is 5 mins (can be change on config.js)
   - Send email through smtp when cacti monitor host is down.

When will send alarm email
=================
   
   - One time alarm, server status not "HOST_UP"
   - One time alarm, when server go back to "HOST_UP"
   - One time alarm, when server status change

Install
=================


    $ cd /usr/share/cacti/node_modules/cacti-host-updown
    $ cp config.tmp.js config.js
    $ vim config.js
    $ npm install
    $ node cacti

