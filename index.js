let buttonArray = document.querySelectorAll("button");

for(let i = 0; i < buttonArray.length;i++){
    buttonArray[i].addEventListener("click", function (){
        // let audio = new Audio("./sounds/tom-1.mp3");
        // audio.play();
        let buttonInnerText=this.innerHTML;
        switch (buttonInnerText) {
            case "w":
                let crashSound=new Audio("./sounds/crash.mp3");
                crashSound.play();
                break;
            case "a":
                let kickBassSound=new Audio("./sounds/kick-bass.mp3");
                kickBassSound.play();
                break;
            case "s":
                let snareSound=new Audio("./sounds/snare.mp3");
                snareSound.play();
                break;
            case "d":
                let tom1Sound=new Audio("./sounds/tom-1.mp3");
                tom1Sound.play();
                break;
            case "j":
                    let tom2Sound=new Audio("./sounds/tom-2.mp3");
                    tom2Sound.play();
                    break;
            case "k":
                let tom3Sound=new Audio("./sounds/tom-3.mp3");
                tom3Sound.play();
                break;
            case "l":
                let tom4Sound=new Audio("./sounds/tom-4.mp3");
                tom4Sound.play();
                break;
        
            default:
                console.log(buttonInnerText);
                break;
        }
    });
}


