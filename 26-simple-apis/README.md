Now that we know how to model data and we've seen how Loopback works, lets build some simple APIs.

After completing this assignment, you should now:

* Feel comfortable using the apic command

## What to Submit

1. A link to your GitHub repo containing your files
2. Notes:
  * A link to the GitHub Pages URL for your repo.
  * Your confidence level for this assignment from 0 to 5. (0 is no confidence, 5 is master)
  * Did you complete at least "Explorer Mode"?
  * If no, briefly explain why not.
  * If yes, how far past Explorer did you get?  

## Explorer Mode

### Quest 1

1. Create a new project via Source Tree called `26-simple-apis`. If you don't remember how, [watch this video](https://www.youtube.com/watch?v=Mp3LYUVKoKU).

2. Inside of your `26-simple-apis` directory, create a new Loopback project called `groceries`.

3. Inside of the `groceries` project, create a model with the following fields:
  1. item - string - required, no default
  2. purchased - boolean - required, default to false

4. Run `apic start` and use Postman to interact with your groceries API. You should post a new item to `/api/groceries`, retrieve all items by doing a GET on `/api/groceries`, et cetera until you're satisfied that your API works correctly.


### Quest 2

1. Make sure your `groceries` project is stopped by running `apic stop`.

2. In `26-simple-apis`, create another Loopback project called `cars`.

3. Inside of the `cars` project, create a model representing the Make of a car (Ford) and another model representing the Model (Mustang)

4. Run `apic loopback:relation` to create a has many relationship between them. Makes have many models.

5. Run `apic start` and use Postman to interact with your API. You should post a new make to `/api/makes`, retrieve all items by doing a GET on `/api/makes`, et cetera. You should also test the relationship. You should be able to do a POST to `/api/makes/<make id here>/models` to add a new model. You should be able to do a GET on `/api/makes/<make id here>/models` to retrieve your list of makes for that model.

## Adventurer Mode

1. In `26-simple-apis`, create another Loopback project called `adventurer-cars`.

2. Inside of `adventurer-cars`, add models for the Make (Ford), model (Mustang), trim (GT) and color (Red).

3. Run `apic loopback:relation` to create the relations between all of these. Makes have many models, models have many trims and colors.

4. Run `apic start` and test your application with Postman. You should be able to create a make by POSTing to `api/makes`, a model by posting to `/api/makes/<make id here>/models`, a trim by posting to `/api/models/<model id here>/trims` and a color by posting to `/api/models/<model id here>/colors`. You should be able to retrieve any of these sets of information with GET requests.


## Epic Mode

Nothing yet.
