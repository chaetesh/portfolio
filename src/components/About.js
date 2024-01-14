import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";
import Techstack from "./TechStack";
import { forwardRef } from "react";

function About(props) {
  return (
    <Container style={{ height: "130vh", margin: "0px 40px",paddingTop:"30vh" }} ref={props.aboutref}>
      <Row style={{ marginLeft: "3vw" }}>
        <Col className="text-start">
          <h1>About{" "} 
          <span className="main-name">Me</span>
          </h1>
          <p className="mt-4 fs-4">
            Hi there! 👋 I'm a Computer Science student specalized in cloud
            computing at SRM University. I'm a Full Stack Developer have done
            few freelance projects, personal projects and an internship. I'm
            also into Web3, to build cooler and decentralized applications using
            blockchain tech
          </p>
        </Col>
        <Col style={{ position: "relative" }}>
          <Image
            style={{
              marginTop: "15vh",
              objectFit: "contain",
              position: "absolute",
            }}
            className="profile"
            src="selfie.jpg"
            width="250vw"
            rounded
          />
        </Col>
      </Row>
      <div className="stack-holder mt-5" style={{ width: "80vw",marginLeft:"3vw" }}>
        <h1 className="mt-5 main-name" style={{textAlign:'left'}}>Skills</h1>
        <Techstack></Techstack>
      </div>
    </Container>
  );
}

export default forwardRef(About);
