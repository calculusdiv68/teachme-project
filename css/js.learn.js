var x = {
	fullName: function() {
	 return this.firstName + " " + this.lastName;
	}
}

var personX = {
	firstName: "Joe",
	lastName: "Fish",
}

var personY = {
	firstName: "Kofi",
	lastName: "Mensah",
}

x.fullName.call(personY).prompt();