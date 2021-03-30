const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(rev) {
    this.rev = rev;
  }

  encrypt(msg, key) {
    if(!msg || !key) 
      throw new Error()

    var ch = [];
    for (var i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); ++i) {
      ch.push(String.fromCharCode(i));
    }

    var m = msg.toUpperCase().split("");
    var k = key.toUpperCase().split("");
    var count = 0;
		var fInd = -1;
		var sum = 0;
    var result = [];

    for (var i = 0; i < m.length; ++i) {
      if(ch.indexOf(m[i]) == -1) {
        result.push(m[i]);
        continue;
      }

      sum = ch.indexOf(m[i]) + ch.indexOf(k[count]);

      if (ch.length - sum - 1 < 0)
        fInd = Math.abs(ch.length - sum - 1) - 1;
      else 
        fInd = sum;

      result.push(ch[fInd]);

      ++count;
      if (count == k.length)
				count = 0;
    }

    return (this.rev == false) ? result.reverse().join("") : result.join("");
  }

  decrypt(msg, key) {
    if( !msg || !key )
      throw new Error();

    var ch = [];
    for (var i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); ++i) {
      ch.push(String.fromCharCode(i));
    }

    var m = msg.toUpperCase().split("");
    var k = key.toUpperCase().split("");

    var result = [];
    var count = 0;

    for (var i = 0; i < m.length; ++i) {
      if(ch.indexOf(m[i]) == -1) {
        result.push(m[i]);
        continue;
      }

      var mInd = ch.indexOf(m[i]);
      var kInd = ch.indexOf(k[count]);

      var fInd = 1 + (mInd > kInd) ? mInd - kInd : kInd - mInd;
      if(fInd < 0) {
        fInd = ch.length + fInd;
      }

      result.push(ch[fInd]);

      ++count;
      if (count == k.length)
				count = 0;
    }

    return (this.rev == false) ? result.reverse().join("") : result.join("");
  }
}

module.exports = VigenereCipheringMachine;
