import React, {useContext, useRef} from 'react';
import {Col, Container, Form, Row} from 'react-bootstrap';
import {Context} from './Store'

function UserForm(props) {

    const [state, dispatch] = useContext(Context);

    const nameRef = useRef(null);
    const professionRef = useRef(null)
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
        <Container className="userForm">
            <Form onSubmit={handleSubmit}  >
                <Form.Row>
                    <Col>
                        <Form.Label>First and last name: </Form.Label>
                        <Form.Control size="sm" type="name" ref={nameRef}
                                      onChange={() => {
                                          handleChange('SET_NAME', nameRef)
                                      }}/>
                    </Col>
                    <Col>
                        <Form.Label>Profession: </Form.Label>
                        <Form.Control size="sm" type="name" ref={professionRef}
                                      onChange={() => {
                                          handleChange('SET_PROFESSION', professionRef)
                                      }}/>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Label>E-mail address:</Form.Label>
                        <Form.Control size="sm" type="email" ref={emailRef} onChange={() => {
                            handleChange('SET_EMAIL', emailRef)
                        }}/>
                    </Col>
                    <Col>
                        <Form.Label>Telephone:</Form.Label>
                        <Form.Control size="sm" type="Telephone" ref={telephoneRef} onChange={() => {
                            handleChange('SET_TELEPHONE', telephoneRef)
                        }}/>
                    </Col>
                </Form.Row>
                <Form.Label>Address:</Form.Label>
                <Form.Control size="sm" type="address" ref={addressRef} onChange={() => {
                    handleChange('SET_ADDRESS', addressRef)
                }}/>
            </Form>
        </Container>
    );
}

export default UserForm;