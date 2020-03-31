import React, {useContext, useState,} from 'react';
import {Context} from "./Store";
import {Col, Container, Form, Row} from "react-bootstrap";
import '../Card.css';
import RadioList from "./RadioList";


function Card(props) {
    const [globalState, dispatch] = useContext(Context);
    const [alignState, alignSet] = useState("layout-left");
    const [fontState, fontSet] = useState("font1")


    const handleAlignChange = changeEvent => {
        alignSet(changeEvent.target.value);
    };

    const handleFontChange = changeEvent => {
        fontSet(changeEvent.target.value);
    }

    const handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
    }

    return (

        <Container className="cardContainer">
            <Row>
                <div className="box card">
                    <div className={`layout  ${fontState} ${alignState}`}>
                        <h3 className="name">{globalState.name}</h3>
                        <p className="profession">{globalState.profession}</p>
                        <p className="email">e-mail: {globalState.email}</p>
                        <p className="telephone">mobile: {globalState.telephone}</p>
                        <p className="address">addres: {globalState.address}</p>
                    </div>
                </div>
            </Row>
            <Row>
                <Col>
                <RadioList title={"Align content:"} handleChange={handleAlignChange}
                           handleFromSubmit={handleFormSubmit} name={"layout"}
                           value1={"layout-left"} label1={"Left"}
                           value2={"layout-center"} label2={"Center"}
                           value3={"layout-right"} label3={"Right"}/>
                </Col>
                <Col>
                <RadioList title={"Choose font:"} handleChange={handleFontChange}
                           handleFromSubmit={handleFormSubmit} name={"font"}
                           value1={"font1"} label1={"Roboto"}
                           value2={"font2"} label2={"Ubuntu"}
                           value3={"font3"} label3={"Raleway"}/>
                </Col>
            </Row>

        </Container>
    );
}

export default Card;