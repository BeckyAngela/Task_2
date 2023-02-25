let signupBtn = document.querySelector(".SignupBtn");
let loginBtn = document.querySelector(".loginBtn");
let moveBtn = document.querySelector(".moveBtn");
const signup = document.querySelector(".signup");
const login = document.querySelector(".login");

loginBtn.addEventListener("click",()=>{
   moveBtn.classList.add("rightBtn");
    login.classList.add("loginForm");
    signup.classList.remove("signupForm");
    moveBtn.innerHTML ="Teacher";
})

signupBtn.addEventListener("click",()=>{
    moveBtn.classList.remove("rightBtn");
    login.classList.remove("loginForm");
    signup.classList.add("signupForm");
    moveBtn.innerHTML ="Student";
})