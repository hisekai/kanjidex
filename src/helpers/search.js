import nihongo from "nihongo";
import { getKanji } from "../helpers/getKanji";
import { getPhrase } from "../helpers/getPhrase";
import { getEnglish } from "../helpers/getEnglish";

export const search = async (
  queryType,
  setError,
  setMood,
  setLoading,
  setKanji,
  setPhrase,
  q
) => {
  if (queryType === "kanji") {
    if (!nihongo.hasJapanese(q)) {
      setError("Your search doesn't seem to be in Japanese.");
      setMood("shocked");
    } else {
      if (q.length > 1) {
        let tempArray = [];
        const parsedQuery = nihongo.parseKanji(q);
        if (parsedQuery.length === 0) {
          setError("Your search doesn't contain any kanji characters.");
          setMood("shocked");
        } else {
          parsedQuery.forEach(async kanji => {
            setLoading(true);
            const data = await getKanji(kanji);
            tempArray.push(data);
            if (tempArray.length === parsedQuery.length) {
              setKanji(tempArray);
              setLoading(false);
            }
          });
        }
      } else {
        setLoading(true);
        const data = await getKanji(q);
        setKanji(data);
        setLoading(false);
      }
    }
  } else if (queryType === "phrase") {
    if (!nihongo.isJapanese(q)) {
      setError("Your search doesn't seem to be in Japanese.");
      setMood("shocked");
    } else {
      setLoading(true);
      const data = await getPhrase(q);
      data.meta.status === 200
        ? setPhrase(data.data)
        : setError("Unfortunately, there is no data for your search.");
      setMood("sad");
      setLoading(false);
    }
  } else if (queryType === "english") {
    if (nihongo.isJapanese(q)) {
      setError(
        "Your search is in Japanese. This form is for searching in English."
      );
      setMood("shocked");
    } else {
      let tempArray = [];
      setLoading(true);
      const englishData = await getEnglish(q.toLowerCase());
      englishData.forEach(async kanji => {
        const data = await getKanji(kanji.kanji.character);
        tempArray.push(data);
        if (tempArray.length === englishData.length) {
          if (tempArray.length === 1) {
            setKanji(tempArray[0]);
            setLoading(false);
          } else if (tempArray.length > 1) {
            setKanji(tempArray);
            setLoading(false);
          } else {
            setError("Unfortunately, there is no data for this search.");
            setMood("sad");
            setLoading(false);
          }
        }
      });
    }
  }
};
