// FAQ Animation
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    faqQuestions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("active");
        item.nextElementSibling.style.maxHeight = null;
      }
    });

    question.classList.toggle("active");

    
      // Get the caret element
      const caret = question.querySelector(".ph-caret-down");
      
      // Toggle the answer visibility
      const answer = question.nextElementSibling;
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        // Rotate caret back to original position
        if (caret) {
          caret.style.transform = "rotate(0deg)";
        }
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        // Rotate caret 180 degrees
        if (caret) {
          caret.style.transform = "rotate(180deg)";
        }
      }
  });
});