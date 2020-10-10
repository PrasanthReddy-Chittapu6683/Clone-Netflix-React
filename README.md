This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



## Steps to Setup & Run Application:

*   Create Application: __`npx create-react-app react-netflix-clone`__
*   Run application: __`npm start`__
*   Create setup in Firebase for DB and Hosting: __`https://console.firebase.google.com/`__
*   Get the list of movies/series details from TMDB site : __`https://www.themoviedb.org/u/`__
*   Install Routing for React: __`npm i react-router-dom`__
*   Install Axios for HTTP calls: __`npm i axios`__
*   Install Youtube react: __`npm i react-youtube`__
*   Install Youtube react: __`npm i movie-trailer`__
*   To get image slider: __`npm i react-material-ui-carousel`__
*   To get material-ui: __`npm install @material-ui/core`__
*   To get material-ui icons: __`npm install @material-ui/icons`__



## Steps to Deploy Application:

*   Insall Firebase : __`npm install -g firebase-tools`__
*   Next login to Firebase account : __`firebase login`__
*   Next initialize your project to Firebase repository: __`firebase init`__ While initializing the setup provide below settings
    * ? Are you ready to proceed? Yes
    * Please select an option: Use an existing project
    * ? What do you want to use as your public directory? build
    * ? Configure as a single-page app (rewrite all urls to /index.html)? (y/N) y
    * ? File build/index.html already exists. Overwrite? Yes
*   Next Create a build setup to deploy : __`npm run build`__
*   Host application to firebase : __`firebase deploy`__
*   After succful deployment application is installed in URL (https://prcv-netflix-clone.web.app/)



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
