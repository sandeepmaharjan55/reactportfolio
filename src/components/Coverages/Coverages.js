import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CoverageCard from "./CoverageCards";
import Particle from "../Particle";
import inksvilla from "../../Assets/Coverages/Startup_WC.jpg";
import walkmangreencoins from "../../Assets/Coverages/walkman.jpg";
import nehub from "../../Assets/Coverages/nehub.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          News Coverages of my<strong className="purple"> Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CoverageCard
              imgPath={inksvilla}
              isBlog={true}
              title="Startup Hub Nepal declares Inksvilla as Nepal champion of Startup World Cup for this year; will represent Nepal in global competition in USA - sharesansar"
              description="Start-up hub Nepal has declared Inksvilla, the tattoo start-up that aims to work in digitalizing tattoo art, as the winner of Startup World Cup for Nepal."
              ghLink="https://www.sharesansar.com/index.php/newsdetail/startup-hub-nepal-declares-exvilla-as-nepal-champion-of-startup-world-cup-for-this-year-will-represent-nepal-in-global-competition-in-usa-2022-07-08"
            />
          </Col>

          <Col md={4} className="project-card">
            <CoverageCard
              imgPath={walkmangreencoins}
              isBlog={true}
              title="Walkman by Green Coins - ICT award 2019"
              description="One of the top 5 finalists out of more than 200 applications for all categories in the ICT Award 2019 - The Biggest Tech Award Of Nepal's
Startup ICT Award Category."
              ghLink="https://www.youtube.com/watch?v=HYQR0mZ2rQw"
            />
          </Col>

          <Col md={4} className="project-card">
            <CoverageCard
              imgPath={nehub}
              isBlog={true}
              title="Entrepreneurs In Spotlight: Walkman-A Step To A Fitter Life - Nehub"
              description="Entrepreneurs In Spotlight: Walkman-A Step To A Fitter Life"
              ghLink="https://medium.com/@NEHUB/walkman-a-step-to-a-fitter-life-577ae3180866"
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
