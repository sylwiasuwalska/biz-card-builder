import React, {useContext, useRef} from 'react';
import {Col, Container, Form, Row} from 'react-bootstrap';
import {Context} from './Store'

function UserForm(props) {

    const [state, dispatch] = useContext(Context);

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const telephoneRef = useRef(null);
    const addressRef = useRef(null);

    const handleChange = (caseName, refID) => {
        dispatch({type: caseName, value: refID.current.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Label>Name: </Form.Label>
                        <Form.Control type="name" ref={nameRef}
                                      onChange={() => {
                                          handleChange('SET_FIRST_NAME', nameRef)
                                      }}/>
                        <Form.Label>E-mail address:</Form.Label>
                        <Form.Control type="email" ref={emailRef} onChange={() => {
                            handleChange('SET_EMAIL', emailRef)
                        }}/>
                        <Form.Label>Telephone:</Form.Label>
                        <Form.Control type="Telephone" ref={telephoneRef} onChange={() => {
                            handleChange('SET_TELEPHONE', telephoneRef)
                        }}/>
                        <Form.Label>Address:</Form.Label>
                        <Form.Control type="address" ref={addressRef} onChange={() => {
                            handleChange('SET_ADDRESS', addressRef)
                        }}/>
                    </Form>
                </Col>

            </Row>

        </Container>
    );
}

export default UserForm;