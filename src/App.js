import React from 'react';
import { BreakpointProvider } from 'react-socks';
import Home from "./portfolio/home/home";
import Navigation from "./components/navbar/navbar";
import About from "./portfolio/about/about";
import Skills from "./portfolio/skills/skills";
import Projects from "./portfolio/projects/projects";
import Contact from "./portfolio/contact/contact";

function App(props) {
  return (
    <div className="content">
      <Home/>
      <Navigation/>
      <About/>
      <Skills/>
      {/* BreakpointProvider allows displaying different elements on different viewports */}
      <BreakpointProvider>
        <Projects/>
      </BreakpointProvider>
      <Contact column={props.column}/>
    </div>
  );
}

export default App;
