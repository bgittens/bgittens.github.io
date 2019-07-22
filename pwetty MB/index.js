$("#form_id").submit(function(e) {
    e.preventDefault();
	var img= document.createElement("img");
	var input_value= document.getElementById("link_input").value;
	var containerDiv= document.getElementById ("container");
	img.src= input_value;
	containerDiv.appendChild(img);
 	var sound = document.createElement("audio");
 	sound.src= "pwetty/tspt_squealing_pig_03_088.mp3";


 	if (input_value){
 		sound.play();

 	}

//my sound isn't working anymore sorry
 	
  // Your Code Here!
  //get link value then change image source (link.source= to previous)how to append image into screen
});


