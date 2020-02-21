import React from "react";
import { Container, Row, Col } from "reactstrap";
import profile from "../profile";
import { MDBMedia } from 'mdbreact';

class Experience extends React.Component {
  render() {
    return <Container>
      <Row>
        <Col>
          {profile.projects.map(function (projects, i) {

            return (
              <div key={i}>
                <MDBMedia>
                  <MDBMedia left top href={projects.url}>
                    <MDBMedia object src={projects.logo} alt=''/>
                  </MDBMedia>
                  <MDBMedia body>
                    {projects.concept.map(function (concept, i) {
                      return <div key={i}>
                        <a className="links" href={projects.url}><h5>{concept.title}</h5></a>
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

export default Experience;