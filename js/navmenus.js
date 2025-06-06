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