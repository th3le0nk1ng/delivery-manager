# delivery-manager
This is a bare bones demo of a simple manager to track deliveries. The application is component based and uses one way data flow from parent -> child. 

## Assumptions

I considered the use case of a delivery driver that was accessing this through a tablet. The Bootstrap classes that were used are supporting tablet screen size or bigger. However, I think adding responsiveness for mobile phones might be something to consider as well.

## Install and run

    npm start

Open a browser at http://localhost:8081

## Additional Information
This project is based off a Yeoman generator: https://github.com/STUkh/generator-angular-webpack-es6

I had difficulties initializing the datepicker and having it detect the differences between moment.js and JavaScript date objects. I was originally going to use Angular UI Bootstrap Datepicker popup, but I was having issues activating the popup.

I would also prefer to use an object model mapper library instead of manually creating the objects from the JSON data.