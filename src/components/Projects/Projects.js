import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import agronep from "../../Assets/Projects/agronep.png";
import aichat from "../../Assets/Projects/aichat.png";
import dsshrm from "../../Assets/Projects/dsshrm.png";
import inksvilla from "../../Assets/Projects/inksvilla.png";
import projectXplore from "../../Assets/Projects/projectXplore.png";
import ems from "../../Assets/Projects/ems.png";
import walkmangreencoins from "../../Assets/Projects/walkmangreencoins.png";
import mulipariwar from "../../Assets/Projects/muli.png";
import xmlgeogebra from "../../Assets/Projects/xmlgeogebra.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inksvilla}
              isBlog={false}
              title="Inksvilla - Tattoo Digitalization"
              description="A platform to connect the tattoo artist and enthusiast under the same hood.
              Skills: MERN Stack · Node.js · React.js · MongoDB · Express.js · JavaScript"
              ghLink="#"
              demoLink="https://inksvilla.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={walkmangreencoins}
              isBlog={false}
              title="Walkman by Green Coins"
              description="Walkman motivates users to walk/run/cycle instead of taking vehicles by rewarding the users with incentives from partner brands across the valley. Incentive based discount coupon partnership is the first of its kind in Nepal and moreover, rewards are also proven to be the best way to motivate people. We make this possible by rewarding the users with our virtual 'GreenCoins' which can be used to redeem discounts through our app. 100 Green Coins can be earned by walking 10,000 steps a day. These green coins then can be redeemed to get discounts and offers from various partnered up stores.
              Skills: Node.js · Express.js · React.js · MongoDB"
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xmlgeogebra}
              isBlog={false}
              title="Reverse Engineering Geogebra"
              description="A Java project to add/remove points, lines, and polygons on a 2D plane (with Menu Bar, Drawing Canvas, and Control Panel). The main window of the application is built with a JFrame object from the Java Swing API. The application uses an XML template file to read/create a ggb file which can be opened on geogebra.org. Features: Draw 2D elements, read and write files to and from GeoGebra.org.
              Skills: Java · JFrame · XML · IntelliJ IDEA"
              ghLink="https://github.com/sandeepmaharjan55/xmlgeogebra/tree/V3"
              demoLink="https://www.loom.com/share/e632a35d4cae40109bbc05130599ccfc?sid=1631019d-17bf-44f1-b14e-aa46a746cd43"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectXplore}
              isBlog={false}
              title="The projectXplore"
              description="ProjectXplore was started to provide tourists with essential 
              information for exploring Nepal. It will be offering details on accommodations, 
              dining options, and culinary experiences across the country. 
              From cozy guesthouses to luxurious hotels, and traditional Nepali cuisine 
              to international fare, the platform serves as a comprehensive guide for travelers 
              seeking authentic experiences. Through curated recommendations and reviews, 
              ProjectXplore empowers tourists to make informed decisions and enhance their journey through Nepal.
              Skills: Mongodb · ExpressJs · ReactJs · NodeJs"
              ghLink="https://github.com/sandeepmaharjan55/theprojectexplore/"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dsshrm}
              isBlog={false}
              title="Decision Support System for Human Resource Management"
              description="A web based application to assist manager to make decisions regarding hiring, training, calendar management, etc.
              Skills: ASP.NET · ASP.NET MVC · Microsoft SQL Server · SQL"
              ghLink="https://github.com/sandeepmaharjan55/DSSfHRM"
              demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agronep}
              isBlog={false}
              title="AgroNepal"
              description="A web based interactive platform that allows farmers to buy and sell goods with recommendation system.
              Skills: PHP · PhpMyAdmin · Apache · MySQL · MySQLi · WAMP"
              ghLink="https://github.com/sandeepmaharjan55/AgroNepal"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ems}
              isBlog={false}
              title="Employee Management System"
              description="A menu driven program which allows CRUD and search employee operations. 
              Skills: C++ · Dev C++"
              ghLink="https://github.com/sandeepmaharjan55/employeeMS"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mulipariwar}
              isBlog={false}
              title="Muli Pariwar Lagat"
              description="Muli Pariwar Lagat is a web-based application, to store and view records with charts of
              demographic information for villages, including a PDF file viewer for paper records 
              (transforming paper-based records into digital format).
              Skills: Asp.net MVC · Asp.net · Microsoft SQL Server · MySql"
              ghLink="https://github.com/sandeepmaharjan55/mulipariwarlagat"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aichat}
              isBlog={false}
              title="AI chatbot"
              description="AI Chatbot Web Speech API.
              Skills: JavaScript · Express.js · Socket.io"
              ghLink="https://github.com/sandeepmaharjan55/ai-chatbot"
              demoLink="https://www.loom.com/share/5a504c465dae4a5ca89dfa4fa3f712fb"
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
