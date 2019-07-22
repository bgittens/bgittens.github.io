$("#form_id").submit(function(e) { //submits form
		e.preventDefault();
	console.log("form submitted");
	
	var new_name = document.getElementById("new_name").value;
	var nameR = document.getElementById("nameR");
	$(nameR).replaceWith(new_name);

	var new_bio = document.getElementById("new_bio").value;
	var bioR = document.getElementById("bioR");
	$(bioR).replaceWith(new_bio);

	var new_img = document.getElementById("new_img").value;
	var img = document.createElement("img");
	img.src = new_img;
	var imgR = document.getElementById("imgR");
	$(imgR).replaceWith(img);
});

//var img = document.getElementById("imgR").value;
