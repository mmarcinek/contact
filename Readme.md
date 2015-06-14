## Welcome to inTouch

This is a light application that stores contact information, it utilizes backbone.js for models and collections, and is fully scalable from mobile to hi-def screens. To run this application be sure to navigate to the project directory:
run `npm install`: to install node packages and
`bower install` to load bower packages.

The dependencies can be found in the bower.json and package.json files.

## Usage

This template contains some simple `gulp` tasks. They are as follows:


- `gulp watch`: This will launch a Node Server and start the standard `watchlist` task
- `gulp bower`: This will move the bower components into their proper location. This will run during the `watch` task, but you may need to run it manually once in a while
- `gulp handlebars`: This will compile your handlebars (`.hbs`) files for you. Again, `watch` will watch for changes, but if you add new files, you'll need to run this or restart the `gulp watch` command.

There are many more tasks, and you really should read through the `gulpfile.js`, but the ones above will take care of you in most cases.
