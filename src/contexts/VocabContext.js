import React, { createContext, useReducer, useEffect } from "react";
import { vocabReducer } from "../reducers/vocabReducer";

export const VocabContext = createContext();

const VocabContextProvider = props => {
  const [decks, dispatch] = useReducer(vocabReducer, [], () => {
    const localData = localStorage.getItem("decks");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("decks", JSON.stringify(decks));
  }, [decks]);
  return (
    <VocabContext.Provider value={{ decks, dispatch }}>
      {props.children}
    </VocabContext.Provider>
  );
};

export default VocabContextProvider;
