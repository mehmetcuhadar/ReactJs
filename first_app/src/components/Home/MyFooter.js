import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import FontAwesome from 'react-fontawesome';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



class MyFooter extends React.Component {

    render() {
        return(
            <div>
                <Jumbotron fluid>
                    <Container>
                        <h1>Fluid jumbotron</h1>
                        <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                        </p>
                    </Container>
                </Jumbotron>
                
            </div>
        );
    }
}


export default MyFooter;