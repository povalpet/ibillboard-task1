var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

module.exports = function(){
  function TrackModel() {
    this.save = __bind(this.save,this);
  }

  TrackModel.prototype.save = function() {

  };

  return TrackModel;
}();
