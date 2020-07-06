import React from "react";
// images
import KanjidexSelectGif from "../../assets/images/help/searching/kanjidex-select-instant.gif";
import KanjidexWordSingle from "../../assets/images/help/searching/kanjidex-word-single.png";
import KanjidexWordGif from "../../assets/images/help/searching/kanjidex-word.gif";
import KanjidexEnglish from "../../assets/images/help/searching/kanjidex-english.png";

const Japanese = () => {
  return (
    <div>
      <h3 className="title">Searching for Kanji</h3>
      <p>Searching for kanji is the default option when you open Kanjidex.</p>

      <p>Searching for kanji allows you to do the following:</p>
      <ul>
        <li>Search for a single or even multiple kanji characters</li>
        <li>
          The search query doesn't have to be all kanji characters or even
          Japanese. As long as there's at least one kanji character, Kanjidex
          will return a result.
        </li>
        <li>You can save a kanji character when it's displayed.</li>
      </ul>
      <article className="message is-info">
        <div className="message-header">
          <p>Tip</p>
        </div>
        <div className="message-body">
          If you highlight any kanji characters on a web page, the moment you
          click on the Kanjidex popup, you should have the higlighted kanji
          characters already being searched for. No need for copy and paste!
          <figure>
            <img
              src={KanjidexSelectGif}
              alt="Shows the instant search when text selected"
            />
          </figure>
        </div>
      </article>
      <hr />
    </div>
  );
};
const Word = () => {
  return (
    <div>
      <h3 className="title">Searching words/phrases in Japanese</h3>
      <p>
        Even at the beginner level, it is obvious that knowing just what a
        single kanji character means is not enough sometimes. Searching for
        words/phrases will provide useful context.
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
        Searching words is basically looking up kanji compounds (jukugo) to
        expand your vocabulary. For example, 電 means electricity and 車 means
        car but together they mean train!
      </p>
      <p>
        Just as the start page indicates, you can search for words/phrases in{" "}
        <strong>hiragana</strong>, <strong>katakana</strong>,{" "}
        <strong>kanji</strong> or any combination of those.
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
      <p>
        You can save words via the form that is at the very end of each
        individual word.
      </p>
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
      <p>You can search only for one word at a time.</p>
      <figure>
        <img src={KanjidexEnglish} alt="The startpage with a dropdown" />
      </figure>
    </div>
  );
};

export { Japanese, Word, English };
