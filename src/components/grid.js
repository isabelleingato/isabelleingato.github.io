import React from "react"
import gridStyles from "./grid.module.scss"
import Linus from "../assets/linus.png"
import Scrapbook from "../assets/scrapbook.png"

const Project = (props) => {
    let content;
    if (props.img) {
        content = <img src={props.img} alt={props.title}/>;
    } else if (props.video) {
        content = <video aria-label={props.title} controls><source src={props.video} type="video/mp4" />Your browser does not support HTML video.</video>;
    } else {
        content = <div className={gridStyles.linkProject}><a href={props.link} target="_blank">{props.title}</a></div>;
    }
    return (
        <div className={gridStyles.project}>
            {content}
            <div className={gridStyles.overlay}>
                {props.year}
            </div>
        </div>
    );
};

export default function Grid() {
    // TODO: Add senior thesis, Fake News Challenge, and other work
    return (
        <div className={gridStyles.container}>
            <Project img={Linus} title="Linear Algebra Learning Toolkit (Linus)" year="2014"></Project>
            <Project link="https://github.com/isabelleingato/breakit2016" title="BuildItBreakItFixIt Competition" year="2016"></Project>
            <Project link="https://mlchow.github.io/cos333-project/" video="" title="Progress Report" year="2016"></Project>
            <Project img={Scrapbook} title="Facebook-integrated photos app" year="2014"></Project>
        </div>
    )
}