# Code Test

[Demo](https://chitchu.github.io/sample-blueco/#/)

### Getting Started

1. Clone the repo
1. Install the depndencies `$ npm install`
1. Start the dev server `$ npm start`
1. Create optimized build `$ npm run build`
1. Run the tests `$ npm test`

### Gotchas

The GH page demo doesn't work because GH pages are served over SSL and openweather API only serves their endpoint over unsecured http. The best way to test this is running the local server and using Firefox (Chrome 56+ doesn't allow getlocation api over non SSL connections). Tried swapping openweather over Dark Sky api but ran out of time.

### Areas of interest

* `src/components/EditorContainer.js`
* `src/components/EmbedContainer.js`
* `src/modules/services.js`
