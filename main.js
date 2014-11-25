var function ConvertTemp(){
var textTemp = document.getElementById('textTemp').value;
var radioTemp = document.getElementById('radioTemp');
var formRadio = document.tempForm.radTemp;
var fahrenheitToCelcius = '';
var celciusToFahrenheit = '';
var i ;

if(textTemp == ''){
alert("Please Enter Temprature");
}

for (i = 0; i < formRadio.length; i++) {
if (formRadio[i].checked) {

if(formRadio[i].value == 'FC'){ 

//Convert Temperature from Fahrenheit To Celcius
celciusToFahrenheit = (textTemp - 32) * (5 / 9);
document.getElementById("results").innerHTML = textTemp + "°F = " +celciusToFahrenheit+ "°C";
}
if(formRadio[i].value == 'CF'){ 

//Convert Temperature from Celcius To Fahrenheit
fahrenheitToCelcius = (textTemp * (9/5)) + 32;
document.getElementById("results").innerHTML = textTemp + "°C= " +fahrenheitToCelcius+ "°F";
			}
		}
	}
}
