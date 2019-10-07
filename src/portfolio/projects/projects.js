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
import Webscrape from "../../images/project-thumbnails/web-scraper.png";
import Memorygame from "../../images/project-thumbnails/memory-game.jpg";
import RoadTrip from "../../images/project-thumbnails/Road-Trip-Planner.jpg";
import Recipes from "../../images/project-thumbnails/logo.png";
import MorningPost from "../../images/project-thumbnails/Morning-post.jpg";

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

                            <ProjectLargeViewport name="Morning Post" src={MorningPost} languages="HTML, CSS, JS, Jquery, Node.js, Handlebars, Express, MySQL" webpage="https://morningpost.herokuapp.com/" code="https://github.com/TannerGalloway/Morning-Post"/>

                            <ProjectLargeViewport name="Food &amp; Recipes" src={Recipes} languages="HTML, CSS, JS, Node.js, React" webpage="https://worldwide-cooking.herokuapp.com/" code="https://github.com/TannerGalloway/Cookbook"/>

                            <ProjectLargeViewport name="Trivia Game" src={Trivia} languages="HTML, CSS, JS" webpage="https://tannergalloway.github.io/TriviaGame/" code="https://github.com/TannerGalloway/TriviaGame"/>

                            <ProjectLargeViewport name="Word Guessing Game" src={WordGuess} languages="HTML, CSS, JS" webpage="https://tannergalloway.github.io/Word-Guess-Game/" code="https://github.com/TannerGalloway/Word-Guess-Game"/>

                            <ProjectLargeViewport name="RNG Matching Game" src={RNGGame} languages="HTML, CSS, JS" webpage="https://tannergalloway.github.io/RNG-Matching-Game/" code="https://github.com/TannerGalloway/RNG-Matching-Game"/>

                            <ProjectLargeViewport name="Gifs &amp; Movies" src={GiphyGifs} languages="HTML, CSS, JS" webpage="https://tannergalloway.github.io/GifTastic/" code="https://github.com/TannerGalloway/GifTastic"/>

                            <ProjectLargeViewport name="Eat Da Burger" src={Burger} languages="HTML, CSS, JS, Jquery, Express, MySQL" webpage="https://guarded-garden-22512.herokuapp.com/" code="https://github.com/TannerGalloway/burger"/>

                            <ProjectLargeViewport name="Memory Game" src={Memorygame} languages="HTML, CSS, JS, React" webpage="https://rocky-retreat-72095.herokuapp.com/" code="https://github.com/TannerGalloway/Clicky-Game"/>

                            <ProjectLargeViewport name="News Web Scraper" src={Webscrape} languages="HTML, CSS, JS, Express, Node.js, MongoDB" webpage="https://warm-reaches-64828.herokuapp.com/" code="https://github.com/TannerGalloway/MongoScraper"/>

                            <ProjectLargeViewport name="Road Trip Planner" src={RoadTrip} languages="HTML, CSS, JS, Node.js, React, MongoDB, Express" webpage="https://lychee-sundae-50558.herokuapp.com/" code="https://github.com/TannerGalloway/Are-We-There-Yet"/>

                            <ProjectLargeViewport name="Train Schedule" src={TrainSchedule} languages="HTML, CSS, JS, Firebase" webpage="https://tannergalloway.github.io/Train-Schedule/" code="https://github.com/TannerGalloway/Train-Schedule"/>

                            <ProjectLargeViewport name="Friend Finder" src={FriendFinder} languages="HTML, CSS, JS, Node.js, Express" webpage="https://quiet-inlet-49165.herokuapp.com/" code="https://github.com/TannerGalloway/Friend-Finder"/>

                            </Breakpoint>

                            
                        {/* visable on phones and tablets */}
                        <Breakpoint medium down>
                            
                            <ProjectMediumViewport name="Morning Post" src={MorningPost} languages="HTML, CSS, JS, Jquery, Node.js, Handlebars, Express, MySQL, Sequelize" webpage="https://morningpost.herokuapp.com/" code="https://github.com/TannerGalloway/Morning-Post"/>

                            <ProjectMediumViewport name="Food &amp; Recipes" src={Recipes} languages="HTML, CSS, JS, Node.js, React" webpage="https://worldwide-cooking.herokuapp.com/" code="https://github.com/TannerGalloway/Cookbook"/>

                            <ProjectMediumViewport name="Trivia Game" src={Trivia} languages="HTML, CSS, JS" webpage="https://tannergalloway.github.io/TriviaGame/" code="https://github.com/TannerGalloway/TriviaGame"/>

                            <ProjectMediumViewport name="Word Guessing Game" src={WordGuess} languages="HTML, CSS, JS" webpage="https://tannergalloway.github.io/Word-Guess-Game/" code="https://github.com/TannerGalloway/Word-Guess-Game"/>

                            <ProjectMediumViewport name="RNG Matching Game" src={RNGGame} languages="HTML, CSS, JS" webpage="https://tannergalloway.github.io/RNG-Matching-Game/" code="https://github.com/TannerGalloway/RNG-Matching-Game"/>

                            <ProjectMediumViewport name="Gifs &amp; Movies" src={GiphyGifs} languages="HTML, CSS, JS" webpage="https://tannergalloway.github.io/GifTastic/" code="https://github.com/TannerGalloway/GifTastic"/>

                            <ProjectMediumViewport name="Eat Da Burger" src={Burger} languages="HTML, CSS, JS, MySQL" webpage="https://guarded-garden-22512.herokuapp.com/" code="https://github.com/TannerGalloway/burger"/>

                            <ProjectMediumViewport name="Memory Game" src={Memorygame} languages="HTML, CSS, JS, JSX, React" webpage="https://rocky-retreat-72095.herokuapp.com/" code="https://github.com/TannerGalloway/Clicky-Game"/>

                            <ProjectMediumViewport name="News Web Scraper" src={Webscrape} languages="HTML, CSS, JS Node.js, MongoDB" webpage="https://warm-reaches-64828.herokuapp.com/" code="https://github.com/TannerGalloway/MongoScraper"/>

                            <ProjectMediumViewport name="Road Trip Planner" src={RoadTrip}  languages="HTML, CSS, JS, Node.js, JSX, React, MongoDB, Express" webpage="https://lychee-sundae-50558.herokuapp.com/" code="https://github.com/TannerGalloway/Are-We-There-Yet"/>

                            <ProjectMediumViewport name="Train Schedule" src={TrainSchedule} languages="HTML, CSS, JS, Firebase" webpage="https://tannergalloway.github.io/Train-Schedule/" code="https://github.com/TannerGalloway/Train-Schedule"/>

                            <ProjectMediumViewport name="Friend Finder" src={FriendFinder} languages="HTML, CSS, JS, Node.js, Express " webpage="https://quiet-inlet-49165.herokuapp.com/" code="https://github.com/TannerGalloway/Friend-Finder"/>

                        </Breakpoint>
                </div>
            </div>
        );
    };
};

export default Projects;