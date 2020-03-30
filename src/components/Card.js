import React, {useContext,} from 'react';
import {Context} from "./Store";
import {Container} from "react-bootstrap";
import '../Card.css';

function Card(props) {

    const [state, dispatch] = useContext(Context);
    return (
        <Container className="cardContainer">
            <div className="card">
                <div className="name">{state.name}</div>
                <div className="email">{state.email}</div>
                <div className="telephone">{state.telephone}</div>
                <div className="address">{state.address}</div>
            </div>
        </Container>
    );
}

export default Card;