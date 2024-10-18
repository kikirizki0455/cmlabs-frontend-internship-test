$(document).ready(function() {
    const urlParam = new URLSearchParams(window.location.search);
    const mealName = urlParam.get('meal-id'); 
  
  
    $('#breadcrumb').html(`
        <nav aria-label="breadcrumb">
            <ol class='breadcrumb'>
                <li class="breadcrumb-item"><a href="index.html">Foods</a></li>
                <li class="breadcrumb-item active" aria-current="page">${mealName}</li>
            </ol>
        </nav>
    `);

    
    $.ajax({
        type: 'get',
        url: 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + mealName,
        success: function(result) {
           
            if (result.meals) {
                const meal = result.meals[0];

                if (meal.strYoutube) {
                    const videoId = meal.strYoutube.split('v=')[1];
                    const embeddedUrl = `https://www.youtube.com/embed/${videoId}`;
                    $('#youtube-video').html(`<iframe width="100%" height="530" src="${embeddedUrl}" frameborder="0" allowfullscreen></iframe>`);
                }
                // Mengatur gambar dan judul makanan
                $('#meal-image').attr('src', meal.strMealThumb);
                $('#meal-title').append(meal.strMeal);
                $('#meal-instructions').append(meal.strInstructions);

                const ReceipeList = $('#meal-recipe');
                // Mengatur daftar resep
                for (let i = 0; i <= 20; i++) {
                    const receipeList = meal['strIngredient' + i];
                    const Measure = meal['strMeasure' + i];

                    if (receipeList) {
                        ReceipeList.append(`<li>${receipeList} - ${Measure}</li>`);
                    }
                }

                // Menambahkan video jika ada
            }
        },
        error: function(err) {
            console.error("Error fetching meal details:", err);
        }
    });
});
