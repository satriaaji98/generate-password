let lengthpassword = document.getElementById("lengthpassword")
let password = document.getElementById("password")


function generatepassword(len){
    const lowerAlphabet ="abcdefghijklmnopqrstuvwxyz"
    const upperAlphabet ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numeric ="1234567890"
    const symbol = "@!#$%^&*()_+{}[]\;'><"

    const data = lowerAlphabet + upperAlphabet + numeric + symbol
    let generator =  ''
    for(let index=0; index<len ; index++){
        generator += data[~~(Math.random() * data.length)]
    }
    return generator
 

}

function getpassword(){
   const newpassword = generatepassword(lengthpassword.value)
   password.value = newpassword
   alert('refresh has been generated!')

}


function savepassword(){

}