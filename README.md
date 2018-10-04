# delivery-manager
This is a bare bones demo of a simple manager to track deliveries. The application is component based and uses one way data flow from parent -> child. 

## Assumptions

I considered the use case of a delivery driver that was accessing the app through a tablet. The Bootstrap classes that were used are supporting tablet screen size or bigger. However, adding responsiveness for mobile phones would be something to consider as well.

## Install and run

Please ensure Node version is between 5.7.1 and 6.9.5 for optimal Webpack compatibility

    npm install
    npm start

Open browser at http://localhost:8081

## Design Considerations

The hierarchy of components is as follows:

    <delivery-manager>
        <order-calendar/>
        <order-filter/>
        <order-list>
            <order-item/>
        </order-list>
    </delivery-manager>

I would have also liked to use collapsible rows to show more details about the order, such as the items it consists of, special instructions, delivery note made by driver, etc. However, this code exercise reflects minimal requirements of a given prompt.

## Additional Information
This project is based off a Yeoman generator: https://github.com/STUkh/generator-angular-webpack-es6

Standard style was also used: http://standardjs.com/
