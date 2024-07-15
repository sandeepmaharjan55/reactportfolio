import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CoverageCard from "./CoverageCards";
import Particle from "../Particle";
import wavemagazine from "../../Assets/Coverages/wavemagazine.jpg";
import thekathmandupost from "../../Assets/Coverages/thekathmandupost.jpg";
import inksvilla from "../../Assets/Coverages/Startup_WC.jpg";
import connectin from "../../Assets/Coverages/connectin.png";
import climatelaunchpad from "../../Assets/Coverages/climatelaunchpad.jpg";
import walkmangreencoins from "../../Assets/Coverages/walkman.jpg";
import nehub from "../../Assets/Coverages/nehub.png";
import sunway from "../../Assets/Coverages/sunway.png";
import ap1tv from "../../Assets/Coverages/ap1tv.png";

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
              description="Start-up hub Nepal has declared Inksvilla, the tattoo start-up that aims to work in digitalizing tattoo art, as the winner of Startup World Cup for Nepal. Image source: sharesansar"
              ghLink="https://www.sharesansar.com/index.php/newsdetail/startup-hub-nepal-declares-exvilla-as-nepal-champion-of-startup-world-cup-for-this-year-will-represent-nepal-in-global-competition-in-usa-2022-07-08"
            />
          </Col>

          <Col md={4} className="project-card">
            <CoverageCard
              imgPath={walkmangreencoins}
              isBlog={true}
              title="Walkman by Green Coins, ICT award 2019"
              description="One of the top 5 finalists out of more than 200 applications for all categories in the ICT Award 2019 - The Biggest Tech Award Of Nepal's
Startup ICT Award Category. Image source: ICT Award"
              ghLink="https://www.youtube.com/watch?v=HYQR0mZ2rQw"
            />
          </Col>

          <Col md={4} className="project-card">
            <CoverageCard
              imgPath={nehub}
              isBlog={true}
              title="Entrepreneurs In Spotlight: Walkman-A Step To A Fitter Life - Nehub"
              description="Entrepreneurs In Spotlight: Walkman-A Step To A Fitter Life. Image source: NEHUB"
              ghLink="https://medium.com/@NEHUB/walkman-a-step-to-a-fitter-life-577ae3180866"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <CoverageCard
              imgPath={connectin}
              isBlog={true}
              title="Top 6 finalists, Connect [IN]"
              description="Among more than 400 Nepali and Indian startups, one of the finalists at Connect [IN] - 2nd International Entrepreneurship Conclave. The top 6 ideas appeared in the finale are Airlift, Swadeshi Innovations, Maker Valley, Unschool, Offering Happiness, and Walkman by Green Coins.
              Image source: kathmandupost"
              ghLink="https://kathmandupost.com/money/2019/01/17/entrepreneurs-gather-for-conclave-in-capital"
            />
          </Col>

          <Col md={4} className="project-card">
            <CoverageCard
              imgPath={thekathmandupost}
              isBlog={true}
              title="Covered in the national daily newspaper, The Kathmandu Post, escalates"
              description="Image source: kathmandupost"
              ghLink="#"
              demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <CoverageCard
              imgPath={wavemagazine}
              isBlog={true}
              title="Covered in Nepal's popular magazine, Wave Magazine"
              description="Image source: Wave Magazine"
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <CoverageCard
              imgPath={climatelaunchpad}
              isBlog={true}
              title="Top 11 finalists of Climate Launchpad 2020 South Asia"
              description="Image source: Emerging Technologies"
              ghLink="https://www.youtube.com/watch?v=jy5fg1J43b4"
              demoLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <CoverageCard
              imgPath={sunway}
              isBlog={true}
              title="Environment Solutions through Information Technology"
              description="Interviewed by Sunway College Kathmandu. Image source: sunway college kathmandu"
              ghLink="https://www.youtube.com/watch?v=dieL2NxqycQ"
              demoLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <CoverageCard
              imgPath={ap1tv}
              isBlog={true}
              title="BENEFITS OF WALKING || HEALTH AND WELLNESS"
              description="Covered in the national TV AP1 TV. Image source: Ap1 TV"
              ghLink="https://youtu.be/OvKGWooY2O8?si=dOcKv_iqQPe2XYbw"
              demoLink="#"
            />
          </Col>
        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
