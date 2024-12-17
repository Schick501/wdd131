document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('review-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const review = document.getElementById('review').value;

        const reviewData = {
            title,
            author,
            review
        };

        // Save the review data to localStorage
        let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.push(reviewData);
        localStorage.setItem('reviews', JSON.stringify(reviews));

        // Redirect to the reviews page
        window.location.href = 'reviews.html';
    });
});