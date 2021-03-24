import * as React from "react";
import "./styles.scss";

import Logo from "../images/logo.png";

const IndexPage = () => {
  return (
    <main>
      <title>Simon Achkar | Software Developer</title>
      <div className="hero">
        <img alt="Simon Achkar Logo" src={Logo} className="logo" />
        <div className="col">
          <h1>Hi, I'm Simon</h1>
          <p className="large">
            I’m a Software Developer based in Halifax, NS currently working with{" "}
            <a hfref="https://www.redspace.com/">REDspace</a>.
          </p>
          <p className="small">
            I build and design websites on the weekends! Got a weekend project
            for me? <a hfref="mailto:simon@simonachkar.com">Get in touch</a>.
          </p>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
