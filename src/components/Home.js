import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Type from "./Type";
import { Button, Image } from "react-bootstrap";
import { forwardRef } from "react";
import { GoArrowUpRight } from "react-icons/go";


function Home(props) {
  return (
    <Container style={{ height: "80vh" }} ref={props.homeref}>
      <Row style={{ paddingTop: "30vh", marginLeft: "3vw" }}>
        <Col className="text-start">
          <h1>Hi There!</h1>
          <h1>
            I'm <strong className="main-name">Aetesh Chagantipati</strong>
          </h1>
          <div className="fs-2 mt-3">
            <Type></Type>
          </div>
          <Button
            className="purple-2"
            href="https://drive.google.com/file/d/15MgAoVOVqnnbEBMOmC1cTwaBsUhnjqyG/view?usp=sharing"
            target="_blank"
          >
            {"Resume"} <GoArrowUpRight></GoArrowUpRight>
          </Button>
        </Col>
        <Col>
          <Image className="profile" width="240vw" src="profile.jpg" rounded />
        </Col>
      </Row>
    </Container>
  );
}

export default forwardRef(Home);
