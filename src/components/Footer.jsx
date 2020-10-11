import React from 'react';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faInstagram, faBehance, faVk } from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component {


  render() {
    console.log(this.props.mainPage === true)
    return (
      <footer className={this.props.mainPage === true ? 'footer' : 'footerForPosts' }>
        <Container >
          <a href="https://github.com/bogdanovaO"><FontAwesomeIcon icon={faGithubAlt} /></a>
          <a href="https://www.instagram.com/starh_ares"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://www.behance.net/ahsdbc77f0"><FontAwesomeIcon icon={faBehance} /></a>
          <a href="https://vk.com/id345715427"><FontAwesomeIcon icon={faVk} /></a>
        </Container>
      </footer>
    )
  }
}

export default Footer;