const API_KEY = process.env.REACT_APP_API_KEY;

export const getEnglish = async (query) => {
  const url = `https://kanjialive-api.p.rapidapi.com/api/public/search/${query}`;
  const kanjiAliveRes = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-rapidapi-host": "kanjialive-api.p.rapidapi.com",
      "x-rapidapi-key": `${API_KEY}`,
    },
  });
  try {
    if (kanjiAliveRes.ok) {
      const data = await kanjiAliveRes.json();
      return data;
    } else {
      console.error("Server response: ", kanjiAliveRes.status);
    }
  } catch (e) {
    console.log(e);
  }
};
