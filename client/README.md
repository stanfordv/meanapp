# client

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

NEW: **************************************

To Make this work you need to do the following...
From terminal (1st instance) - anywhere: sudo mongod
From new terminal 2nd instance - anywhere: sudo mongo > "use meanapp"
From new terminal 3rd instance - inside server folder: sudo node index.js 
From new terminal 4th instance - inside client folder: grunt serve

Open a chrome browser and goto localhost:9000
To see it work, Click Movies tab and add, edit, view and delete movies 
