class KanjiAlive {
  constructor() {
    this.kanji_alive_key = "n6vIT9d54ZmshEeJY5eGAHZMBktqp1WUuNgjsnw9liauQEUEUu";
  }

  async getKanji(kanji) {
    try {
      const url = `https://kanjialive-api.p.rapidapi.com/api/public/kanji/${kanji}`;
      const kanjiAliveRes = await fetch(url, {
        method: "get",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "X-Mashape-Key": `${this.kanji_alive_key}`
        }
      });
      if (kanjiAliveRes.ok) {
        const kanjiData = await kanjiAliveRes.json();
        return kanjiData;
      } else {
        console.error("Server response: ", kanjiAliveRes.status);
      }
    } catch (e) {
      console.log(e);
    }

  }

  async getEnglish(query) {
    try {
      const url = `https://kanjialive-api.p.rapidapi.com/api/public/search/${query}`;
      const kanjiAliveRes = await fetch(url, {
        method: "get",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "X-Mashape-Key": `${this.kanji_alive_key}`
        }
      });
      if (kanjiAliveRes.ok) {
        const englishData = await kanjiAliveRes.json();
        return englishData;
      } else {
        console.error("Server response: ", kanjiAliveRes.status);
      }
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = KanjiAlive;
