const searchIcon = document.getElementById('searchIcon');
const closeIcon = document.getElementById('closeIcon');
const searchInput = document.getElementById('searchInput');
const navMenu = document.getElementById('navMenu');
const header = document.getElementById('header');

function toggleSearch() {
    const isActive = searchInput.classList.contains('active');
    
    if (!isActive) {
        // Activate search
        searchInput.classList.add('active');
        closeIcon.classList.add('active');
        navMenu.classList.add('hidden');
        document.body.classList.add('search-active');
        
        // Focus on input after animation
        setTimeout(() => {
            searchInput.focus();
        }, 300);
    } else {
        // Deactivate search
        searchInput.classList.remove('active');
        closeIcon.classList.remove('active');
        navMenu.classList.remove('hidden');
        document.body.classList.remove('search-active');
        searchInput.value = '';
        searchInput.blur();
    }
}

searchIcon.addEventListener('click', toggleSearch);
closeIcon.addEventListener('click', toggleSearch);

// Handle escape key to close search
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && searchInput.classList.contains('active')) {
        toggleSearch();
    }
});

// Handle enter key for search
searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            console.log('Searching for:', searchTerm);
            // Here you would typically perform the actual search
            alert('Searching for: ' + searchTerm);
        }
    }
});

// SIDE NAV ---------------------------------------------------------------------
var navItems = document.querySelectorAll('.nav-item');
        var contentSections = document.querySelectorAll('.content-section');

        function showContent(tabId) {
            // Hide all content sections
            contentSections.forEach(function(section) {
                section.classList.add('hidden');
            });

            // Show selected content section
            var targetSection = document.getElementById(tabId);
            if (targetSection) {
                targetSection.classList.remove('hidden');
            }

            // Update active states - remove from all
            navItems.forEach(function(item) {
                item.classList.remove('active');
            });

            // Add active class to clicked item
            var activeItem = document.querySelector('[data-tab="' + tabId + '"]');
            if (activeItem) {
                activeItem.classList.add('active');
            }
        }

        function toggleDropdown(parentTab) {
            // Find all sub items related to this parent
            var subItems = document.querySelectorAll('.nav-item.sub[data-parent="' + parentTab + '"]');
            var dropdownIcon = document.querySelector('[data-tab="' + parentTab + '"] .dropdown-arrow');
            
            // Check if dropdown is currently expanded
            var isExpanded = false;
            subItems.forEach(function(item) {
                if (item.classList.contains('show')) {
                    isExpanded = true;
                }
            });

            // Toggle sub items visibility
            subItems.forEach(function(item) {
                if (isExpanded) {
                    item.classList.remove('show');
                } else {
                    item.classList.add('show');
                }
            });

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
        navItems.forEach(function(item) {
            item.addEventListener('click', function() {
                var tabId = this.getAttribute('data-tab');
                var hasDropdown = this.getAttribute('data-has-dropdown');

                if (hasDropdown) {
                    // Toggle the dropdown
                    toggleDropdown(tabId);
                    // Also show the main content for this section
                    showContent(tabId);
                } else {
                    // Regular navigation
                    showContent(tabId);
                }
            });
        });

        // Initialize with first tab active
        showContent('nav1');