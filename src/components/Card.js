import React, {useContext, useState,} from 'react';
import {Context} from "./Store";
import {Container, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import '../Card.css';


function Card(props) {
    const [globalState, dispatch] = useContext(Context);
    const [alignState, alignSet] = useState("layout-left");



    const handleOptionChange = changeEvent => {
        alignSet(changeEvent.target.value);
    };

    const handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
    }




    return (

        <Container className="cardContainer">
            <Row>
                <div className="box card">
                    <div className={`layout ${alignState}`}>
                        <h3 className="name">{globalState.name}</h3>
                        <p className="profession">{globalState.profession}</p>
                        <p className="email">e-mail: {globalState.email}</p>
                        <p className="telephone">mobile: {globalState.telephone}</p>
                        <p className="address">addres: {globalState.address}</p>
                    </div>
                </div>
            </Row>
            <Row>

                <Form onSubmit={handleFormSubmit}>
                    <h4>Align content:</h4>
                    <div className="form-check">
                        <label>
                            <input
                                type="radio"
                                name="layout"
                                value="layout-left"
                                onChange={handleOptionChange}
                                className="form-check-input"
                                defaultChecked
                            />
                            Left
                        </label>
                    </div>

                    <div className="form-check">
                        <label>
                            <input
                                type="radio"
                                name="layout"
                                value="layout-center"
                                onChange={handleOptionChange}
                                className="form-check-input"
                            />
                            Center
                        </label>
                    </div>

                    <div className="form-check">
                        <label>
                            <input
                                type="radio"
                                name="layout"
                                value="layout-right"
                                onChange={handleOptionChange}
                                className="form-check-input"
                            />
                            Right
                        </label>
                    </div>
                </Form>
            </Row>

        </Container>
    );
}

export default Card;