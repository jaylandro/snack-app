const loadSnacks = async () => {
    try {
        const snackCategories = await fetch(
            "https://www.themealdb.com/api/json/v1/1/filter.php?c=Side"
        );
        const { meals } = await snackCategories.json();

        return meals;
    } catch (error) {
        console.error(error);
    }
};

const render = (content) => {
    return content
        .map(
            (item) =>
                `<figure><img src=${item.strMealThumb}><figcaption>${item.strMeal}</figcaption></figure>`
        )
        .join(" ");
};

window.addEventListener("DOMContentLoaded", (event) => {
    const resultsContainer = document.querySelector(".snack-content");

    loadSnacks().then((sides) => (resultsContainer.innerHTML = render(sides)));
});