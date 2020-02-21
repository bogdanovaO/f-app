import React from 'react';
import {Container, Row, Col, Media} from 'reactstrap';
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
                <Media object src={study.logo} alt={study.institute}/>
              </Media>
              <Media body>
                <Media heading>
                  <a className="links" href={study.url}>{study.institute}</a>
                </Media>
                <Row>
                  <Col>{study.course}</Col>
                </Row>
                <Row>
                  <Col>{moment(study.firstDate).format('MMM YYYY')} - {(study.secondDate) ? moment(study.expiryDate).format('MMM YYYY') : 'Present'}</Col>
                </Row>
              </Media>
              </Media>
          })}
        </Col>
      </Row>
      <br/>
      <Row>
        <Col>
          <h4>Certifications:</h4>
          <hr/>
          {profile.certifications.map(function (certification, i) {
            const verification = certification.verificationLink ?
              <Row>
                {/* <Col>
                  {/* <a className="certificateLink" href={certification.verificationLink}>See certificate</a> */}
                {/* </Col> */} 
              </Row> : "";
            return <Media key={i}>
              <Media left top href={certification.url}>
                <Media object src={certification.logo} alt={certification.title}/>
              </Media>
              <Media body>
                <Media heading>
                  <a className="links" href={certification.url}>{certification.title}</a>
                </Media>
                <Row>
                  <Col>{certification.course}</Col>
                </Row>
                <Row>
                  <Col>{moment(certification.firstDate).format('MMM YYYY')} - {(certification.secondDate) ? moment(certification.expiryDate).format('MMM YYYY') : 'Present'}</Col>
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