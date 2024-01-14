import React, { forwardRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

function Projects(props) {
  return (
    <Container fluid className="project-section" ref={props.projectref}>
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} style={{ height: "20vh" }} className="project-card">
            <ProjectCard
              imgPath="quiz.png"
              title="Quiz Competetion   "
              description="Completed as a freelancer on Upwork. Developed a fully functional quiz competition website using the MERN Stack. Integrated the Razorpay API for seamless payment processing, enabling secure and reliable online transactions."
              ghLink="https://github.com/chaetesh/Frontend_React_Quiz-master"
            />
          </Col>
          <Col md={4} style={{ height: "20vh" }} className="project-card">
            <ProjectCard
              imgPath="unfold.png"
              title="Medical DataExchange"
              description=" Decentralized marketplace for sharing patients health data using smart-contract and IPFS-based data storage. This serves as a secure platform enabling patients to safely share and monetize their medical information with researchers."
              ghLink="https://github.com/chaetesh/healthdata-marketplace"
            />
          </Col>
          <Col md={4} style={{ height: "20vh" }} className="project-card">
            <ProjectCard
              imgPath="prompt.png"
              title="Prompting Website"
              description="Developed a open-sourced nextjs-powered creative prompting tool, leveraging its full-stack capabilities to build both the intuitive frontend experience and the robust backend API, enabling seamless user interaction and data management."
              ghLink="https://github.com/chaetesh/nextjs_prompts"
            />
          </Col>
          <Col md={4} style={{ height: "20vh" }} className="project-card">
            <ProjectCard
              imgPath="token.png"
              title="Creating Custom token in BlockChain"
              description="This project creates a custom token in blockchain using OpenZeppelin. The token is a fungible token (ERC20), which means that each token is identical to the next. The token has a total supply of 50 tokens, and it can be transferred between accounts."
              ghLink="https://github.com/chaetesh/hardhat-erc20"
            />
          </Col>
          <Col md={4} style={{ height: "20vh" }} className="project-card">
            <ProjectCard
              imgPath="lottery.png"
              title="Smart Contract Lottery using Blockchain"
              description="The decentralized lottery App, built with Hardhat toolkit, delivers trusted lottery selection. Explored random number generation using Chainlink VRF and learned how to optimize gas costs for smooth user experience."
              ghLink="https://github.com/chaetesh/hardhat-smartcontract-lottery"
            />
          </Col>
          <Col md={4} style={{ height: "20vh" }} className="project-card">
            <ProjectCard
              imgPath="news.png"
              title="Developed a News app with Custom API"
              description="This news app uses React and Node.js',providing users with a comprehensive, customizable news experience. I built a custom API to handle data retrieval and delivery, ensuring smooth performance and real-time updates."
              ghLink="https://github.com/chaetesh/NewsApp_FrontEnd"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default forwardRef(Projects);
