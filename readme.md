# Rotten Tomato app

## Little project using Ionic

### Specs

First page should display a header with the title of the application, and underneath a search input box and a button for search.

The user can input a few letters in the search box, and based on that, the app should issue a query to the rotten tomatoes api to get a list of movies which title contains the search.

You should then display the result on the same page, using the ion-list component (list view). The item can be composed of the title of the movie, and a thumbnail picture.

When clicking an a item in the list, you should be taken to a new page (ui-router state), that will display the summary of the selected movie, and underneath the list of reviews

### Use 

`git clone https://github.com/hassony2/rotten-tomatoes`

`npm install`

To launch the app in your browser : 

`gulp browsersync`

### Screenshots 

![main page](https://cloud.githubusercontent.com/assets/10189060/14078436/79b26534-f4fe-11e5-87c3-c074b727046e.png)

![movie page](https://cloud.githubusercontent.com/assets/10189060/14078514/0d6908aa-f4ff-11e5-924e-cee06e6b51ba.png)



