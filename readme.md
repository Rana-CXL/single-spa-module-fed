
-------------------------Creation of single-spa with module federation---------------------

*  take a sample MFE app from module federation base application 
*  Create singleSpaEntry.js file and add the single-spa wrapper which will wrap the application.
*  Now add the singlespaEntry.js path location to the webpack.config.js in the expose option on module-federation plugin


------------------------- Add appliction in the root app -----------------------------------
* Add the name and link of the application in remote option of module-federation plugin in the webpack.config.js
* Register the remote application in register.js
* In the register method you can route in activeWhen option which will render the application to specific path.
* Now it's optional to add the id of the application in index.html. (It can be used to apply some style poperties or layout to the applications)








