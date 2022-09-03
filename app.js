const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.getElementById("greeting");
const logout = document.getElementById("logout");

const HIDDEN_CLASS_NAME = "hidden";
const LOCAL_STORAGE_USERNAME_KEY = "userName"

function onUserInputSubmit(event) {
    event.preventDefault();

    const userName = loginInput.value;

    localStorage.setItem("userName", userName);

    paintGreeting(userName);

}

function paintGreeting(userName) {
    greeting.innerText = `Hello ${userName}`;

    greeting.classList.remove(HIDDEN_CLASS_NAME);
    loginForm.classList.add(HIDDEN_CLASS_NAME);
}

function onLogoutClick(event){
    if(localStorage.getItem(LOCAL_STORAGE_USERNAME_KEY)!==null){
        localStorage.removeItem(LOCAL_STORAGE_USERNAME_KEY)

    }

    greeting.classList.add(HIDDEN_CLASS_NAME);
    loginForm.classList.remove(HIDDEN_CLASS_NAME);

    loginInput.value = "";

}

const savedUserName = localStorage.getItem(LOCAL_STORAGE_USERNAME_KEY)

if(savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASS_NAME)
    loginForm.addEventListener("submit", onUserInputSubmit)
}
else {
    paintGreeting(savedUserName)
}

logout.addEventListener("click", onLogoutClick);