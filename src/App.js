import React from "react";

//Imports
import { Header } from "./containers/Header";
import { Content } from "./containers/Content";
import { Footer } from "./containers/Footer";
import './assets/css/styles.css'
function App() {
  const data = [
    {
      text: "Complete React Course",
      completed: true,
    },
    {
      text: "Pet Théo and Hélène",
      completed: false,
    },
    {
      text: "Water office's plants",
      completed: true,
    },
    {
      text: "Catch up on deadlines",
      completed: false,
    },
    {
      text: "Go grocery shopping",
      completed: false,
    },
    {
      text: "Buy a present",
      completed: true,
    },
  ];
  return (
    <>
      {/* This is a react.fragment */}
      <Header />
      {data.length > 0 ? <Content data={data}/> : null}
      <Footer />
    </>
  );
};

export default App
