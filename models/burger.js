var orm = require('../config/orm.js');

var burger = {

all: function(cb) {
    orm.all('burger',cb);
  }
}

module.exports = burger;
