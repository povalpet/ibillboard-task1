var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

module.exports = function(){
  function RedisModel() {
    this.save = __bind(this.save,this);
  }

  RedisModel.prototype.save = function() {

  };

  return RedisModel;
}();
