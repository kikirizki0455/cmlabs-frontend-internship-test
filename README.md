MealApp - Food Catalog
MealApp is a simple web-based application that allows users to browse different food categories and view meal details. The application fetches data from the TheMealDB API to display a list of meals and detailed information, including ingredients and instructions.

Features
Display various food categories from TheMealDB API.
View detailed information about meals, including:
Meal images.
List of ingredients and measurements.
Cooking instructions.
Embedded YouTube videos for recipe tutorials (if available).
Navigation breadcrumbs to help users keep track of their location on the site.
Fully responsive layout using Bootstrap 4.
Table of Contents
Installation
Usage
APIs Used
Project Structure
Contributing
License
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/mealapp.git
Navigate into the project directory:

bash
Copy code
cd mealapp
Make sure you have a working internet connection since the app relies on external APIs and CDN-hosted libraries like Bootstrap and jQuery.

Open the index.html file in your browser to start the application.

Usage
Home Page: The landing page displays a list of food categories. Click on any category to view meals under that category.

Category Detail Page: After clicking on a category, the app shows all meals within that category. Each meal card has an image and the meal name. You can click on the meal for further details.

Meal Detail Page: This page provides detailed information about the selected meal, including:

Meal image.
Instructions.
Ingredients with measurements.
Embedded YouTube tutorial video (if available).
APIs Used
This project uses the following API:

TheMealDB API: A free API that provides information about meals, ingredients, and recipes.

Categories endpoint:

bash
Copy code
GET https://www.themealdb.com/api/json/v1/1/categories.php
This returns a list of all food categories.

Meals by category:

bash
Copy code
GET https://www.themealdb.com/api/json/v1/1/filter.php?c={categoryName}
This returns a list of meals under the selected category.

Meal details:

bash
Copy code
GET https://www.themealdb.com/api/json/v1/1/lookup.php?i={mealId}
This returns detailed information about the selected meal, including ingredients, instructions, and the YouTube tutorial link.

Project Structure
bash
Copy code
├── index.html              # Home page displaying categories
├── category-detail.html     # Page showing meals in a specific category
├── meal-detail.html         # Page displaying details of a specific meal
├── css
│   └── style.css            # Custom styles for the application
├── js
│   ├── script.js            # JavaScript for category display
│   ├── meal.js              # JavaScript for displaying meals in a category
│   └── meal-detail.js       # JavaScript for displaying meal details
├── images                   # Directory for storing static images (if any)
└── README.md                # This readme file
Contributing
Fork the repository.
Create a new branch for your feature: git checkout -b my-new-feature.
Commit your changes: git commit -m 'Add some feature'.
Push the branch: git push origin my-new-feature.
Submit a pull request.
