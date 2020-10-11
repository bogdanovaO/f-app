import React from 'react';
import { Container, Row, Col, Media } from "reactstrap";
import moment from "moment";
import contacts from '../contacts.json';
import '../App.sass';
import Footer from './Footer.jsx';
class Posts extends React.Component {
  render() {
    return <>
    <Container>
      <Row>
        <Col>
          {contacts.map(function (post, i) {
            moment.locale('en');
            return (
              <Media key={i}>

                <Media body>
                  <Media heading>
                    {post.title}
                  </Media>                 
                  <a className="links contactsDescription" href={post.url}>{post.description}</a>
                </Media>
              </Media>
            );
          })}
        </Col>
      </Row>

    </Container>
    <Footer mainPage={false}/>
    </>
  }
}

export default Posts;