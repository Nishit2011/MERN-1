npm i express express-validator bcryptjs config gravatar jsonwebtoken mongoose request

Express validator for data validation.
So when when we make our post request to our API if there's fields that need to be there that aren't.
It'll raise an error.
So we'll use that for validation.

Also we need bcrypts.
We're going to becryptjs which is used for password encryption.
You never want to store plain plain text passwords in your database.

A package called config for global variables.
We're going to use gravatar for profile avatars how that works is if a user signs up they can use
an email that's associated with a gravatar account and it will automatically show their profile image.

OK we need JSONwebToken because we're using JWT to pass along a token for validation.
So where are you going.
We'll be doing that stuff much later but I want to get this stuff installed now.

We're also using Mongoose which is a layer that sits on top of the database so we can interact with

it.

We need request which is just a small module that will allow us to make recall HTTP requests to another

API.

And the reason wearing stalling this is for get hub repositories.

We want our profiles to be able to have GitHub repositories listed on them.

So we're going to make that request from our backend so that we can hide our API key and stuff like

that and we can just return the repositories.

And then I think yeah that should be it for the regular dependencies.

npm i -D nodemon concurrently

we need nodemon which will constantly watch our server so that we don't have to refresh it every time
we make a change.

And then we also want concurrently which is going to allow us to run our back end express server and
our front end react dev server at the same time with one single command.
