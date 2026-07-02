class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password} encrypted`;

    }
    changeUsername(){
        return `${this.username.toUpperCase()} changed`;
    }
}

const arpit = new User('arpit', 'arpit@gmail.com', '1234');

console.log(arpit.encryptPassword());
console.log(arpit.changeUsername());  