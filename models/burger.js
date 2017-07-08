var orm = require('../config/orm.js');

var burger = {

all: function(cb) {
    orm.all('burger',cb);
  },
create: function(cols, vals, cb) {
  orm.create('burger', cols, vals,cb);
},
update: function(objColVals, condition, cb) {
  
  orm.update('burger',objColVals, condition,cb);
}
}

module.exports = burger;
