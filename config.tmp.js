module.exports = {
  
  // how offen to check cacti.host table if status change
  hostCheckerTimer: 1000 * 60 * 5,

  // MySQL database
  db: {
    host: '127.0.0.1',
    database: 'cacti',
    username: 'cacti',
    password: 'cactipassword'
  },

  // Mailer
  mail: {
    host: "smtp.gmail.com",
    port: "465",
    ssl: true,
    username: '',
    password: '',
    authentication: "login",
    subject: 'Server Down',
    body:    'Server Down',
    from:    '',
    to:      ''
  },

  CactiStatus: ['HOST_UNKNOWN', 'HOST_DOWN', 'HOST_RECOVERING', 'HOST_UP', 'HOST_ERROR']
};
