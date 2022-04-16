/*
const crypto = require('crypto')

class cryptoService {
    static encrypt(username, password, email){
        //or generate a random number and save as a property of user schema
        var salt = username + password + email
        crypto.pbkdf2(password, salt, 10000, 32, 'sha256', (err, derivedKey)=>{
            if (err) throw err;
            console.log(derivedKey)
            hash = derivedKey.toString('hex');
            console.log(hash)
            console.log(parseInt(hash, 16))
        })
    }
    static decrypt(){

    }
}
export default cryptoService;*/