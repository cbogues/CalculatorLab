
var report = function () {
	
	var result = document.getElementById("result");

	var fToC = document.getElementById("f_to_c");

	var cToF = document.getElementById("c_to_f");

	var temperature = document.getElementById("temperature");

	var convertToC = function() {
			var f = Number(temperature.value);
			return ((f - 32) / 1.8);
		}

		fToC.onclick = function() {
		result.innerText = convertToC();
	}

	var converToF = function() {
		var c = Number(temperature.value);
		return ((f + 32) * 1.8);
		}

		cToF.onclick = function () {
		result.innerText = convertToC();

	}
	// 		return Number(temperature.innerHTML) * ;
	// }

	// var fToC.onclick = function() {
	// 		return temperature.innerHTML


	// result.innerHTML = document.getElementById("temperature");
	// }

// =============

	// document.getElementById("result").innerHTML = celsius 
	// + "°C " + fahrenheit + "°F "
	// };

	// document.getElementById("f_to_c").onclick = function () {
	// 	var f = document.getElementById("temperature".value
	// 		function.report((f - 32) / 1.8, f);
	// };

	// document.getElementById("c_to_f").onclick = function () {
	// 	var c = document.getElementById("temperature").value;
	// 		function.report((c + 32) * 1.8, c);
	// };	
}

report();

















