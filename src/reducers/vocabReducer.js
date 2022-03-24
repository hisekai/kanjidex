import uuid from "uuid/v4";
import {
  savedNotification,
  alreadySavedNotification,
  deletedNotification,
  removedAllNotification,
} from "../helpers/Notification";

export const vocabReducer = (state, action) => {
  switch (action.type) {
    case "ADD_DECK":
      return [
        ...state,
        {
          title: action.deck.title,
          kanjis: [],
          phrases: [],
          id: action.deck.id || uuid(),
        },
      ];
    case "UPDATE_DECK":
      return state.map((deck) => {
        if (deck.id === action.deck.id)
          return { ...deck, title: action.deck.title };
        return deck;
      });
    case "DELETE_DECK":
      return state.filter((deck) => deck.id !== action.id);
    case "ADD_KANJI":
      return state.map((deck) => {
        if (deck.id === action.deck.id) {
          // check if the kanji already exists in that particular deck
          let count = 0;
          deck.kanjis.map((kanji) => {
            return kanji.kanji.query === action.deck.kanji.kanji.query
              ? (count += 1)
              : count;
          });
          if (!count > 0) {
            deck.kanjis.push(action.deck.kanji);
            savedNotification("kanji");
          } else {
            alreadySavedNotification("kanji");
          }
          return deck;
        }
        return deck;
      });
    case "REMOVE_KANJI":
      return state.map((deck) => {
        if (deck.id === action.deck.id) {
          deletedNotification("kanji");
          return {
            ...deck,
            kanjis: deck.kanjis.filter(
              (kanji) => kanji.kanji.query !== action.deck.kanji
            ),
          };
        }
        return deck;
      });
    case "REMOVE_ALL_KANJI":
      return state.map((deck) => {
        if (deck.id === action.deck.id) {
          removedAllNotification("kanji");
          return {
            ...deck,
            kanjis: [],
          };
        }
        return deck;
      });
    case "ADD_KANJI_NOTE":
      return state.map((deck) => {
        if (deck.id === action.deckId) {
          const res = {
            ...deck,
            kanjis: deck.kanjis.map((kanji) => {
              if (kanji.kanji.query === action.kanji) {
                // if there aren't any notes, create a notes array
                if (!kanji.kanji.notes) {
                  kanji.kanji.notes = [
                    {
                      text: action.note.text,
                      img: action.note.img,
                      id: uuid(),
                    },
                  ];
                } else {
                  // otherwise push note to the array
                  kanji.kanji.notes.push({
                    text: action.note.text,
                    img: action.note.img,
                    id: uuid(),
                  });
                }
              }
            }),
          };
        }
        return deck;
      });
    case "REMOVE_KANJI_NOTE":
      return state.map((deck) => {
        if (deck.id === action.deckId) {
          const res = {
            ...deck,
            kanjis: deck.kanjis.map((kanji) => {
              if (kanji.kanji.query === action.kanji) {
                if (kanji.kanji.notes) {
                  kanji.kanji.notes = kanji.kanji.notes.filter(
                    (note) => note.id !== action.note.id
                  );
                }
              }
            }),
          };
        }
        return deck;
      });

    case "UPDATE_KANJI_NOTE":
      return state.map((deck) => {
        if (deck.id === action.deckId) {
          const res = {
            ...deck,
            kanjis: deck.kanjis.map((kanji) => {
              if (kanji.kanji.query === action.kanji) {
                if (kanji.kanji.notes) {
                  kanji.kanji.notes = kanji.kanji.notes.map((note) => {
                    if (note.id === action.note.id) {
                      return {
                        ...note,
                        text: action.note.text,
                        img: action.note.img,
                      };
                    }
                    return note;
                  });
                }
              }
            }),
          };
        }
        return deck;
      });

    case "ADD_PHRASE":
      return state.map((deck) => {
        if (deck.id === action.deck.id) {
          // check if the phrase already exists in that particular deck
          let count = 0;
          deck.phrases.map((phrase) => {
            return phrase.slug === action.deck.phrase.slug
              ? (count += 1)
              : count;
          });
          if (!count > 0) {
            deck.phrases.push(action.deck.phrase);
            savedNotification("phrase");
          } else {
            alreadySavedNotification("phrase");
          }
        }
        return deck;
      });
    case "REMOVE_PHRASE":
      return state.map((deck) => {
        if (deck.id === action.deck.id) {
          deletedNotification("phrase");
          return {
            ...deck,
            phrases: deck.phrases.filter(
              (phrase) => phrase.slug !== action.deck.phrase
            ),
          };
        }
        return deck;
      });
    case "REMOVE_ALL_PHRASES":
      return state.map((deck) => {
        if (deck.id === action.deck.id) {
          removedAllNotification("phrase");
          return {
            ...deck,
            phrases: [],
          };
        }
        return deck;
      });
    default:
      return state;
  }
};
