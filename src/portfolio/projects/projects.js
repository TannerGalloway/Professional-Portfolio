import React, {Component} from "react";
import ProjectMediumViewport from "../../components/project-link/project-link-mediumViewport";
import ProjectLargeViewport from"../../components/project-link/project-link-largeViewport";
import Breakpoint from 'react-socks';
import "./projects.css";

// project images
import WordGuess from "../../images/project-thumbnails/WordGuess.jpg";
import RNGGame from "../../images/project-thumbnails/rnglogo.png";
import Trivia from "../../images/project-thumbnails/TriviaGame.jpg";
import GiphyGifs from "../../images/project-thumbnails/giphy-gifs.png";
import TrainSchedule from "../../images/project-thumbnails/TrainSchedule.jpg";
import FriendFinder from "../../images/project-thumbnails/FriendFinder.png";
import Burger from "../../images/project-thumbnails/burger.png";
import APINode from "../../images/project-thumbnails/terminal.png";
import Bamazon from "../../images/project-thumbnails/online-store.jpg";
import Webscrape from "../../images/project-thumbnails/web-scraper.png";
import Memorygame from "../../images/project-thumbnails/memory-game.jpg";
import RoadTrip from "../../images/project-thumbnails/Road-Trip-Planner.jpg";

class Projects extends Component{
    render(){
        return(
            <div className="projects-content">
                <div className="title">
                    <h2>Projects</h2>
                    <hr></hr>
                </div>
                <div className="container">
                        {/* visable on laptops and desktops */}
                            <Breakpoint large up>

                            <ProjectLargeViewport name="Word Guessing Game" src={WordGuess} languages="HTML, CSS, Javascript" webpage="https://tannergalloway.github.io/Word-Guess-Game/" code="https://github.com/TannerGalloway/Word-Guess-Game"/>

                            <ProjectLargeViewport name="RNG Matching Game" src={RNGGame} languages="HTML, CSS, Bootstrap, Javascript" webpage="https://tannergalloway.github.io/RNG-Matching-Game/" code="https://github.com/TannerGalloway/RNG-Matching-Game"/>

                            <ProjectLargeViewport name="Trivia Game" src={Trivia} languages="HTML, CSS, Bootstrap, Javascript" webpage="https://tannergalloway.github.io/TriviaGame/" code="https://github.com/TannerGalloway/TriviaGame"/>

                            <ProjectLargeViewport name="Gifs and Movies" src={GiphyGifs} languages="HTML, CSS, Bootstrap, Javascript" webpage="https://tannergalloway.github.io/GifTastic/" code="https://github.com/TannerGalloway/GifTastic"/>

                            <ProjectLargeViewport name="Train Schedule" src={TrainSchedule} languages="HTML, CSS, Bootstrap, Javascript, Firebase" webpage="https://tannergalloway.github.io/Train-Schedule/" code="https://github.com/TannerGalloway/Train-Schedule"/>

                            <ProjectLargeViewport name="Friend Finder" src={FriendFinder} languages="HTML, CSS, Bootstrap, Javascript, Node.js, Express.js " webpage="https://quiet-inlet-49165.herokuapp.com/" code="https://github.com/TannerGalloway/Friend-Finder"/>

                            <ProjectLargeViewport name="Eat Da Burger" src={Burger} languages="HTML, CSS, Bootstrap, Javascript, Jquery, Express.js, MySQL" webpage="https://guarded-garden-22512.herokuapp.com/" code="https://github.com/TannerGalloway/burger"/>

                            <ProjectLargeViewport name="API Node App" src={APINode} languages="Javascript, Node.js, Terminal" webpage="https://github.com/TannerGalloway/API-Node-App" code="https://github.com/TannerGalloway/API-Node-App"/>

                            <ProjectLargeViewport name="Bamazon" src={Bamazon} languages="Javascript, Node.js, Terminal, MySQL" webpage="https://github.com/TannerGalloway/bamazon" code="https://github.com/TannerGalloway/bamazon"/>

                            <ProjectLargeViewport name="News Web Scraper" src={Webscrape} languages="HTML, CSS, Bootstrap, Javascript, Express.js, Node.js, Mongodb" webpage="https://warm-reaches-64828.herokuapp.com/" code="https://github.com/TannerGalloway/MongoScraper"/>

                            <ProjectLargeViewport name="Memory Game" src={Memorygame} languages="HTML, CSS, Bootstrap, Javascript, React" webpage="https://rocky-retreat-72095.herokuapp.com/" code="https://github.com/TannerGalloway/Clicky-Game"/>

                            <ProjectLargeViewport name="Road Trip Planner" src={RoadTrip} languages="HTML, CSS, Javascript, Node.js, React.js, MongoDB, Express.js" webpage="https://lychee-sundae-50558.herokuapp.com/" code="https://github.com/TannerGalloway/Are-We-There-Yet"/>
                            </Breakpoint>

                            
                        {/* visable on phones and tablets */}
                        <Breakpoint medium down>

                            <ProjectMediumViewport name="Word Guessing Game" src={WordGuess} languages="HTML, CSS, Javascript" webpage="https://tannergalloway.github.io/Word-Guess-Game/" code="https://github.com/TannerGalloway/Word-Guess-Game"/>

                            <ProjectMediumViewport name="RNG Matching Game" src={RNGGame} languages="HTML, CSS, Javascript" webpage="https://tannergalloway.github.io/RNG-Matching-Game/" code="https://github.com/TannerGalloway/RNG-Matching-Game"/>

                            <ProjectMediumViewport name="Trivia Game" src={Trivia} languages="HTML, CSS, Javascript" webpage="https://tannergalloway.github.io/TriviaGame/" code="https://github.com/TannerGalloway/TriviaGame"/>

                            <ProjectMediumViewport name="Gifs and Movies" src={GiphyGifs} languages="HTML, CSS, Javascript" webpage="https://tannergalloway.github.io/GifTastic/" code="https://github.com/TannerGalloway/GifTastic"/>

                            <ProjectMediumViewport name="Train Schedule" src={TrainSchedule} languages="HTML, CSS, Javascript, Firebase" webpage="https://tannergalloway.github.io/Train-Schedule/" code="https://github.com/TannerGalloway/Train-Schedule"/>

                            <ProjectMediumViewport name="Friend Finder" src={FriendFinder} languages="HTML, CSS, Javascript, Node.js, Express.js " webpage="https://quiet-inlet-49165.herokuapp.com/" code="https://github.com/TannerGalloway/Friend-Finder"/>

                            <ProjectMediumViewport name="Eat Da Burger" src={Burger} languages="HTML, CSS, Javascript, MySQL" webpage="https://guarded-garden-22512.herokuapp.com/" code="https://github.com/TannerGalloway/burger"/>

                            <ProjectMediumViewport name="API Node App" src={APINode} languages="Javascript, Node.js, Terminal" webpage="https://github.com/TannerGalloway/API-Node-App" code="https://github.com/TannerGalloway/API-Node-App"/>

                            <ProjectMediumViewport name="Bamazon" src={Bamazon} languages="Javascript, Node.js, Terminal, MySQL" webpage="https://github.com/TannerGalloway/bamazon" code="https://github.com/TannerGalloway/bamazon"/>

                            <ProjectMediumViewport name="News Web Scraper" src={Webscrape} languages="HTML, CSS, Javascript Node.js, Mongodb" webpage="https://warm-reaches-64828.herokuapp.com/" code="https://github.com/TannerGalloway/MongoScraper"/>
                            
                            <ProjectMediumViewport name="Memory Game" src={Memorygame} languages="HTML, CSS, Javascript, JSX, React" webpage="https://rocky-retreat-72095.herokuapp.com/" code="https://github.com/TannerGalloway/Clicky-Game"/>

                            <ProjectMediumViewport name="Road Trip Planner" src={RoadTrip}  languages="HTML, CSS, Javascript, Node.js, JSX, React, Mongodb, Express.js" webpage="https://lychee-sundae-50558.herokuapp.com/" code="https://github.com/TannerGalloway/Are-We-There-Yet"/>

                        </Breakpoint>
                </div>
            </div>
        );
    };
};

export default Projects;