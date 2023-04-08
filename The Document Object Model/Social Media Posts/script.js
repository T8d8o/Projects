var counter = 1;
function addPost() {
 const input = document.getElementById("inputPost").value;
 if (input != "") {
   counter += 1;
   document.getElementById("count");
   count.innerHTML=counter;
   const postDiv = document.createElement("div");
   postDiv.className = "post";
   document.getElementById("body").appendChild(postDiv);
   const p = document.createElement("p")
   p.innerHTML = input;
   postDiv.appendChild(p);
   const likeButton = document.createElement("button");
   likeButton.innerHTML="like";
   postDiv.appendChild(likeButton);
    const commentButton = document.createElement("button");
   likeButton.innerHTML="Comment";
   postDiv.appendChild(commentButton);
   document.getElementById("inputPost").value = "";
 }
}

function remove() {
  var notificationDiv = document.getElementById("notification");
   document.getElementById("body").removeChild(notificationDiv);
}

