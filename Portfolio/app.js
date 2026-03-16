//Navigation control setup
let head = document.querySelector('.head');
let links = document.querySelector('.links');
let btn = head.querySelector('i');

btn.addEventListener('click', (event) => {
  links.classList.toggle('show');
  
  let isOpen = links.classList.contains('show');
  btn.setAttribute('class', isOpen? "fa-solid fa-xmark": "fa-solid fa-bars");
});

links.addEventListener('click', () => {
  links.classList.remove('show');
  btn.setAttribute('class', 'fa-solid fa-bars');

});

//Text animation
const words = ["Developer", "Teacher"];
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  
  // Typing
  if (!isDeleting) {
    typedTextSpan.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1200); // Pause before deleting
      return;
    }
  }

  // Deleting
  else {
    typedTextSpan.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 500); // Pause before typing new word
      return;
    }
  }

  setTimeout(typeEffect, isDeleting ? 70 : 120); // Smooth speed
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});

//Form sending data to my whatsapp
  document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    let fname = document.getElementById("Fname").value;
    let lname = document.getElementById("Lname").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    
    let phoneNumber = "923056572669"; 

    
    let whatsappMessage = "Thanks for contacting %0a%0a"
      + "*Name:* " + fname + " " + lname + "%0a"
      + "*Email:* " + email + "%0a"
      + "*Subject:* " + subject + "%0a"
      + "*Message:* " + message;

    
    let whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + whatsappMessage;

    
    window.open(whatsappURL, "_blank");
  });