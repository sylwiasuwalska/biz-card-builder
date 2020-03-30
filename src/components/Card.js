import React, {useContext,} from 'react';
import {Context} from "./Store";
import {Container} from "react-bootstrap";
import '../Card.css';

function Card(props) {

    const [state, dispatch] = useContext(Context);
    return (
        <Container className="cardContainer">

            <div className="box card">
                <div className="layout-center">
                    <h3 className="name">{state.name}</h3>
                    <p className="position">{state.position}</p>
                    <p className="email">e-mail: {state.email}</p>
                    <p className="telephone">mobile: {state.telephone}</p>
                    <p className="address">addres: {state.address}</p>
                </div>
            </div>
        </Container>
    );
}

export default Card;