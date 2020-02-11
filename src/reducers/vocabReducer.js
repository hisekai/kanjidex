import uuid from "uuid/v4";

export const vocabReducer = (state, action) => {
  switch (action.type) {
    case "ADD_DECK":
      return [
        ...state,
        { title: action.deck.title, kanjis: [], id: action.deck.id || uuid() }
      ];
    case "UPDATE_DECK":
      return state.map(deck => {
        if (deck.id === action.deck.id)
          return { ...deck, title: action.deck.title };
        return deck;
      });
    case "DELETE_DECK":
      return state.filter(deck => deck.id !== action.id);
    case "ADD_KANJI":
      return state.map(deck => {
        if (deck.id === action.deck.id) {
          // check if the kanji already exists in that particular deck
          let count = 0;
          deck.kanjis.map(kanji => {
            if (kanji.kanji.query === action.deck.kanji) return (count += 1);
          });
          if (!count > 0) deck.kanjis.push(action.deck.kanji);
          return deck;
        }
        return deck;
      });
    case "REMOVE_KANJI":
      return state.map(deck => {
        if (deck.id === action.deck.id) {
          return {
            ...deck,
            kanjis: deck.kanjis.filter(
              kanji => kanji.kanji.query !== action.deck.kanji
            )
          };
        }
        return deck;
      });
    case "REMOVE_ALL_KANJI":
      return state.map(deck => {
        if (deck.id === action.deck.id) {
          return {
            ...deck,
            kanjis: []
          };
        }
        return deck;
      });
    default:
      return state;
  }
};
