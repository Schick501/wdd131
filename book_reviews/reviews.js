document.addEventListener('DOMContentLoaded', () => {
    const reviewList = document.getElementById('review-list');
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];

    reviews.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');

        const title = document.createElement('h3');
        title.textContent = review.title;
        reviewDiv.appendChild(title);

        const author = document.createElement('p');
        author.textContent = `Author: ${review.author}`;
        reviewDiv.appendChild(author);

        const reviewText = document.createElement('p');
        reviewText.textContent = review.review;
        reviewDiv.appendChild(reviewText);

        reviewList.appendChild(reviewDiv);
    });
});