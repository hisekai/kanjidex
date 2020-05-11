import React from "react";
import { Search, List, MessageSquare, Mail } from "react-feather";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import styled from "styled-components";
import { Colors } from "../helpers/theme";
// pages for the help section
import { Japanese, Word, English } from "./help/Searching";
import {
  CreatingDecks,
  EditingDecks,
  DeletingDecks,
  SavingKanji,
  DeletingKanji,
  SavingWord,
  DeletingWord,
} from "./help/Vocabulary";
import { QuickSearch } from "./help/QuickSearch";
import { Contact } from "./help/Contact";

const StyledHelp = styled.div`
  padding-bottom: 60px;
  figcaption {
    font-size: 1rem;
    color: ${Colors.grey};
  }
  .Help-sidebar {
    padding: 20px 10px;
    .Help-topic {
      text-align: right;
      padding-right: 40px;
      li {
        cursor: pointer;
      }
    }
    header {
      position: relative;
    }
    span {
      position: absolute;
      right: -35px;
      top: 2px;
    }
    .react-tabs__tab--selected {
      color: ${Colors.main}!important;
    }
    li[role="tab"]:hover {
      color: ${Colors.main}!important;
    }
  }
  .content {
    margin-left: 50px;
    max-width: 700px;
  }
`;

const Help = (props) => {
  // toggle sidebar links and change chevron orientation
  return (
    <StyledHelp className="Help">
      <div className="container">
        <div className="has-text-centered" style={{ padding: "40px" }}>
          <h2 className="is-size-4">Help Guide</h2>
          <p style={{ paddingBottom: "20px" }}>
            This is just a short guide that explains available options and
            functionalities
          </p>
          <hr />
        </div>
        <Tabs>
          <div className="columns">
            <div className="column is-one-quarter">
              <aside className="Help-sidebar col-3 has-background-white-ter">
                <nav>
                  <TabList>
                    <div className="Help-topic">
                      <ul className="Help-topic-list">
                        <header className="Help-topic-header">
                          <span className="icon has-text-grey-light">
                            <Search />
                          </span>

                          <div className="Help-topic-name has-text-grey-dark">
                            <strong>Searching</strong>
                          </div>
                        </header>
                        <Tab className="has-text-grey">Japanese</Tab>
                        <Tab className="has-text-grey">Words</Tab>
                        <Tab className="has-text-grey">English</Tab>
                        <header className="Help-topic-header">
                          <span className="icon has-text-grey-light">
                            <List />
                          </span>

                          <div className="Help-topic-name has-text-grey-dark">
                            <strong>Vocabulary</strong>
                          </div>
                        </header>
                        <Tab className="has-text-grey">Creating decks</Tab>
                        <Tab className="has-text-grey">Editing decks</Tab>
                        <Tab className="has-text-grey">Deleting decks</Tab>
                        <Tab className="has-text-grey">Saving a kanji</Tab>
                        <Tab className="has-text-grey">Deleting a kanji</Tab>
                        <Tab className="has-text-grey">Saving a word</Tab>
                        <Tab className="has-text-grey">Deleting a word</Tab>
                        <header className="Help-topic-header">
                          <span className="icon has-text-grey-light">
                            <MessageSquare />
                          </span>

                          <div className="Help-topic-name has-text-grey-dark">
                            <strong>Quick search</strong>
                          </div>
                        </header>
                        <Tab className="has-text-grey">How to</Tab>
                        <header className="Help-topic-header">
                          <span className="icon has-text-grey-light">
                            <Mail />
                          </span>

                          <div className="Help-topic-name has-text-grey-dark">
                            <strong>Contact</strong>
                          </div>
                        </header>
                        <Tab className="has-text-grey">Contact Info</Tab>
                      </ul>
                    </div>
                  </TabList>
                </nav>
              </aside>
            </div>
            <div className="column">
              <div className="content is-medium">
                <TabPanel>
                  <Japanese />
                </TabPanel>
                <TabPanel>
                  <Word />
                </TabPanel>
                <TabPanel>
                  <English />
                </TabPanel>
                <TabPanel>
                  <CreatingDecks />
                </TabPanel>
                <TabPanel>
                  <EditingDecks />
                </TabPanel>
                <TabPanel>
                  <DeletingDecks />
                </TabPanel>
                <TabPanel>
                  <SavingKanji />
                </TabPanel>
                <TabPanel>
                  <DeletingKanji />
                </TabPanel>
                <TabPanel>
                  <SavingWord />
                </TabPanel>
                <TabPanel>
                  <DeletingWord />
                </TabPanel>
                <TabPanel>
                  <QuickSearch />
                </TabPanel>
                <TabPanel>
                  <Contact />
                </TabPanel>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </StyledHelp>
  );
};

export default Help;
