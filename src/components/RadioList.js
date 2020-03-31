import React from "react";
import {Form} from "react-bootstrap";
import html2canvas from 'html2canvas';

function RadioList(props) {


    return (
        <Form onSubmit={props.handleFormSubmit}>
            <h4>{props.title}</h4>
            <div className="form-check">
                <label>
                    <input
                        type="radio"
                        name={props.name}
                        value={props.value1}
                        onChange={props.handleChange}
                        className="form-check-input"
                        defaultChecked
                    />
                    {props.label1}
                </label>
            </div>

            <div className="form-check">
                <label>
                    <input
                        type="radio"
                        name={props.name}
                        value={props.value2}
                        onChange={props.handleChange}
                        className="form-check-input"
                    />
                    {props.label2}
                </label>
            </div>

            <div className="form-check">
                <label>
                    <input
                        type="radio"
                        name={props.name}
                        value={props.value3}
                        onChange={props.handleChange}
                        className="form-check-input"
                    />
                    {props.label3}
                </label>
            </div>
        </Form>
    );
}

export default RadioList;
