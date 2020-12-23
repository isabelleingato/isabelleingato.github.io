import React from "react";
import Layout from "../components/layout";
import ProfileImg from "../assets/iingato_profile_photo.jpg";

export default function About() {
  return (
    <Layout>
      <img
        style={{ height: "350px", width: "200px" }}
        src={ProfileImg}
        alt="Profile photo for Isabelle Ingato"
      />
      <p>
        I'm a Senior Software Engineer in Hoboken, NJ. Find out more about me on{" "}
        <a
          href="https://www.linkedin.com/pub/isabelle-ingato/70/486/a74"
          target="_blank"
        >
          LinkedIn
        </a>{" "}
        or{" "}
        <a href="https://github.com/isabelleingato" target="_blank">
          GitHub
        </a>
        .
      </p>
    </Layout>
  );
}
