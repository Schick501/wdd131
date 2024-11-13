// JavaScript function to handle search
function searchRecipe() {
    const query = document.getElementById("searchInput").value;
    alert("Searching for recipes containing: " + query);
    // Here, you could add code to filter recipes based on the search query
}



// Call loadRecipe on page load to display a sample recipe
window.onload = loadRecipe;
