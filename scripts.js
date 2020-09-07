function getWaist() {
  const waist = Number(document.getElementById("waistMeasure").value);
  return waist;
}


console.log(getWaist.length);
var pi = Math.PI;


function mini() {
  document.getElementById("userLength").value = 20;
}

function midi() {
    document.getElementById("userLength").value = 25;
}

function maxi() {
    document.getElementById("userLength").value = 40;
}



function skirtFullness(radius) {
  getWaist();

  var length = document.getElementById("userLength").value ;

  
  var wrapSkirt = (((getWaist() * 1.5) / (2 * pi))).toFixed(1);
  var fullSkirt = (getWaist() / (2 * pi)).toFixed(1);
  var halfSkirt = ((getWaist() / pi)).toFixed(1);
  var quarterSkirt = ((getWaist() / (pi / 2))).toFixed(1);

  
  if (radius === wrap) {
    console.log("wrap");
    document.getElementById("radius").innerHTML =  wrapSkirt + ' in.';
    document.getElementById("returnLength").innerHTML = length + ' in.';
    document.getElementById("fabricReq").innerHTML =  parseFloat(length) + parseFloat(wrapSkirt) ;
  } else if (radius === full) {
    console.log("full");
    document.getElementById("radius").innerHTML =  fullSkirt + ' in.';
    document.getElementById("returnLength").innerHTML = length + ' in.';
    document.getElementById("fabricReq").innerHTML =  parseInt(fullSkirt) + parseInt(length);
    
  } else if (radius === half) {
    console.log("half");
    document.getElementById("radius").innerHTML =  halfSkirt + ' in.';
    document.getElementById("returnLength").innerHTML = length + ' in.';
    document.getElementById("fabricReq").innerHTML =  parseInt(halfSkirt) + parseInt(length);
    
  } else if (radius === quarter) {
    console.log("quarter");
    document.getElementById("radius").innerHTML =  quarterSkirt + ' in.';
    document.getElementById("returnLength").innerHTML = length + ' in.';
    document.getElementById("fabricReq").innerHTML =  parseInt(quarterSkirt) + parseInt(length);
  }
  // console.log(radius);
  // document.getElementById("radius").innerHTML = radius.value;
}

getWaist();
