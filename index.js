let buttonArray = document.querySelectorAll("button");

for(let i = 0; i < buttonArray.length;i++){
    buttonArray[i].addEventListener("click", function (){
        alert("clicked!");
    });
}


