var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

module.exports = function(){

  function TrackModel(fs) {
    this.fs = fs;
    this.save = __bind(this.save,this);
  }

  /**
   * Saves provided data to provided file
   * @param  {Object}   data     [description]
   * @param  {Function} callback [description]
   */
  TrackModel.prototype.save = function(filepath,data,callback) {
    this.fs.appendFile(filepath,JSON.stringify(data)+'\n',callback);
  };

  return TrackModel;
}();
