import React from "react";
import * as gridStyles from "./grid.module.scss";
import Modal from "./modal";
import Linus from "../assets/linus.png";
import Scrapbook from "../assets/scrapbook.png";
import ProgressReport from "../assets/progress_report.mp4";
import FakeNewsChallenge from "../assets/fake_news_challenge.pdf";

const { useState } = React;

const Project = (props) => {
  const [isOpen, setOpen] = useState(false);

  function handleOpenModal() {
    // TODO: Handle this in a more React way
    document.documentElement.classList.add("noscroll");
    setOpen(true);
  }

  function handleCloseModal() {
    // TODO: Handle this in a more React way
    document.documentElement.classList.remove("noscroll");
    setOpen(false);
  }

  let content;
  if (props.img) {
    content = <img src={props.img} alt={props.title} />;
  } else if (props.video) {
    content = (
      <video aria-label={props.title} controls width="100%">
        <source src={props.video} type="video/mp4" />
        Your browser does not support HTML video.
      </video>
    );
  } else if (props.link) {
    content = (
      <div className={gridStyles.linkProject}>
        <a href={props.link} target="_blank">
          {props.title}
        </a>
      </div>
    );
  } else {
    content = <div className={gridStyles.linkProject}>{props.title}</div>;
  }
  return (
    <div className={gridStyles.project}>
      {content}
      <div className={gridStyles.overlay}>{props.year}</div>
      <button className={gridStyles.modalButton} onClick={handleOpenModal}>
        Learn more
      </button>
      <Modal handleClose={handleCloseModal} isOpen={isOpen}>
        <p>{props.description}</p>
        {props.repo && <a href={props.repo}>(Repo)</a>}
      </Modal>
    </div>
  );
};

export default function Grid() {
  return (
    <div className={gridStyles.container}>
      <Project
        img={Linus}
        title="Linear Algebra Learning Toolkit (Linus)"
        year="2014"
        description="HackPrinceton 2014: In less than 24 hours with 2 friends, developed a Linear Algebra learning toolkit that helps visualize the steps of finding the kernel or image of a matrix."
      ></Project>
      <Project
        link="https://github.com/isabelleingato/breakit2016"
        title="BuildItBreakItFixIt Competition"
        year="2016"
        description="In one evening with 2 friends, wrote scripts demonstrating security and other vulnerabilities in competitor teams' servers (red team simulation)."
      ></Project>
      <Project
        link="https://mlchow.github.io/cos333-project/"
        video={ProgressReport}
        repo="https://github.com/mlchow/cos333-project"
        title="Progress Report"
        year="2016"
        description="Built a major, minor, and course suggestion engine as well as degree progress tracking tool for students at Princeton."
      ></Project>
      <Project
        link={FakeNewsChallenge}
        title="Fake News Challenge"
        year="2017"
        description="As a final project for COS 401, trained, tested, and analyzed a multi-label classifier for stance detection."
      ></Project>
      <Project
        img={Scrapbook}
        title="Facebook-integrated photos app"
        year="2014"
        repo="https://github.com/raguilar1/facial-recognition"
        description="Over 6 weeks after freshman year, worked as an intern team to implement the Eigenface (facial recognition) algorithm in Java. Also created an app to analyze social graphs using social media photo tags."
      ></Project>
      <Project
        title="Sentiment Analysis on Course Evaluations"
        year="2015"
        description="Over the course of a semester and as my introduction to machine learning, developed a sentiment classifier trained on Princeton course evaluations."
      ></Project>
      <Project
        title="A Dialogue Writing Aid"
        year="2017"
        description="Over the course of my senior year, created real-time screenwriting suggestion software that improves over time based on edits to its suggestions by the writer."
      ></Project>
      <Project
        title="Investigation of Comic Triples in Literature using NLP"
        year="2016"
        description="Over the course of a semester, built a pipeline for identifying the comic triple pattern in literature and generating them."
      ></Project>
    </div>
  );
}
