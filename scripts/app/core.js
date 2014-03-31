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

String.prototype.convertURI = function() {
  var re = /(\(.*?)?\b((?:https?|ftp|file):\/\/[-a-z0-9+&@#\/%?=~_()|!:,.;]*[-a-z0-9+&@#\/%=~_()|])/ig;
  return this.replace(re, function(match, lParens, url) {
    var rParens = '';
    lParens = lParens || '';
    var lParenCounter = /\(/g;
    while (lParenCounter.exec(lParens)) {
      var m;
      if (m = /(.*)(\.\).*)/.exec(url) ||
        /(.*)(\).*)/.exec(url)) {
        url = m[1];
        rParens = m[2] + rParens;
      }
    }
    return lParens + "<a href='" + url + "' target='__blank'>" + url + "</a>" + rParens;
  });
}

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

function Guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

window.angular.module(window.config.id, ['firebase','ngSanitize']);