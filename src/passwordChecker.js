"use strict"

function passwordIsValid(password){

    try{

    // let variables = /[0-9]/g
    // let lowercase = /[a-z]/g
    // let uppercase = /[A-Z]/g
    // let size = password.length 
    // let sp = /[!@#$%^&*()-_+="':;?/>.<,]/g

    if(password == "")

        throw ("password should exist")
    
    if (password.length < 8)

        throw ("password is too short")
    
    if (password.match(/[a-z]/g) == null)

        throw ("you're missing lowercase letters")

    if (password.match(/[A-Z]/g) == null)

        throw ("insert Uppercase letters")

     if (password.match(/[{(!@#$%^&*.,\')}]/g) == null)

         throw ("where the special characters yo?")

    if (password.match(/[0-9]/g) == null)

        throw ("please insert a number")

        return password;
    }catch(error){
        console.error("invalid" + error)
    }
        
}


passwordIsValid("|121hgfjgRT*");

function passIsOkay(password){

    let variables = /[0-9]/g
    let lowercase = /[a-z]/g
    let uppercase = /[A-Z]/g
    let sp = /[!@#$%^&*()-_+="':;?/>.<,]/g

    if ((password == "") && (password.length < 8) == null){
        for (i < 0; i < variables, lowercase, uppercase, sp; i++){
            if (password.match(variables, lowercase, uppercase, sp) == null){
                return false;
            }
        }
    }

    else{
        return true;
    }

}

module.exports = {passIsOkay, passwordIsValid}
