import React, { useState } from "react";
import NewDeckForm from "./vocabulary/NewDeckForm";
import VocabularyContextProvider from "../contexts/VocabContext";
import VocabularyList from "./vocabulary/VocabularyList";

const Vocabulary = () => {
  const [mood, setMood] = useState("happy");
  return (
    <VocabularyContextProvider>
      <div className="Vocabulary">
        <div className="container">
          <NewDeckForm setMood={setMood} />
          <VocabularyList mood={mood} />
        </div>
      </div>
    </VocabularyContextProvider>
  );
};

export default Vocabulary;
