const words = ["developer", "student"];
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