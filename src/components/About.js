/* global chrome */
import React from "react";
import KawaiiCat from "./KawaiiCat";
import Chrome from "../assets/chrome.png";
import { GitHub } from "react-feather";

const About = () => {
  const chromeStoreUrl = `https://chrome.google.com/webstore/detail/${chrome.runtime.id}`;
  const chromeVersion =
    process.env.NODE_ENV === "production"
      ? chrome.runtime.getManifest().version
      : "3.0";
  return (
    <div className="Help">
      <div className="container">
        <div className="has-text-centered" style={{ padding: "40px" }}>
          <h2 className="is-size-4">About</h2>
          <p style={{ paddingBottom: "20px" }}>What is Kanjidex?</p>
          <hr />
        </div>
        <div className="columns">
          <div className="column is-one-quarter">
            <p className="title is-5">
              Find it on Chrome Store:{" "}
              <a
                href={chromeStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Chrome}
                  alt="Link to the location of Kanjidex on the Chrome store"
                  style={{ display: "inline", height: "40px" }}
                />
              </a>
            </p>
            <p className="title is-5">
              Current version:{" "}
              <span className="tag is-primary is-light">{chromeVersion}</span>
            </p>
            <p className="title is-6">
              Official site:{" "}
              <span className="has-text-grey">
                <a
                  className="has-text-grey"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://kanjidex.com"
                >
                  kanjidex.com
                </a>
              </span>
            </p>
            <p className="title is-6">
              Github Repo:{" "}
              <a
                className="has-text-grey"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/seekwhence/kanjidex"
              >
                <GitHub />
              </a>
            </p>
            <p className="title is-6">
              Email: <span className="has-text-grey">hello@kanjidex.com</span>
            </p>
          </div>
          <div className="column is-half">
            <div style={{ textAlign: "center" }}>
              <KawaiiCat mood="happy" />
            </div>
            <div className="content is-medium">
              <p>
                {" "}
                First of all, I would like to thank you for using Kanjidex.
                Kanjidex is a personal project that aids me in mastering the
                Japanese language and I hope it helps you too on that journey.
              </p>
              <p>
                You can always reach me at <strong>hello@kanjidex.com</strong>{" "}
                for any questions or requests that you may have.
              </p>
              <p>
                With that out of the way, Kanjidex is a Chrome extension with
                the primary objective being to give you more details on any
                kanji character that you encounter while browsing the web. You
                can look up kanji characters and words, and store them in your
                vocabulary bank in case you wish to remind yourself of them
                later.
              </p>
              <p>
                There is no data tracking or account creation needed. Everything
                that you store is on your machine alone. Privacy is extremely
                important to me and this project is no exception. Kanjidex is
                also an open-source project meaning that anyone can check the
                source code and contribute to it.
              </p>
              <h2 className="is-size-5">Technologies used</h2>
              <p>
                Kanjidex was primarily written in plain JavaScript but as
                Kanjidex grew, it was rewritten in React using the
                create-react-app which also made it easier to create a
                maintainable code and facilitated adding additional features.
              </p>
              <p>
                The most important part of Kanjidex is the actual source of data
                for looking up kanji characters and those are the{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/mistval/unofficial-jisho-api"
                >
                  Unofficial Jisho API
                </a>{" "}
                and{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://kanjialive.com/overview-jp/"
                >
                  {" "}
                  Kanji Alive API
                </a>
                .
              </p>
              <p>
                While the <strong>unofficial jisho api</strong> or simply data
                from{" "}
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="http://jisho.org/"
                >
                  jisho.org
                </a>{" "}
                would suffice, I've found that <strong>Kanji Alive's</strong>{" "}
                animations and audio examples were extremely helpful in my very
                beginnings of learning the Japanese language which is why I
                thought it was crucial to include it in Kanjidex.
              </p>
              <p>
                Other technologies and frameworks used include:{" "}
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://bulma.io/"
                >
                  Bulma
                </a>
                ,{" "}
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/feathericons/react-feather"
                >
                  React Feather
                </a>
                ,{" "}
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://atomiks.github.io/tippyjs/"
                >
                  Tippy.js
                </a>
                ,{" "}
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://react-kawaii.now.sh/#/React%20Kawaii"
                >
                  React Kawaii
                </a>
                , and{" "}
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/mbilbille/dmak"
                >
                  {" "}
                  Draw Me a Kanji
                </a>
                .
              </p>
              <p>
                There are a few others that are no less important and I haven't
                mentioned because then the list would be too long, so you can
                easily check the Kanjidex project on its own{" "}
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/seekwhence/kanjidex"
                >
                  Github repository
                </a>
                .
              </p>
              <p>
                Feel free to contribute to the project or modify it to your own
                liking if those technologies aren't foreign to you.
              </p>
              <p style={{ paddingBottom: "40px" }}>
                And lastly, I wish you happy studying and lots of success in
                whatever you do and pursue. Thank you again!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
