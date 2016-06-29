# Willman

Hi! Welcome to my personal website! This is just a fairly simple Ember app I use
to mess around with and show off all the cool people I've met over the years. If
you'd like to join my "web ring" (patent pending) check out the section titled
"Add Yourself!" below.

## Add Yourself!

Have we met over the years? Have we just talked on the internet a lot? Feel free
to add yourself to my "Top Friends" / "web ring" with these fairly simple
instructions and open up a Pull Request. If we've never communicated much I
probably won't add you to be honest. Sorry!

### Add your avatar

Add your image to the `public/images/avatars` folder. I'd prefer it if you stick
to png, jpg, or gif to be honest.

### Add yourself to the data fixture

I have a file located at [public/data/friends.json](https://github.com/willmanduffy/willman/blob/master/public/data/friends.json) with some simple data for
you to add in to represent yourself. You can copy and paste in this general format to the bottom of the file. Make sure that you iterate the id up one from
the bottom most entry!

```json
{
  "id": 2,
  "type": "friends",
  "attributes": {
    "image": "images/avatars/your-name.png",
    "name": "Your Name",
    "url": "https://www.example.com"
  }
}
```

### Open a Pull Request!

If you know how to do this, awesome! If not, feel free to ping me on [Twitter](https://www.twitter.com/willmanduffy) or email me at my github username @gmail.com and I'll be happy to help you out making one!

#### TODO
- [ ] Make json data non-reliant on id as this is brittle and will probably cause merge conflicts down the line and is just generally annoying.
- [ ] Pass `"friends"` as a root key so we don't need to specify the type on each entry.
- [ ] Write a test that will fail if your JSON isn't valid and have CI on PRs.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone git@github.com:willmanduffy/willman.git` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit the app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
