import React from "react";
// images
import SearchingInJapanese from "../../assets/images/help/searching/searching-in-japanese.png";
import KanjiList from "../../assets/images/help/searching/kanjidex-list.png";
import KanjiSingle from "../../assets/images/help/searching/kanjidex-single.png";
import KanjidexSingleExplanation from "../../assets/images/help/searching/kanjidex-single-explanation.png";
import KanjidexSelectGif from "../../assets/images/help/searching/kanjidex-select-instant.gif";
import KanjidexWordSingle from "../../assets/images/help/searching/kanjidex-word-single.png";
import KanjidexWordGif from "../../assets/images/help/searching/kanjidex-word.gif";
import KanjidexEnglish from "../../assets/images/help/searching/kanjidex-english.png";

const Japanese = () => {
  return (
    <div>
      <h3 className="title">Searching in Japanese</h3>
      <p>Searching in Japanese is the default option when you open Kanjidex.</p>
      <figure>
        <img src={SearchingInJapanese} alt="Search in japanese" />
      </figure>

      <p>
        While fairly straightforward, it is important to note that you can
        search for multiple kanji characters as well as just looking up a single
        one.
      </p>
      <div className="columns">
        <div className="column">
          <figure>
            <img src={KanjiList} alt="Shows a list of two kanji characters" />
            <figcaption>
              It is possible to search for two or more kanji characters at once
            </figcaption>
          </figure>
        </div>
        <div className="column">
          <figure>
            <img src={KanjiSingle} alt="Shows a single kanji" />
            <figcaption>
              If there's only a single kanji, it will directly display it.
            </figcaption>
          </figure>
        </div>
      </div>
      <p>
        If you highlight any kanji characters on a web page, the moment you
        click on the Kanjidex popup, you should have the higlighted kanji
        characters already being searched for. No need for copy and paste!
      </p>
      <figure>
        <img
          src={KanjidexSelectGif}
          alt="Shows the instant search when text selected"
        />
        <figcaption>
          The popup will insantly search for the selected text on a page.
        </figcaption>
      </figure>
      <p>
        Another useful tip is that the selected text{" "}
        <strong>doesn't have to be</strong> all in Japanese as long as there's
        at least one kanji character, Kanjidex will parse it and return results
        if found.
      </p>
      <p>
        The single kanji character has a form from which you can save it in an
        existing deck or create a new one. You can also go back to a list/start
        page. And there's a book icon that will take you to the vocabulary page.
      </p>
      <figure>
        <img
          src={KanjidexSingleExplanation}
          alt="A visual guide for the single kanji"
        />
      </figure>
    </div>
  );
};
const Word = () => {
  return (
    <div>
      <h3 className="title">Searching words/phrases in Japanese</h3>
      <p>
        Even at the beginner level, it is obvious that knowing just what a
        single kanji character means is not enough sometimes.
      </p>
      <p>
        You can search for words/phrases in Japanese by simply selecting the
        option "Word" in the dropdown.
      </p>
      <figure>
        <img
          src={KanjidexWordSingle}
          alt="Front page of kanjidex when word is selected"
        />
      </figure>
      <p>
        Searching words is basically looking for kanji compounds to expand your
        vocabulary. For example, 電 means electricity and 車 means car and
        together they mean train!
      </p>
      <p>
        Don't worry, as you can easily check the details of kanji characters in
        the word/phrase search and return back to the results once you're done.
      </p>
      <figure>
        <img
          src={KanjidexWordGif}
          alt="A gif showcasing how you can return to the results"
        />
      </figure>
      <p>You can search only for one word/phrase at a time.</p>
    </div>
  );
};
const English = () => {
  return (
    <div>
      <h3 className="title">Searching in English</h3>
      <p>
        It is possible to check what a word in English means in Japanese if
        there's a kanji character associated with the meaning.
      </p>
      <p>
        To search in English simply select the option "English" in the dropdown.
      </p>
      <figure>
        <img src={KanjidexEnglish} alt="The startpage with a dropdown" />
      </figure>
      <p>You can search only for one word at a time.</p>
    </div>
  );
};

export { Japanese, Word, English };
