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

    
}
