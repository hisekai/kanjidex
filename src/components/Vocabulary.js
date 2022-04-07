import React, { useState } from "react";
import NewDeckForm from "./vocabulary/NewDeckForm";
import VocabularyList from "./vocabulary/VocabularyList";

const Vocabulary = () => {
  const [mood, setMood] = useState("happy");
  return (
    <div className="Vocabulary">
      <div className="container">
        <NewDeckForm setMood={setMood} />
        <VocabularyList mood={mood} />
      </div>
    </div>
  );
};

export default Vocabulary;
