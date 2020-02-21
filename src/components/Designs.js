import React from "react";
import { Container, Row, Col } from "reactstrap";
import profile from "../profile";
import { MDBMedia } from 'mdbreact';

class Designs extends React.Component {
  render() {
    return <Container>
      <Row>
        <Col>
          {profile.design.map(function (design, i) {
            return (
              <div key={i}>
                <MDBMedia>
                  <MDBMedia left top href={design.url}>
                    <MDBMedia object src={design.logo} alt=''/>
                  </MDBMedia>
                  <MDBMedia body>
                    {design.concept.map(function (concept, i) {
                      return <div key={i}>
                        <a className="links" href={design.url}><h5>{concept.title}</h5></a>
                        <p className="jobDescription">{concept.description}</p>
                      </div>
                    })}
                  </MDBMedia>
                </MDBMedia>
              </div>
            );
          })}
        </Col>
      </Row>
    </Container>
  }
}

export default Designs;