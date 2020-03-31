import React, {useContext,} from 'react';
import {Context} from "./Store";
import {Container, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import '../Card.css';


function Card(props) {
    const handleOptionChange = changeEvent => {
        console.log(changeEvent.target.value)
        return changeEvent.target.value
    };

    const handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
    }

    const [state, dispatch] = useContext(Context);

    return (

        <Container className="cardContainer">
            <Row>
                <div className="box card">
                    <div className="layout layout-left">
                        <h3 className="name">{state.name}</h3>
                        <p className="profession">{state.profession}</p>
                        <p className="email">e-mail: {state.email}</p>
                        <p className="telephone">mobile: {state.telephone}</p>
                        <p className="address">addres: {state.address}</p>
                    </div>
                </div>
            </Row>
            <Row>

                <Form onSubmit={handleFormSubmit}>

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