// Load Footer Component
(function() {
    // Determine if we're in a subdirectory (pages folder)
    const isSubPage = window.location.pathname.includes('/pages/');
    const footerPath = isSubPage ? '../components/footer-pages.html' : './components/footer.html';
    
    // Find where to insert footer (before closing body tag or after main content)
    const footerPlaceholder = document.getElementById('footer-placeholder');
    
    if (footerPlaceholder) {
        fetch(footerPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Footer not found');
                }
                return response.text();
            })
            .then(html => {
                footerPlaceholder.innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading footer:', error);
            });
    }
})();
