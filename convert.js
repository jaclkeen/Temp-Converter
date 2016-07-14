//var input = 0;

function toCelsius () {
  var celsius = (input - 32) * 5/9;
  console.log(celsius);
  return celsius;
}

function toFahrenheit () {
  var fahrenheit = input * 9/5 + 32;
  console.log(fahrenheit);
  return fahrenheit;
}

// Get a reference to the button element in the DOM
var button = document.getElementById("convert");
var reset_button = document.getElementById("reset");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  for(var i = 0; i < document.tempForm.choice.length; i++){
    if(document.tempForm.choice[i].checked){
      var conversion = document.tempForm.choice[i].value;
    }
  } 
  input = document.getElementById("input").value;
  console.log("event", clickEvent);
  console.log(conversion);
  executeConversion(conversion);
  //color();
}

function executeConversion (conversion) {
  if (conversion === "celsius") {
    document.getElementById("result_field").value = toCelsius();
  }
  else {
    document.getElementById("result_field").value = toFahrenheit();
  }
  //Determines background color based on temperature
  if(conversion === 'fahrenheit' && toFahrenheit() > 89){
    document.getElementById("result_field").className = "hot";
  }
  else if(conversion === 'fahrenheit' && toFahrenheit() < 33){
    document.getElementById("result_field").className = "cold";
  }
  else if(conversion === 'celsius' && toCelsius() > 32){
    document.getElementById("result_field").className = "hot";
  }
  else if(conversion === 'celsius' && toCelsius() < 1){
    document.getElementById("result_field").className = "cold";
  }
  else
    document.getElementById("result_field").className = "normal";

}

function reset(){
  document.getElementById("input").value = "";
  document.getElementById("result_field").value = "";
  document.getElementById("result_field").className="";
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
reset_button.addEventListener("click", reset);
