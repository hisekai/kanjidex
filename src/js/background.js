const jishoApi = require("unofficial-jisho-api");
const jisho = new jishoApi();

function selectedKanji(kanji) {
    jisho.searchForKanji(kanji).then(result => {
        chrome.tabs.query(
            {
                active: true,
                currentWindow: true
            },
            function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {
                    details: "showInfo",
                    kanji: result
                });
            }
        );
    });
}

// create a contextMenu so that
// the user can rightclick
// and search the highlighted kanji character
chrome.contextMenus.create({
    title: "Search with Kanjidex",
    contexts: ["selection"],
    onclick: function(info, tab) {
        selectedKanji(info.selectionText);
    }
});
