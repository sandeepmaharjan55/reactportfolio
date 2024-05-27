import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Er. Sandeep Maharjan </span>
            {/* from <span className="purple"> Enid, Oklahoma</span> */}
            <br />
            I am currently seeking full time positions.
            <br />
            I'm a dedicated and results-driven professional with a strong background in software 
            engineering and a passion for teaching. Currently serving as a Graduate Teaching Assistant, 
            I actively contribute to shaping the next generation's understanding of Data Structures and Algorithm Analysis, 
            Automata and Formal Languages, and Introduction to Machine Learning for 4 consecutive semesters.
            <br />In my previous role as a Full Stack Software Engineer at Smart Tech Nepal Pvt. Ltd., 
              I played a pivotal role in developing and maintaining client and server-side applications using MERN Stack. 
              My contributions led to enhanced system performance, scalability, and improved database management
               with a focus on MongoDB.
               <br />During my tenure as a Software Engineer at Bigfoot Infotech Pvt. Ltd., 
               I collaborated closely with experienced software engineers to troubleshoot NodeJS app issues,
               documented code and processes for team knowledge sharing, implemented middleware components, and collaborated with various stakeholders. I enhanced product performance, added functionality, corrected coding issues, and updated interfaces. I also stayed updated with the latest backend development trends and technologies.
                <br />As the Co-founder and Software Engineer at Walkman by Green Coins, 
                  I spearheaded the development of the Android mobile application's back-end using Node Js. 
                  Our achievements include being finalists in renowned entrepreneurial events like Connect [IN] and ICT Award 2019, 
                  showcasing our commitment to innovation and excellence.
                  <br />I proudly hold the title of Microsoft Certified Professional, specializing in Server Virtualization with Windows Server Hyper-V and System Center.
                  <br />I thrive in collaborative, cross-functional environments and am always eager to take on new challenges. 
                    Let's connect and explore opportunities for growth, innovation, and impactful collaborations!
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Soccer
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
