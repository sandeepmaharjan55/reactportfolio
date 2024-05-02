import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import agronep from "../../Assets/Projects/agronep.png";
import aichat from "../../Assets/Projects/aichat.png";
import dsshrm from "../../Assets/Projects/dsshrm.png";
import inksvilla from "../../Assets/Projects/inksvilla.png";
import ems from "../../Assets/Projects/ems.png";
import walkmangreencoins from "../../Assets/Projects/walkmangreencoins.png";

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
              description="Walkman motivates users to walk/run/cycle instead of taking vehicles by rewarding the users with incentives from partner brands across the valley. Incentive based discount coupon partnership is the first of its kind in Nepal and moreover, rewards are also proven to be the best way to motivate people. We make this possible by rewarding the users with our virtual 'GreenCoins' which can be used to redeem discounts through our app.</br>100 Green Coins can be earned by walking 10,000 steps a day. These green coins then can be redeemed to get discounts and offers from various partnered up stores.
              Skills: Node.js · Express.js · React.js · MongoDB"
              ghLink="#"
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
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model.
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
              imgPath={aichat}
              isBlog={false}
              title="AI chatbot"
              description="AI Chatbot Web Speech API.
              Skills: JavaScript · Express.js · Socket.io"
              ghLink="https://github.com/sandeepmaharjan55/ai-chatbot"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
