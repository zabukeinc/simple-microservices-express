const path = require('path');

module.exports = {
  'config': path.join(__dirname, 'configs', 'database', 'config.js'),
  'models-path': path.join(__dirname, 'models'),
  'seeders-path': path.join(__dirname, 'seeders'),
  'migrations-path': path.join(__dirname, 'configs', 'database', 'migrations')
};
