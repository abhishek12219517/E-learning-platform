// SHOW MENU
const showMenu = (toggleId, navbarId,bodyId) =>{
    const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId),
    bodypadding = document.getElementById(bodyId)

    if(toggle && navbar){
        toggle.addEventListener('click', ()=>{
            // APARECER MENU
            navbar.classList.toggle('show')
            // ROTATE TOGGLE
            toggle.classList.toggle('rotate')
            // PADDING BODY
            bodypadding.classList.toggle('expander')
        })
    }
}
showMenu('nav-toggle','navbar','body')
const linkColor = document.querySelectorAll('.nav__link');   
function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
}
linkColor.forEach(l => l.addEventListener('click', colorLink));

// Function to display the login popup after a delay
function showLoginPopup() {
    const loginPopup = document.querySelector('.login-popup');
    loginPopup.style.display = 'block';
}

// Delay in milliseconds (between 5000 and 10000 ms, i.e., 5 to 10 seconds)
const delay = Math.floor(Math.random() * (10000 - 5000 + 1) + 5000);

// Wait for the specified delay and then show the login popup
setTimeout(showLoginPopup, delay);

const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");


window.addEventListener("load",function(){

 showPopup();
 // setTimeout(function(){
 //   loginPopup.classList.add("show");
 // },5000)

})

function showPopup(){
      const timeLimit = 5 // seconds;
      let i=0;
      const timer = setInterval(function(){
       i++;
       if(i == timeLimit){
        clearInterval(timer);
        loginPopup.classList.add("show");
       } 
       console.log(i)
      },1000);
}


close.addEventListener("click",function(){
  loginPopup.classList.remove("show");
})

const rating = document.querySelector('.rating');
const child = document.querySelectorAll('.child');
const feedback_section = document.querySelector('.feedback-section');
const btn = document.querySelector('#btn');

let icon;
rating.addEventListener('click', (event) => {

   icon = event.target.parentNode;

   for(let i=0; i<child.length; i++){
      console.log(child[i])
      child[i].classList.remove('active');
   }

   if(!icon.classList.contains('active')){
       icon.classList.add('active');
   }
    // console.log(event.target.parentNode);
})

btn.addEventListener('click', () => {
   console.log(icon);

   let user_feedback;
   let user_feedback_icon;

   if(icon === undefined){
      user_feedback = "";
   }else{
      user_feedback = icon.children[1].innerText;
      user_feedback_icon = icon.children[0].innerText;
   }

   if(user_feedback !== ""){
      // console.log(user_feedback_icon)
      feedback_section.innerHTML = `
         <div class="response-screen ">
            <p>${user_feedback_icon}</p>
            <h3>your Feedback: ${user_feedback}</h3>
            <p>💖 Thank You  for your response</p>
      
         <div class="feedback-button">
            <a href="index.html">Back</a>
           </div>
        </div>
      `
   }
})
















