# BEVM Skeleton Template
Starter template for BEVM projects by Michael Siregar.



## Installation
Before you can start coding, run the following commands:
```
npm install -g gulp bower
npm install && bower install
```


## Using and editing
The following command deletes the `dist/` folder, starts the webserver and compiles the assets:
```
gulp
```

To reload the browser automatically, use the features above, extend the `gulp` command this way:
```
gulp && gulp watch
```
This will provide a gulp task, which is waiting for changes. Every saved change, will reload the browser.



## Gulp Commands
- `gulp clean` - Removes the `dist/` folder.
- `gulp --production` - Removes the `dist/` folder and compiles the assets.
- `gulp watch` - Starts webserver and waits for changes.



## Todo
- Add some useful *sass mixins*
- Provide a detailed documentation about *BEVM*
- Add image optimization to the `gulpfile.js`
- Add css and js minify to the `gulpfile.js`