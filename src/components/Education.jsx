import React from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import moment from 'moment';
import profile from '../profile.json';

class Education extends React.Component {
  render() {
    return <Container>
      <Row>
        <Col>
          {profile.studies.map(function (study, i) {
            return <Media key={i}>
              <Media left top href={study.url}>
                <Media className="education__logo" object src={study.logo} alt={study.institute} />
              </Media>
              <Media body>
                <Media heading>
                  <a className="links" href={study.url}>
                    <h5 className="conceptTitle">{study.institute}</h5>
                  </a>
                </Media>
                <Row>
                  <Col>{study.course} (неоконченное высшее)</Col>
                </Row>
              </Media>
            </Media>
          })}
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <h4 className="education__title">Certifications:</h4>
          <hr />
          {profile.certifications.map(function (certification, i) {
            const verification = certification.verificationLink ?
              <Row>
              </Row> : "";
            return <Media key={i}>
              <Media left top href={certification.url}>
                <Media className="education__logo" object src={certification.logo} alt={certification.title} />
              </Media>
              <Media body>
                <Media heading>
                  <a className="links" href={certification.url}>
                    <h5 className="project__title">{certification.title}</h5>
                  </a>
                </Media>
                <Row>
                  <Col>{certification.course}</Col>
                </Row>
                <Row>
                  <Col>{moment(certification.firstDate).format('MMM YYYY')} - {moment(certification.secondDate).format('MMM YYYY')}</Col>

                </Row>
                {verification}
              </Media>
            </Media>
          })}
        </Col>
      </Row>
    </Container>
  }
}

export default Education;