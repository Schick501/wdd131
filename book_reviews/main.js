document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("review-form");
    const reviewList = document.getElementById("review-list");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Get form data
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const reviewText = document.getElementById("review").value;

        // Create review element
        const review = document.createElement("div");
        review.classList.add("review");
        review.innerHTML = `
            <h3>${title}</h3>
            <p><strong>Author:</strong> ${author}</p>
            <p>${reviewText}</p>
        `;

        // Add review to list
        reviewList.appendChild(review);

        // Reset form
        form.reset();
    });
});
