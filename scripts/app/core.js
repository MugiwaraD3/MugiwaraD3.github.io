String.prototype.trim = function() {
  return this.replace(/^\s+|\s+$/gi, '');
};
String.prototype.isNullOrEmpty = function() {
  return this === 'undefined' || this === null || this === 'null' || this.trim() === '';
};
String.prototype.format = function() {
  var a = arguments,
    ret = this,
    i;
  for (i = 0; i < a.length; i += 1) {
    ret = ret.replace('{' + i + '}', a[i]);
  }
  return ret;
};
window.NodeList.prototype.forEach = Array.prototype.forEach;
Array.prototype.remove = function() {
  var i;
  for (i = 0; i < this.length; i += 1) {
    if (this[i] === arguments[0]) {
      this.splice(i, 1);
    }
  }
  return this;
};
window.angular.module(window.config.id, []);