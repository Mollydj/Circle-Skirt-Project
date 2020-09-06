function getWaist() {
  const waist = Number(document.getElementById("waistMeasure").value);
  console.log(waist);
  return waist;
}
getWaist();

var pi = Math.PI;
// var wrap = (getWaist * 1.5) / (2 * pi);
// var full = (getWaist() / (2 * pi));
// var half = (getWaist() / pi);
// var quarter = (getWaist() / (pi / 2));

function skirtLength(length){
 
console.log(length);
document.getElementById("returnLength").innerHTML = length + '"';
//Wrap
document.getElementById("fabricReq").innerHTML = ((getWaist() * 1.5) / (2 * pi) + length).toFixed(2) + '"';  
//Full
document.getElementById("fabricReq").innerHTML = ((getWaist() / (2 * pi)) + length).toFixed(2) + '"';
//Half
document.getElementById("fabricReq").innerHTML = ((getWaist() / pi) + length).toFixed(2) + '"';
//Quarter
document.getElementById("fabricReq").innerHTML = ((getWaist() / (pi / 2)) + length).toFixed(2) + '"';
 

}


function skirtFullness(radius){ 
  
  getWaist();
  
  
  if (radius === wrap) {
    document.getElementById("radius").innerHTML = ((getWaist() * 1.5) / (2 * pi)).toFixed(2) + '"';
    console.log("wrap");
  } else if (radius === full) {
    document.getElementById("radius").innerHTML = (getWaist() / (2 * pi)).toFixed(2) + '"';
    console.log("full");
    
  } else if (radius === half) {
    document.getElementById("radius").innerHTML = (getWaist() / pi).toFixed(2) + '"';
    console.log("half");
    
  } else if (radius === quarter) {
    document.getElementById("radius").innerHTML = (getWaist() / (pi / 2)).toFixed(2) + '"';
    console.log("quarter");
  }
// console.log(radius);
// document.getElementById("radius").innerHTML = radius.value;
} 
