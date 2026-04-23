// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const selector = document.getElementById('form-selector');
    const sections = document.querySelectorAll('.form-section');

    selector.addEventListener('change', function() {
        // 1. Hide all sections
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // 2. Get the ID from the dropdown value
        const selectedId = this.value;

        // 3. Show the matching section
        if (selectedId) {
            const activeSection = document.getElementById(selectedId);
            if (activeSection) {
                activeSection.style.display = 'block';
                console.log("Showing section: " + selectedId); // Check your console!
            }
        }
    });
});