# iofio podcast app

This project will form the open-source core of the *iofio* podcast app. We plan to accompany our work here with blog posts and videos, so stay tuned!

This is a hybrid app using the [Ionic framework](http://ionicframework.com), so we can build it as a web app and then migrate to iOS and Android using Cordova plugins.
Ionic relies heavily on [Angular.js](https://angularjs.org/) so check that out if you're interested. 
We are also trying to demonstrate how you can use Milestones and Issues to map out app features, as well as BDD and TDD to guide development.

So what is *iofio*? Sign up for our newsletter at http://iofio.com and we'll keep you in the loop!
Are we missing anything? Create an issue to let us know.

## Running and Testing the App

Updates to the app's logic should be made to the TypeScript files in the `src` folder.
These can be transpiled by running `gulp ts`. They are also transpiled and watched when you run `ionic serve`.
To start the app in your browser run `ionic serve`.

To test services in the console, you can run

```javascript
injector = angular.element(document.body).injector();
Episode = injector.get('IofioEpisode');
```
