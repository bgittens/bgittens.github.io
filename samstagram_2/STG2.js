$("#form_id").submit(function(e) { //submits form
		e.preventDefault();
	console.log('form submitted'); //done to check in inspect

	var img = document.getElementById("link_input").value;//turns link into actual img; .value makes it so the value w the name is added
	var words = document.getElementById('commentinput').value; //just the words part


	addNewItem(words,img);//function that i need to write
	document.getElementById('commentinput').value=''; //makes the thingy empty
	document.getElementById('link_input').value=''; //makes thingy empty
});

function addNewItem(words,imgURL){
	var new_post = document.createElement("div");
	new_post.classList.add("new_post");
	/*new_post.setAttribute("src")
	new_post.style.position = "relative";*/

	var new_words = document.createElement("p");
	new_words.innerHTML = words;
	console.log(words);
	
	var imgs = document.createElement("img");
	imgs.src = imgURL;
	imgs.width = "150"
	imgs.height = "150"

	var Xicon = document.createElement("img");
	Xicon.setAttribute("src","x.png");
	Xicon.className = "XI"
	Xicon.width = "25"
	Xicon.height = "25"
	/*Xixon.style.position = "absolute";
	Xicon.style.right = "5px";
	Xicon.style.top = "5px";*/
	
	imgs.appendChild(Xicon);

	new_post.appendChild(Xicon);
	new_post.appendChild(imgs);
	new_post.appendChild(new_words);
	
	//document.getElementById("container").appendChild(imgs);
	document.getElementById("container").appendChild(new_post);

	new_post.addEventListener("click", function(){
    var new_post_id = String(Math.random());
    new_post.id = new_post_id;
  	document.getElementById(new_post_id).remove();

	 
     });  

   
}
