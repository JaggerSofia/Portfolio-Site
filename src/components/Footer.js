import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Victoria Moore
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        <a href='mailto:victoriamoore563@gmail.com' target="_blank" rel="noopener noreferrer">
                            <Button>Email</Button>
                        </a>
                        <a href='https://github.com/JaggerSofia' target="_blank" rel="noopener noreferrer">
                            <Button>GitHub</Button>
                        </a>
                        <a href='https://www.linkedin.com/in/victoriamoore563/' target="_blank" rel="noopener noreferrer">
                            <Button>LinkedIn</Button>
                        </a>

                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;