// const faqQuestions = document.querySelectorAll(".faq-question");

// faqQuestions.forEach((question) => {
//   question.addEventListener("click", () => {
//     faqQuestions.forEach((item) => {
//       if (item !== question) {
//         item.classList.remove("active");
//         item.nextElementSibling.style.maxHeight = null;
//       }
//     });

//     question.classList.toggle("active");

//     const answer = question.nextElementSibling;

//     if (answer.style.maxHeight) {
//       answer.style.maxHeight = null;
//     } else {
//       answer.style.maxHeight = answer.scrollHeight + "px";
//     }
//   });
// });

document.addEventListener('DOMContentLoaded', function() {
    console.log('FAQ script loaded');
    
    const faqQuestions = document.querySelectorAll(".faq-question");
    console.log('Found', faqQuestions.length, 'FAQ questions');
    
    faqQuestions.forEach((question, index) => {
        question.addEventListener("click", function() {
            console.log('Clicked question', index);
            
            // Close all other FAQs
            faqQuestions.forEach((item) => {
                if (item !== question) {
                    item.classList.remove("active");
                    const otherAnswer = item.nextElementSibling;
                    if (otherAnswer) {
                        otherAnswer.style.maxHeight = null;
                    }
                }
            });
            
            // Toggle current FAQ
            question.classList.toggle("active");
            const answer = question.nextElementSibling;
            
            if (answer) {
                if (answer.style.maxHeight && answer.style.maxHeight !== "0px") {
                    answer.style.maxHeight = null;
                    console.log('Closing answer');
                } else {
                    answer.style.maxHeight = answer.scrollHeight + "px";
                    console.log('Opening answer, height:', answer.scrollHeight);
                }
            }
        });
    });
});


// SIDE NAV
var navItems = document.querySelectorAll('.nav-item');
var contentSections = document.querySelectorAll('.content-section');
var dropdownItems = document.querySelectorAll('.nav-item[data-has-dropdown]');

function showContent(tabId) {
    // Hide all content sections
    for (var i = 0; i < contentSections.length; i++) {
        contentSections[i].classList.add('hidden');
    }

    // Show selected content section
    var targetSection = document.getElementById(tabId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }

    // Update active states
    for (var j = 0; j < navItems.length; j++) {
        navItems[j].classList.remove('active');
    }

    // Add active class to clicked item
    var activeItem = document.querySelector('[data-tab="' + tabId + '"]');
    if (activeItem) {
        activeItem.classList.add('active');
    }
}

function toggleDropdown(parentTab) {
    // Find all sub items related to this parent
    var subItems = document.querySelectorAll('.nav-item.sub');
    var dropdownIcon = document.querySelector('[data-tab="' + parentTab + '"] .dropdown-icon');
    var isExpanded = false;

    // Check if any sub items are currently visible
    for (var i = 0; i < subItems.length; i++) {
        if (subItems[i].classList.contains('show')) {
            isExpanded = true;
            break;
        }
    }

    // Toggle sub items visibility
    for (var j = 0; j < subItems.length; j++) {
        if (isExpanded) {
            subItems[j].classList.remove('show');
        } else {
            subItems[j].classList.add('show');
        }
    }

    // Toggle dropdown icon
    if (dropdownIcon) {
        if (isExpanded) {
            dropdownIcon.classList.remove('expanded');
        } else {
            dropdownIcon.classList.add('expanded');
        }
    }
}

// Add click event listeners to navigation items
for (var k = 0; k < navItems.length; k++) {
    navItems[k].addEventListener('click', function() {
        var tabId = this.getAttribute('data-tab');
        var hasDropdown = this.getAttribute('data-has-dropdown');
        
        if (hasDropdown) {
            // If it's a dropdown item, toggle the dropdown and show content
            toggleDropdown(tabId);
            showContent(tabId);
        } else {
            // Regular navigation
            showContent(tabId);
        }
    });
}

// Initialize with first tab active
showContent('components-buttons');