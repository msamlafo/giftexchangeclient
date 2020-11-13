// User Signup
function userSignUp(){
    // console.log('userSignUp function called')
    let userEmail = document.getElementById('emailSignup').value;
    let userPass = document.getElementById('pwdSignup').value;
    let newUserData = { user: { email: userEmail, password: userPass } }
    console.log(`NEWUSERDATA ==> ${newUserData.user.email}  ${newUserData.user.password}`)

    fetch('http://localhost:3000/user/create',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserData)
    })
    .then(response => response.json())
    .then(function(response){
        console.log(response.sessionToken);
        let token = response.sessionToken;
        localStorage.setItem('SessionToken', token);
        tokenChecker()
    })
    .catch((err) => {
        console.log(err)
    })
}

// user Login
function userLogin(){
    // console.log('userLogin function called')
    let userEmail = document.getElementById('emailLogin').value;
    let userPass = document.getElementById('pwdLogin').value;
    let userLoginData = { user: { email:userEmail, password: userPass } }
    console.log(`USERLOGINDATA ==> ${userLoginData.user.email}  ${userLoginData.user.password}`)

    fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
            'Content-Type':
            'application/json'
        },
        body: JSON.stringify(userLoginData)
    })
    .then(response => response.json())
    .then(function(response){
        console.log(response.sessionToken);
        let token = response.sessionToken;
        localStorage.setItem('SessionToken', token);
        tokenChecker()
    })
    .catch((err) => {
        console.log(err)
    })
}
//unhandled error event means your port is already running on another application so you need to close all your ports and restart your application.

// user Logout
function userLogout(){
    // console.log('userLogout function called')
    localStorage.setItem('SessionToken', undefined)
    console.log(`sessionToken ==> ${localStorage.sessionToken}`)
    tokenChecker()
}

// token checker Function
function tokenChecker(){
    // console.log('tokenChecker function called')
    let display = document.getElementById('giftexchange')
    let header = document.createElement('h5');
    let accessToken = localStorage.getItem('SessionToken')
    let text = 'Login or signup to get started!'

    for (i = 0; i = display.childNodes.length; i++){
        display.removeChild(display.firstChild)
    }
    if (accessToken === 'undefined'){
        display.appendChild(header);
        header.textContent = text;
        header.setAttribute('id', 'defaultLogin');
    } else{
        null
    }
 
}
tokenChecker()