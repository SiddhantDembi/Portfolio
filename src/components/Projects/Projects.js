import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import timestamp from "../../Assets/Projects/timestamp.png";
import real_estate from "../../Assets/Projects/real.png";
import movie from "../../Assets/Projects/movie.png";
import farm from "../../Assets/Projects/farm.png";
import career from "../../Assets/Projects/career.png";
import analysis from "../../Assets/Projects/analysis.png";
import dataclean from "../../Assets/Projects/Datacleaner.png";
import insta from "../../Assets/Projects/insta.png";
import intel from "../../Assets/Projects/intel.png";
import atm from "../../Assets/Projects/atm.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dataclean}
              isBlog={false}
              title="Data Cleaner"
              description="This project provides a user-friendly interface for cleaning and processing tabular data files (CSV, XLS, XLSX). The following operations can be implemented: Replace Null Values, Remove Duplicate Rows, Remove Missing Values, Convert to Lowercase, Delete Columns, Sort Column and Capitalize Columns"
              ghLink="https://github.com/SiddhantDembi/Data-Cleaning"
              demoLink="https://datacleaner.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={timestamp}
              isBlog={false}
              title="Timestamp App"
              description="This Python project is a simple Date and Time Logger application designed to assist users in tracking timestamps conveniently. The application allows users to log timestamps, view logs, and delete logs. The application is implemented using the Streamlit and MySQL."
              ghLink="https://github.com/SiddhantDembi/Time-Stamp-Project"
              demoLink="https://timestamp.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={analysis}
              isBlog={false}
              title="Timestamp Analysis App"
              description="The Timestamp Analysis Application is a Streamlit-based web application designed to analyze realtime data fetched from a MySQL database. This data records the number of times push-ups were done each day. The application provides insights such as monthly counts, average monthly counts, dates with the highest count, frequency with user input, days with frequency, and hourly frequency."
              ghLink="https://github.com/SiddhantDembi/Date-Time-Analysis"
              demoLink="https://timestampanalysis.streamlit.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={intel}
              isBlog={false}
              title="Entelligentsia"
              description="
              This backend project was developed during an internship at Entelligentsia. It was implemented using Python, AWS Lambda, AWS DynamoDB, and the Serverless Framework. The project encompasses APIs for functionalities such as login, registration, retrieving events, and posting events."
              ghLink="https://github.com/SiddhantDembi/Entelligentsia"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={career}
              isBlog={false}
              title="Career Recomendation System"
              description="A career recommendation system that suggests career paths based on the user's interests and skills. The system uses a decision tree algorithm to make recommendations."
              ghLink="https://github.com/SiddhantDembi/Career-Recomendation-System"
              demoLink="https://career-wise-recomend.vercel.app/"     
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={insta}
              isBlog={false}
              title="Instagram Unfollowers"
              description="This project is a simple web application built to help Instagram users identify accounts they follow but who don't follow them back. Users can input their Instagram credentials, and the application will retrieve the list of accounts they follow but who don't follow them back. The application also provides links to visit the profiles of these accounts directly from the interface."
              ghLink="https://github.com/SiddhantDembi/Insta-Unfollowers"
              demoLink="https://unfollowers.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={real_estate}
              isBlog={false}
              title="Real Estate Portal"
              description="This project is a real estate portal developed using Java and MySQL. The portal allows users to browse available properties for sale or rent. Users can apply filters such as location, price range, and sale/rent status to refine their search. Each property listing includes detailed information. Once purchased, properties are marked as unavailable for sale."
              ghLink="https://github.com/SiddhantDembi/Real-Estate-Portal"
              // demoLink=""     
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie Ticket Booking System"
              description="This is a simple cinema booking system implemented in Python using Tkinter for the graphical user interface (GUI) and MySQL for the database. Users can register, login, select movies, book seats, and make payments through this system."
              ghLink="https://github.com/SiddhantDembi/Movie-Ticket-Booking-System"
              // demoLink=""     
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={farm}
              isBlog={false}
              title="Farm Easy"
              description="An E commerce platform where users can purchase organic products directly from the farmers. Built using Jinja templates, Flask, and MySQL."
              ghLink="https://github.com/SiddhantDembi/SFIT-Hackathon"
              // demoLink=""     
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={atm}
              isBlog={false}
              title="Atm"
              description="This command line project simulates a simple ATM system where users can login, register, check balance, withdraw, deposit, and logout."
              ghLink="https://github.com/SiddhantDembi/Atm"
              // demoLink=""     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
