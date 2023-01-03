// Step 1: Import React
import React from "react";
import Layout from "../components/layout";

// Step 2: Define your component
const Index = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};

export const Head = () => <title>Home</title>;

// Step 3: Export your component
export default Index;
