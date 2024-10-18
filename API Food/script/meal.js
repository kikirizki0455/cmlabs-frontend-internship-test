$(document).ready(function(){
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
        url :'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + encodeURIComponent(categoryName),

        success:function(result){
            console.log(result.meals)
            for(var i=0 ; i < result.meals.length ; i++){
                const description = result.meals[i];
                
                const mealName = description.idMeal;
                const mealDesc = description.strMeal;
                const mealImg = description.strMealThumb;
                $('#meal-list').append(
                    '<div class="col-md-4">' +
                        '<div class="card mb-4 position-relative flex">' +
                            '<a href ="meal-detail.html?meal-id=' + encodeURIComponent(mealName)+'">' +
                                '<img src="' + mealImg + '" class="card-img-top hover-shadow" alt="' + mealName + '" />' +
                                '<div class="card-body text-center">' +
                                '<h5 class="card-title">' + mealDesc + '</h5>' +
                                '</div>' +
                                '</a>' +
                        '</div>' +
                    '</div>'
                )
                
            }
        }
    })
})