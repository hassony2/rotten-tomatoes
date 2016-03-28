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

Screenshots : 
![main page](https://cloud.githubusercontent.com/assets/10189060/14078436/79b26534-f4fe-11e5-87c3-c074b727046e.png)

![test page](https://cloud.githubusercontent.com/assets/10189060/14078440/8178580a-f4fe-11e5-92b3-3d8a56607f06.png)



