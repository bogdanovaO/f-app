import React from "react";
import { Container, Row, Col } from "reactstrap";
import profile from "../profile.json";
import { MDBMedia } from 'mdbreact';
import bmw from '../designBmw.jpg';
import candles from '../designCandle.jpg';
import ios from '../designIos.jpg';
import Button from '@material-ui/core/Button';
import './Projects.sass';
class Designs extends React.Component {
  render() {
    return <Container>
      <Row>
        <Col>
          {profile.design.map(function (design, i) {
            return (
              <div key={i}>
                <MDBMedia>
                  <MDBMedia body>
                    {design.concept.map(function (concept, i) {
                      return <div key={i}>
                        <div className="project">
                        <a className="links" href={design.url}><h5 className="project__title">{concept.title}</h5></a>
                        <p class="project__p p">{concept.description}</p>
                        <div className="project__desc">
                          <Button variant="outlined"  size="small"  color="primary" className="button button_concept">Открыть</Button>
                            </div>
                            <img className="project__img" src={
                            concept.title === "Концепт одностраничного сайта" ? bmw : concept.title === "Концепт сайта" ? candles : concept.title === "Концепт ios приложения" ? ios : null} alt="" />
                        </div>
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