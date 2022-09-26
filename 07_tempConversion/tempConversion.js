const ftoc = function(f) {
c = (f - 32) / 1.8;
return Math.round(c * 10) / 10;
};

const ctof = function(c) {
f = c * 1.8 + 32;
return Math.round(f * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
