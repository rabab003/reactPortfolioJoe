// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import PorfilePic from "./components/PorfilePic";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <SideBar />
      <div className="ml-[90px] grid grid-cols-1 md:grid-cols-3 ">
        <div className="col-span-2">
          <Introduction />
          <About />
          <Services />
          <Projects/>
          <Footer/>
        </div>
        <div className="hidden md:block">
          <PorfilePic />
        </div>
      </div>
    </>
  );
}

export default App;
