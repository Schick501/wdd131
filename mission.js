document.addEventListener('DOMContentLoaded', function() {
    const themeSelector = document.getElementById('theme-selector');
    const body = document.body;
    const logo = document.querySelector('.logo');

    themeSelector.addEventListener('change', changeTheme);

    function changeTheme() {
        if (themeSelector.value === 'dark') {
            body.classList.add('dark');
            logo.src = 'path/to/white-logo.png'; // Update with the actual path to the white logo
        } else {
            body.classList.remove('dark');
            logo.src = 'path/to/blue-logo.png'; // Update with the actual path to the blue logo
        }
    }
});