import React from "react";
import { Cat } from "react-kawaii";

const KawaiiCat = ({ mood }) => {
  return <Cat mood={mood} color="#FCAF58" size={220} />;
};

export default KawaiiCat;
