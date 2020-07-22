# Kanjidex v.3

Kanjidex is a simple chrome extension for looking up kanji characters and searching for words/phrases in Japanese. It uses the unofficial Jisho API and KanjiAlive API for fetching data.

You can see the extension on the chrome webstore following this link:
https://chrome.google.com/webstore/detail/kanjidex/jhongcfphlabkimfoamdbffjgifglifk

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

You will need both Node.js and npm installed as well as a Chrome or Chromium browser for loading the extension. You will also need to get the [KanjiAlive API key](https://rapidapi.com/KanjiAlive/api/learn-to-read-and-write-japanese-kanji) and replace the variables in `src/helpers/getKanji.js` and `src/helpers/getEnglish.js` with the given key.

## Getting Started

Getting started is really easy. First, download the repository:

```
git clone https://github.com/hisekai/kanjidex.git
```

then install the npm modules:

```
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Load the extension in your browser

Don't forget to load unpacked the extension's dist folder on your Chrome or Chromium "extensions" page while ensuring the developer mode is enabled.

## Built With

- [unofficial-jisho-api](https://github.com/mistval/unofficial-jisho-api) - Awesome scraper for Jisho.org
- [Kanji alive](https://app.kanjialive.com/api/docs) - Kanji Alive API for additional kanji information like radical animations and examples with audio
- [dmak](https://github.com/mbilbille/dmak) - draw me a kanji was used for adding more control to the kanji stroke animation
- [tippyjs](https://github.com/atomiks/tippyjs) - used for tooltips
- [nihongo](https://github.com/darren-lester/nihongo) - used for parsing Japanese characters
- [bulma](https://github.com/jgthms/bulma) - CSS framework of choice
- [react feather icons](https://github.com/feathericons/react-feather) - icon set used in this project
- [react kawaii](https://react-kawaii.now.sh/) - cute vector illustrations used for enhancing the UI^^

## License

This project is licensed under the MIT License.
