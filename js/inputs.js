function myFunction() {
    const dropdown = document.getElementById("myDropdown");
    const icon = document.querySelector('.dropbtn i');
    
    dropdown.classList.toggle("show");
    
    // Toggle icon based on dropdown visibility
    if (dropdown.classList.contains('show')) {
        // Dropdown is now visible - change to up arrow
        icon.classList.remove('ph-caret-down');
        icon.classList.add('ph-caret-up');
    } else {
        // Dropdown is now hidden - change to down arrow
        icon.classList.remove('ph-caret-up');
        icon.classList.add('ph-caret-down');
    }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.closest('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                
                // Reset icon to down arrow when closing
                const icon = document.querySelector('.dropbtn i');
                icon.classList.remove('ph-caret-up');
                icon.classList.add('ph-caret-down');
            }
        }
    }
  }
}