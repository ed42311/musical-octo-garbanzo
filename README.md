# BNR exercise

Please limit your time working on this exercise to four hours.

## Spec

Please create a React and Redux application implementing the following feature: displaying blog post data from the following web service:

https://jsonplaceholder.typicode.com/posts

1. Display the posts for the current user in the left column, and posts for all other users in the right column. For the purposes of this exercise, you can hard-code the “current user ID” to 1
2. Handle both loading and error states.
3. Cover all the important behavior of the code with automated tests. Feel free to choose between end-to-end tests and unit/component tests.
4. Add enough CSS to get the left/right column layout and make it look clean, but don’t worry about too fancy styling.
When you're done, zip up the project and email it back to me.

Feel free to reach out to Josh Justice jjustice@bignerdranch.com with questions!

## Spec Pass

* [x] Current user posts in the left column
* [x] Other posts in the right column
* [x] Loading state
* [x] Error handle for fetch and comp
* [x] Rudimentary Css
* [x] End to end tests

## To install

Node modules has been deleted to reduce overall file size, once you uncompress the folder you will need to run:

`npm install` or `yarn install`

## To run

After this is run you should be able to run:

`npm start` or `yarn start`

## To run tests

The tests were built with puppeteer, the development server will need to be running.  Once the dev server is running you can run teh tests with:

`npm test` or `yarn test`