class Landing {
    dataBase = {};
    // dataBase={
    //     "milan@gmail.com":{name:"milan",email:"gmai"}
    // }
    registerUser() {
        if (localStorage.getItem('userData') != null) {
            this.getData()
        }
        let firstname = username.value;
        let email = exampleInputEmail.value;
        let password = exampleInputPassword.value;
        if (firstname !== '' && email !== '' && password !== '') {
            // alert(`${firstname},${email},${password}`)
            if (email in this.dataBase) {
                alert(`${email} already exist`)
            } else {
                // this.dataBase['jinotv@gmail.com']={name:"jino",email:jino@,passsword:1234}
                this.dataBase[email] = {
                    name: firstname,
                    email: email,
                    password: password
                }
                // save data
                this.saveData()
                alert("Registration successfull");
                window.location = "login.html"
                //window.location used to method to navigate to a new html page 
            }
        }
        else {
            alert("Please enter valid values");
        }
    }
    getData() {
        this.dataBase = JSON.parse(localStorage.getItem("userData"))
    }
    saveData() {
        localStorage.setItem("userData", JSON.stringify(this.dataBase))
    }


    login() {
        let loggedEmail = userEmail1.value;
        let loggedPassword = userPassword1.value
        this.getData();
        if (loggedEmail == '' || loggedPassword == '') {
            alert("Please enter Values")
        }
        else {
            // alert(`${loggedEmail},${loggedPassword}`)
            if (this.dataBase[loggedEmail]) {
                // localStorage.setItem("firstname",this.dataBase[loggedEmail].name)
                if (this.dataBase[loggedEmail].password === loggedPassword) {
                localStorage.setItem("firstname",this.dataBase[loggedEmail].name)

                    // alert("Signed in!!!!")
                    window.location="home.html"
                }
                else {
                    alert("Password mismatch")
                }
            }
            else {
                alert(`${loggedEmail} not found`)
            }
        }
    }
}
const obj = new Landing()