import React from "react";
import { Container, Row, Col } from "reactstrap";
import profile from "../profile.json";
import { MDBMedia } from 'mdbreact';
import pik from '../img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSass, faReact } from '@fortawesome/free-brands-svg-icons'
import Button from '@material-ui/core/Button';
import './Projects.sass';
import galleryDetail from '../galleryDetail.png';
import gallery from '../gallery.png';
import mainPage from '../mainPage.jpg';

class Experience extends React.Component {
  render() {
    return <Container>
      <Row>
        <Col className="col">
          {profile.projects.map(function (projects, i) {
            return (
              <div key={i}>
                          <MDBMedia>
                            
                <MDBMedia body>
                  {projects.concept.map(function (concept, i) {
                    return <div key={i}>

                        <div className="project">
                          <div className="project__desc">
         
                              <h5 className="project__title">{concept.title}</h5>

                          </div>
                          <p className='project__p p'>{concept.p}</p>
                          <div className="project__desc">
                          <div className="project__icons">
                            <FontAwesomeIcon className="project__icon" icon={faSass}/>
                            <FontAwesomeIcon icon={faReact}/>
                          </div>

                          <div className="buttonContainer">
                          <a href={projects.url}>
                              <Button variant="outlined"  size="small"  color="primary" className={concept.title === "VueApp" ?  "button_hidden" : "button button_concept"} >
                                Открыть сайт
                              
                              </Button></a>
                              <Button variant="outlined"  size="small" color="primary" className="button button_concept">
                                Перейти на github
                              </Button>
                            </div>

</div>
 <img className={concept.title === "GalleryOnReact" ? "project__img project__img_gallery" : "project__img" } 
 src={concept.title === "Github-dashboard" ? pik : concept.title === "GalleryOnReact" ? gallery : concept.title === "Memory lane" ? mainPage : null
} alt=""/>
 <img className="project__img project__img_gallery" src={concept.title === "GalleryOnReact" ? galleryDetail : null
} alt=""/>
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

export default Experience;