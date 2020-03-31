import React, { useContext, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Context } from "./Store";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../Card.css";
import RadioList from "./RadioList";
import htmlToImage from "html-to-image";
import Pdf from "react-to-pdf";
import html2PDF from 'jspdf-html2canvas';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Card(props) {
  const [globalState, dispatch] = useContext(Context);
  const [alignState, alignSet] = useState("layout-left");
  const [fontState, fontSet] = useState("font1");
  const [backgroundState, backgroundSet] = useState("background1");
  const cardRef = useRef(null);

  const handleAlignChange = (changeEvent) => {
    alignSet(changeEvent.target.value);
  };

  const handleFontChange = (changeEvent) => {
    fontSet(changeEvent.target.value);
  };

  const handleBackgroundChange = (changeEvent) => {
    backgroundSet(changeEvent.target.value);
  };

  const handleFormSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();
  };

  const pdfExport = (buttonEvent) => {
    const cardDiv = cardRef.current;
    html2canvas(cardDiv).then(canvas => {
      const dataURL = canvas.toDataURL();
      const pdf = new jsPDF();

      pdf.addImage(dataURL, 'JPEG', 20, 20, 180, 160);

      pdf.save('saved.pdf')
    })
  };

  return (
    <Container className="cardContainer">

      <Row>
        <Col></Col>
        <Col>
          <div className="box">
            <div
              ref={cardRef}
              className={`layout card ${backgroundState} ${fontState} ${alignState}`}
            >
              <h3 className="name">{globalState.name}</h3>
              <p className="profession">{globalState.profession}</p>
              <p className="email">e-mail: {globalState.email}</p>
              <p className="telephone">mobile: {globalState.telephone}</p>
              <p className="address">addres: {globalState.address}</p>
            </div>
          </div>
        </Col>
        <Col></Col>
      </Row>

      <Row className="contentChanger">
        <Col>
          <RadioList
            title={"Align content:"}
            handleChange={handleAlignChange}
            handleFromSubmit={handleFormSubmit}
            name={"layout"}
            value1={"layout-left"}
            label1={"Left"}
            value2={"layout-center"}
            label2={"Center"}
            value3={"layout-right"}
            label3={"Right"}
          />
        </Col>
        <Col>
          <RadioList
            title={"Choose font:"}
            handleChange={handleFontChange}
            handleFromSubmit={handleFormSubmit}
            name={"font"}
            value1={"font1"}
            label1={"Roboto"}
            value2={"font2"}
            label2={"Ubuntu"}
            value3={"font3"}
            label3={"Raleway"}
          />
        </Col>
        <Col>
          <RadioList
            title={"Choose background:"}
            handleChange={handleBackgroundChange}
            handleFromSubmit={handleFormSubmit}
            name={"background"}
            value1={"background1"}
            label1={"Background 1"}
            value2={"background2"}
            label2={"Background 2"}
            value3={"background3"}
            label3={"Background 3"}
          />
        </Col>
      </Row>
      <Row>
        <Button onClick={pdfExport}>Save as pdf</Button>
      </Row>
    </Container>
  );
}

export default Card;
