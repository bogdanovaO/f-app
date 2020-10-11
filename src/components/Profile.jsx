import React from 'react';
import { Jumbotron, Container, TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from 'classnames';
import Projects from "./Projects.jsx";
import Education from './Education.jsx';
import Designs from './Designs.jsx';
import Footer from './Footer.jsx';
// import profile from '../profile.json';
import profilePic from '../profilePic.svg';
// import './Profile.sass';

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    var ReactRotatingText = require('react-rotating-text');
    return <div>
      <Jumbotron>
        <Container className='profile'>
          <ReactRotatingText 
          className="profile__title display-3"
          items={['Богданова Ольга', 'Веб-разработчик']}/>

          <p className="lead profile__p p">
            Я начинающий веб-разработчик. Изучала дизайн в НИУ ВШЭ, но в итоге я поняла, что мне более интересно реализовать себя в IT-сфере.<br/>Сдесь собраны мои проекты.
          </p>

          <img src={profilePic} className="profile__img" alt=""/>
        </Container>
      </Jumbotron>

      <Container>
        <Nav tabs>
          <NavItem>
            <NavLink 
            className={classnames({ active: this.state.activeTab === '1' })}
            onClick={() => { this.toggle('1'); }}>
              Портфолио
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink 
            className={classnames({ active: this.state.activeTab === '3' })}
            onClick={() => { this.toggle('3'); }}>
              Дизайн
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink 
            className={classnames({ active: this.state.activeTab === '2' })}
            onClick={() => { this.toggle('2'); }}>
              Образование
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1"><Projects/></TabPane>
          <TabPane tabId="2"><Education/></TabPane>
          <TabPane tabId="3"><Designs/></TabPane>
        </TabContent>

      </Container>
      <Footer mainPage={true} />
    </div>

    ;
  }
}

export default Profile;