function.convert(degree) {

	if (degree == "C"){
		F = document.getElementById("c").value * 9 / 5 + 32;
		document.getElementById("f").value = Math.round(F);

	} else

	C = document.getElementById("f").value * 5 /9 + 32;
	document.getElementById("c").value = Math.round(C);
	}
}
