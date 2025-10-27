const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordlength = 15
let button = document.getElementById("button-el")
let passbox1 = document.getElementById("password-1")
let passbox2 = document.getElementById("password-2")


function grc(){   
    let randomchar = Math.floor(Math.random()*characters.length)
    return characters[randomchar]

}

//xconsole.log(grc())

function genrandomnuber(){
    randompassword = "" 
    for(let i = 0; i < passwordlength; i++){
        randompassword += grc()
    }
    return randompassword
}

button.addEventListener("click", function(){
    passbox1.textContent = genrandomnuber()
    passbox2.textContent = genrandomnuber()
})


passbox1.addEventListener("click", function(){
    navigator.clipboard.writeText(passbox1.textContent)
    alert("Password copied!")
})

passbox2.addEventListener("click", function(){
    navigator.clipboard.writeText(passbox2.textContent)
    alert("Password copied!")
})