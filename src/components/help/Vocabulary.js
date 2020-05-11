import React from "react";
import { Edit3, Save, Trash2, Eye } from "react-feather";
// images
import CreateDeckImg from "../../assets/images/help/vocabulary/kanjidex-create-deck.png";
import CreateDeckImg2 from "../../assets/images/help/vocabulary/kanjidex-create-deck2.png";
import CreateDeckGif from "../../assets/images/help/vocabulary/kanjidex-create-deck.gif";
import EditDeckGif from "../../assets/images/help/vocabulary/kanjidex-edit-deck.gif";
import KanjidexSingleExplanation from "../../assets/images/help/searching/kanjidex-single-explanation.png";
import SaveKanji from "../../assets/images/help/vocabulary/kanjidex-save.png";
import SaveWordGif from "../../assets/images/help/vocabulary/kanjidex-save-word.gif";

const CreatingDecks = () => {
  return (
    <div>
      <h3 className="title">Creating Decks</h3>
      <p>
        Creating decks allows for a more organized way of storing your
        vocabulary. There are two ways to create a deck.
      </p>
      <h5>1. Creating decks on the vocabulary page</h5>
      <p>
        On your vocabulary page simply enter the name you want for your deck.
      </p>
      <figure>
        <img src={CreateDeckImg} alt="Vocabulary page form" />
      </figure>
      <h5>2. Creating decks in the extension popup.</h5>
      <p>
        It's more likely that you're going to come up with deck names the more
        you bump into new kanji characters. Once you have the kanji details
        displayed, enter the new name in the form and then click{" "}
        <strong>Create deck</strong> (and don't forget to press the save button
        if you want).
      </p>
      <figure>
        <img src={CreateDeckGif} alt="Extension popup for saving" />
      </figure>
      <p>
        The same way of creating decks is available when you get results for
        words/phrases.
      </p>
    </div>
  );
};
const EditingDecks = () => {
  return (
    <div>
      <h3 className="title">Editing Decks</h3>
      <p>
        You can change the name of the deck any time on the vocabulary page by
        simply pressing the edit icon (<Edit3 /> ). Once you're done just click
        the save icon (<Save />) or hit enter.{" "}
      </p>
      <figure>
        <img
          src={EditDeckGif}
          alt="A gif demonstrating how to edit the title of the deck."
        />
      </figure>
    </div>
  );
};
const DeletingDecks = () => {
  return (
    <div>
      <h3 className="title">Deleting Decks</h3>
      <p>
        Deleting a deck is pretty straightforward. Each deck has a view (<Eye />
        ) and a delete button (<Trash2 />
        ). The view button takes you to the list of kanji characters that are
        saved in that deck and the delete button removes the deck from your
        vocabulary page.
      </p>
      <p>
        The delete action <em>cannot</em> be reversed and all the kanji
        characters, if there were any, will be lost with it.
      </p>
    </div>
  );
};

const SavingKanji = () => {
  return (
    <div>
      <h3 className="title">Saving a Kanji</h3>
      <p>
        There's only one way to save a kanji and that's when you have a single
        kanji character displayed with all its details. There's a form on the
        very top of the extension and you need a deck where you're going to
        store your kanji.
      </p>
      <figure>
        <img
          src={KanjidexSingleExplanation}
          alt="A visual guide for the single kanji"
        />
      </figure>
      <p>
        If you already have existing decks, you're going to have a list of decks
        to choose from. If not, fret not! You can create a new deck by typing
        the name in the form and pressing "Create". Don't forget to save once
        you've created the deck!
      </p>
      <div className="columns">
        <div className="column">
          <figure>
            <img src={CreateDeckImg2} alt="Save a kanji in a new deck." />
            <figcaption>Save the kanji in a newly created deck.</figcaption>
          </figure>
        </div>
        <div className="column">
          <figure>
            <img src={SaveKanji} alt="Save a kanji in a selected deck." />
            <figcaption>
              If you have existing decks, you will be able to save the kanji
              from the select dropdown.
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

const DeletingKanji = () => {
  return (
    <div>
      <h3 className="title">Deleting a kanji</h3>
      <p>
        To delete a kanji, go to the deck where the kanji is and simply click on
        the delete icon (<Trash2 />
        ).
      </p>
      <p>
        To display the kanji details, click on the view icon (<Eye />
        ).
      </p>
    </div>
  );
};

const SavingWord = () => {
  return (
    <div>
      <h3 className="title">Saving a word</h3>
      <p>
        When you search for a word, you can save it via the form that is found
        on the very end of it. It's done the same way you save a kanji
        character.
      </p>
      <p>You can also create decks with the same form.</p>
      <figure>
        <img src={SaveWordGif} alt="A gif showing how to save a word." />
      </figure>
    </div>
  );
};

const DeletingWord = () => {
  return (
    <div>
      <h3 className="title">Deleting a word</h3>
      <p>
        To delete a word, go to the deck where the word is and simply click on
        the delete icon (<Trash2 />
        ).
      </p>
      <p>
        To display the word details, click on the view icon (<Eye />
        ).
      </p>
    </div>
  );
};

export {
  CreatingDecks,
  EditingDecks,
  DeletingDecks,
  SavingKanji,
  DeletingKanji,
  SavingWord,
  DeletingWord,
};
