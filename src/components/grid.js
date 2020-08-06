import React from "react"
import gridStyles from "./grid.module.scss"
import Modal from "./modal"
import Linus from "../assets/linus.png"
import Scrapbook from "../assets/scrapbook.png"
import ProgressReport from "../assets/progress_report.mp4"
import FakeNewsChallenge from "../assets/fake_news_challenge.pdf"

const {useState} = React;

const Project = (props) => {
    const [isOpen, setOpen] = useState(false);

    function handleOpenModal() {
        setOpen(true);
    }

    function handleCloseModal() {
        setOpen(false);
    }

    let content;
    if (props.img) {
        content = <img src={props.img} alt={props.title}/>;
    } else if (props.video) {
        content = <video aria-label={props.title} controls width="100%"><source src={props.video} type="video/mp4" />Your browser does not support HTML video.</video>;
    } else if (props.link) {
        content = <div className={gridStyles.linkProject}><a href={props.link} target="_blank">{props.title}</a></div>;
    } else {
        content = <div className={gridStyles.linkProject}>{props.title}</div>;
    }
    return (
        <div className={gridStyles.project}>
            {content}
            <div className={gridStyles.overlay}>
                <button onClick={handleOpenModal}>{props.year}</button>
            </div>
            <Modal handleClose={handleCloseModal} isOpen={isOpen}></Modal>
        </div>
    );
};

export default function Grid() {
    return (
        <div className={gridStyles.container}>
            <Project img={Linus} title="Linear Algebra Learning Toolkit (Linus)" year="2014"></Project>
            <Project link="https://github.com/isabelleingato/breakit2016" title="BuildItBreakItFixIt Competition" year="2016"></Project>
            <Project link="https://mlchow.github.io/cos333-project/" video={ProgressReport} title="Progress Report" year="2016"></Project>
            <Project link={FakeNewsChallenge} title="Fake News Challenge" year="2017"></Project>
            <Project img={Scrapbook} title="Facebook-integrated photos app" year="2014"></Project>
            <Project title="Sentiment Analysis on Course Evaluations" year="2015"></Project>
            <Project title="A Dialogue Writing Aid" year="2017"></Project>
            <Project title="Investigation of Comic Triples in Literature using NLP" year="2016"></Project>
        </div>
    )
}