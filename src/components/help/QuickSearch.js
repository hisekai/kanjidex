import React from "react";
import QuickSearchGif from "../../assets/images/help/searching/kanjidex-quicksearch.gif";

const QuickSearch = () => {
  return (
    <div>
      <h3 className="title">Quick searching with Kanjidex</h3>
      <p>
        Quick searching allows you to quickly get basic information about a
        highlighted kanji without the need to click the popup.
      </p>
      <p>
        The quick search option is located in the context menu when you right
        click on the page and then Kanjidex will find information regarding
        kanji characters that are in the highighted selection.
      </p>
      <p>
        As of Kanjidex v.3, you can highlight multiple characters and the
        highlighted selection doesn't have to be kanji characters only. As long
        as there's at least one kanji, you will get the results.
      </p>
      <figure>
        <img
          src={QuickSearchGif}
          alt="Shows how to quick search with Kanjidex"
        />
        <figcaption>
          The example is on ja.wikipedia.org and it shows how you can highlight
          multiple kanji characters, and that the selection doesn't have to
          contain kanji characters only.
        </figcaption>
      </figure>
      <article className="message is-warning">
        <div className="message-header">
          <p>Warning</p>
        </div>
        <div className="message-body">
          Quick searching will display the results but its styling can sometimes
          get broken. A simple refreshing of the page will resolve the issue. I
          am aware that it's a nuisance and it's something that I'm currently
          working on. Luckily, it happens rarely but it is important to note
          that it can happen.
        </div>
      </article>
    </div>
  );
};

export { QuickSearch };
