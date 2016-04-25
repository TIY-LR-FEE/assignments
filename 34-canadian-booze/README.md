Let's create an Ionic app with searching, master -> detail views, et cetera using some weird Canadian booze API.

## What to Submit

1. A link to your GitHub repo containing your modified version of the boilerplate files.
2. Notes:
  * A link to the GitHub Pages URL for your repo.
  * Your confidence level for this assignment from 0 to 5. (0 is no confidence, 5 is master)
  * Did you complete at least "Explorer Mode"?
  * If no, briefly explain why not.
  * If yes, how far past Explorer did you get?  

## Explorer Mode

1. Create a new project via Source Tree called `34-canadian-booze`. If you don't remember how, [watch this video](https://www.youtube.com/watch?v=Mp3LYUVKoKU).

2. In your `34-canadian-booze` directory run `startfrom https://github.com/jbarket/boilerplate-ionic.git` to download the boilerplate. **REMEMBER THAT YOU NEED TO RUN ionic serve INSTEAD OF GULP TO RUN THIS PROJECT**

3. Sign up for an API key at https://lcboapi.com

  You want a key for web requests. It actually mentions Angular by name. Keep in mind, because they use separate keys for devices and the web, you'll have to sign up for a second key (and change the keys) to make it work in the iOS simulator. For the time being, don't worry about that--just work on it in your browser like normal.

4. Create a module called products. It's going to have two controllers (ProductsController and ProductController) which will each have their own view. It's also going to have a service called ProductService. ProductsController should respond on /, and ProductController on /product/:id

  As usual, add some sample text to make sure both routes work.

5. In your service, create three methods: all, get and search.

  all should make a $http call to https://lcboapi.com/products?access_key=<your API KEY here> and return that without responding to the promise

  get should take a single parameter called id, and it should make an $http call to https://lcboapi.com/products/<id goes here>?access_key=<your API KEY here> and return that without responding to the promise

  search should take a single parameter called terms and make a $http call to ttps://lcboapi.com/products?q=<term goes here>&access_key=<your API KEY here> and return that without responding to the promise

6. In your ProductsController, have it call the all method on ProductService, respond to the promise, and save the response to this.products

  Then, create your view. You should use the thumbnail list from the ionic docs again. You'll need to either log out this.products to get a good look at where the data is, or read the lcboapi.com docs. You'll also need an inset input (check the ionic docs) for a search form. It'll have one field and a button. It should look like this:

  ![](https://raw.githubusercontent.com/TIY-LR-FEE/assignments/master/34-canadian-booze/list.png)

7. Wire up your search bar. You'll need a property in your controller to attach to the input field, and you'll need a search method for the button to call when clicked. Make the search method in your controller call the search method in your service, passing the value from that field. Set this.products to be the response of that promise. If it works, you should be able to type a company name or type of liquor into the search box and get new results:

  ![](https://raw.githubusercontent.com/TIY-LR-FEE/assignments/master/34-canadian-booze/search.png)

8. Make each item in your product list link to the product view passing in its id. In ProductController, get that id from $stateParams and call the get method in your service (passing in that id). Set this.product to be the response from that promise.

9. In your view, use the Facebook card layout (ionic docs) to display the information for the product. It should look like the following, and set the title of the page using ion-nav-title

  ![](https://raw.githubusercontent.com/TIY-LR-FEE/assignments/master/34-canadian-booze/detail-top.png)
  ![](https://raw.githubusercontent.com/TIY-LR-FEE/assignments/master/34-canadian-booze/detail-bottom.png)


## Adventurer Mode

It doesn't make sense for the API to send us all 10,000 items at once, so it sends us 25. What if the user wants to see more than that? We have a few options to collection the additional data, but Ionic makes it really easy to implement an infinite scroller.

Basically, when the user scrolls far enough down the page, it'll call a function. In that function, we can go get more data.

There's a good example on how this works here: http://ionicframework.com/docs/api/directive/ionInfiniteScroll/

Log out your response from your .all() or .search() calls. Notice that in addition to result, there's the pager object. It contains a ton of information which makes this really easy. To implement ion-infinite-scroll, we need a couple of things:

1. When to stop scrolling (our ng-if). This is easy. If pager.is_final_page is true, there's no more to get.

2. What to call when they get close (on-infinite). This is going to be a new method that will call pager.next_page_path. We don't even have to figure this one out or add our key or anything. We just stick that on the end of https://lcboapi.com and run with it. It'll give us the next bit of data. The trick is, we don't want to replace this.products. We want to add those products onto the end of this.products. Find a way to merge the arrays, or just do it the hard way.

The end result should be that your initial call to .all or .search sets this.products to be the first page of results, and saves the pager information somewhere. Then, when they approach the end of the list, if there are more pages, it should call your new method that gets more data, appends that data to this.products, and updates your saved pager information.

## Epic Mode

Nothing yet!
