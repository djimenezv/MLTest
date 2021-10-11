# MLTest

# Description
This test was using react/node in order to create an scalable application an api with node was created as well as a front end project based on react and node, since on one of the main requirements was to make this app seo friendly, it was created using Server Side Rendering and redux to handle the status of the app.

# SSR Implementation
The approach selected to implement this app was basically using node to generate the html with the use of the router dataloader functions the data will be merged with the html and then the final html will be retrieved to the browser in the other hand redux was used to keep the state of the application basically an store is created in node with the current state of the application then this state created in the server is injected into the retrieved html to the client so the client application in the browser should be able to hydrate html and initialize client store based on the server store.
After the application is initialy rendered with the html sent directly from the server the application in the browser will run as a normal react application executing queries against the api without reloading the page again, I mean transition between views won't cause reload of the page.

# UI structure
UI is based on pages or container components which have the logic needed to get data and feed the store in the other hand these pages are composed primarily by components which reads the store of the application and will be reacting to the changes in the state of the application, styles were writting using the BEM syntaxis.

# Instalation
After clonning the repo there will be two folders one with the api and the other with the ui application in order to execute each of the components we only need to open each folder using console and follow steps below

- run npm install
- run npm run dev

After following steps above the node server will be running in http://localhost:8000 and client application will be running in http://localhost:3000, above I'm adding screenshoots with how the application will looks when you will open it in the browser

Search Results

![image](https://user-images.githubusercontent.com/18702110/136733344-4599a2f3-043e-4d7d-a3f3-ae053bb9d475.png)


Product Detail

![image](https://user-images.githubusercontent.com/18702110/136733399-53959a09-b4b8-4a71-87b0-fc0b33f95bf6.png)

Home Page

![image](https://user-images.githubusercontent.com/18702110/136733443-adcf6c6f-83b2-48a9-83c1-f16c08cfec1c.png)


