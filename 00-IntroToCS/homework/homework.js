'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

  var nvnum = num.split('');
  var elev = nvnum.length-1
  var resi = [];
  var resf = 0;

  for (var i = nvnum.length-1; i >= 0; i--) {
    if (nvnum[i]=='0'){
    resi.push(0);
  } else if (nvnum[i]=='1') {
    resi.push(2**(elev-i));
  } else {
    console.log ('No es binario');
  }
  }

  for (var j = 0; j < resi.length; j++) {
    resf = resf + resi[j];
  }

  return resf;
}

function DecimalABinario(num) {
  // tu codigo aca

  var resto = [];

  for (;num > 0;) {
    resto.push(num%2);
    num = Math.trunc(num/2);
  }

  return resto.reverse().join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}