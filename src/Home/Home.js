import React, { useState } from "react";

import { ContextID } from "../Helper/ContextID";

import Test from "../Test";

import "./Home.css";
const Home = () => {
  const [chartData, setChartData] = useState("dddds");

  return (
    <ContextID.Provider
      value={{
        chartData,
        setChartData,
      }}
    >
      <>
        <Test />
      </>
    </ContextID.Provider>
  );
};

export default Home;
