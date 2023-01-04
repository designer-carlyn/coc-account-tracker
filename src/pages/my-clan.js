import React from "react";
import Layout from "../components/layout";

const MyClan = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};

export const Head = () => <title>My Clan</title>;

export default MyClan;
