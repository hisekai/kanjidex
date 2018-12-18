# Kanjidex

Kanjidex is a simple chrome extension for looking up kanji characters. It is built in vanilla JavaScript. It uses the unofficial Jisho API and KanjiAlive API for fetching data.

You can see the extension on the chrome webstore following this link:
https://chrome.google.com/webstore/detail/kanjidex/jhongcfphlabkimfoamdbffjgifglifk

## Prerequisites

You will need both Node.js and npm installed as well as a Chrome or Chromium browser for loading the extension.

## Getting Started

Getting started is really easy. First, download the repository:

```
git clone https://github.com/seekwhence/kanjidex.git
```

then install the npm modules:

```
npm install
```

And that's it. Simply `npm run build` or `npm run dev` when making changes to the project.
Don't forget to load unpacked the extension's dist folder on your Chrome or Chromium "extensions" page while ensuring the developer mode is enabled.

## Built With

- [unofficial-jisho-api](https://github.com/mistval/unofficial-jisho-api) - Awesome scraper for Jisho.org
- [Kanji alive](https://app.kanjialive.com/api/docs) - Kanji Alive API for additional kanji information like radical animations and examples with audio
- [dmak](https://github.com/mbilbille/dmak) - draw me a kanji was used for adding more control to the kanji stroke animation
- [tippyjs](https://github.com/atomiks/tippyjs) - used for tooltips
- [nihongo](https://github.com/darren-lester/nihongo) - used for parsing Japanese characters
- [bulma](https://github.com/jgthms/bulma) - CSS framework of choice
- [feather icons](https://github.com/feathericons/feather) - icon set used in this project

## License

This project is licensed under the MIT License.
