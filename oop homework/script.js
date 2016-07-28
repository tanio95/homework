var Button = function(width, height, background, color){
	this.width = width;
	this.height = height;
	this.background = background;
	this.color = color;
	/*this.generate = function(){
		// create the div
		var body = document.getElementsByTagName('body')[0];
		var div = document.createElement('div');
		//style the div
		div.style.width = this.width + 'px';
		div.style.height = this.height + 'px';
		div.style.backgroundColor = this.background;
		div.style.color = this.color;

		body.appendChild(div);
	}*/
} 

Button.prototype.generate = function(){
	// create the div
	var body = document.getElementsByTagName('body')[0];
	var div = document.createElement('div');
	//style the div
	div.style.width = this.width + 'px';
	div.style.height = this.height + 'px';
	div.style.backgroundColor = this.background;
	div.style.color = this.color;

	body.appendChild(div);
}

/*var box1 = new Box(250, 350, 'red', 'white');
box1.generate();*/


var addNewButton = function(){
	var widthInputValue = document.getElementById('width').value;
	var heightnputValue = document.getElementById('height').value;
	var bgInputValue = document.getElementById('bg').value;
	var colorInputValue = document.getElementById('color').value;

	var dynamicllyAddedButton = new Button(widthInputValue, heightnputValue, bgInputValue, colorInputValue);
	dynamicllyAddedButton.generate();
}

var buttonAdd = document.getElementById('createbtn');
buttonAdd.addEventListener('click', addNewButton);