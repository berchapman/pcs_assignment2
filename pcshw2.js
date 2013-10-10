var myString = "Ber Chapman"
var output = ""

for (var i = myString.length - 1; i > -1; --i) {
	if (myString[i] != "a" && myString[i] != "e" && myString != "i" && myString != "o" && myString != "u" && myString != "y") {
		output = output + myString[i]
	}
}

console.log(output)
