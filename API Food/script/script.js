$(document).ready(function() {
    const urlParam = new URLSearchParams(window.location.search);
    const categoryName = urlParam.get('categoryName');
    
    $('#breadcrumb').html(`
        <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a class='logo'href="#">mealapp</a></li>
            <li class="breadcrumb-item"><a href="index.html">Foods</a></li>
            <li class="breadcrumb-item active" aria-current="page">${categoryName}</li>
        </ol>
        </nav>
    `);
    
    $.ajax({
        type: 'get',
        url: 'https://www.themealdb.com/api/json/v1/1/categories.php',

        success: function(data) {
            console.log(data.categories); // Log all categories for debugging
            
            // Clear the category list before appending
            $('#category-list').empty();

            // Loop through each category to get the image and category name
            for (var i = 0; i < data.categories.length; i++) {
                var food = data.categories[i];

               
                var categoryName = food.strCategory; 
                var categoryImage = food.strCategoryThumb; 

             
                $('#category-list').append(
                    '<div class="col-md-4">' +
                        '<div class="card mb-4 position-relative">' +
                        '<a href="category-detail.html?categoryName=' + encodeURIComponent(categoryName)+ '">' +
                                '<img src="' + categoryImage + '" class="card-img-top hover-shadow" alt="' + categoryName + '" />' +
                                '<div class="card-body text-center">' +
                                '<h5 class="card-title">' + categoryName + '</h5>' +
                                '</div>' +
                                '</a>' +
                        '</div>' +
                    '</div>'
                );
            }
        }, 
        error: function(err) {
            console.log(err);
        }
    });
});
