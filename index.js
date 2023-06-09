//first read the height to inch and weight 
function readAllInfo(){
    //step 1-read value of age from text box
    //parseInt coz we read value in number
    var ageV = parseInt(document.getElementById('age').value)
    //step 2 read height -crate 2 var height in feet and height in inch
    var feetV = parseInt(document.getElementById('feet').value)

    var inchesV = parseInt(document.getElementById('inches').value)

    var weightV = parseInt(document.getElementById('weight').value)
    //step 3 covert pound to kg-formula pound * 0.45359237 kg

    var weightinKG = weightV * 0.45359237 

    //step 4 convert feet to inches-- formula feet * 12 = inch?
//no var coz var already create it --we just change value
feetV = feetV * 12

//step 5 --convert inch to meter formula inches/ 39.37
//and  combine feet and inches
feetV = feetV + inchesV
var heightinMeter = feetV / 39.37  // convert inch to meter

// formula bmi = BMI = 
//703 x weight (pounds)/
//height (in) x height (in)

var finalAnswer = weightinKG / (heightinMeter * heightinMeter)
finalAnswer = finalAnswer.toFixed(2)// fix 2 change answer to two decimal
document.getElementById('showResultBMI').innerText="" + finalAnswer
// finalAnswer = finalAnswer * 8
//moving circle
//  document.getElementById('circle').style.left = finalAnswer + "px"

if (finalAnswer >= 0 && finalAnswer <= 18.5 ){
    finalAnswer = finalAnswer * 4.5
    document.getElementById('circle').style.left = finalAnswer + "px"
  

}else if(finalAnswer >18.5 && finalAnswer <= 25){
    finalAnswer = finalAnswer * 7
    document.getElementById('circle').style.left = finalAnswer + "px"
  
}else if(finalAnswer >25 && finalAnswer <= 30){
    finalAnswer = finalAnswer * 8
    document.getElementById('circle').style.left = finalAnswer + "px"
  
}else if(finalAnswer >30 && finalAnswer <= 35){
    finalAnswer = finalAnswer * 9
    document.getElementById('circle').style.left = finalAnswer + "px"
  
}else{
    finalAnswer = finalAnswer * 11
    document.getElementById('circle').style.left = finalAnswer + "px"  
}


    
}
