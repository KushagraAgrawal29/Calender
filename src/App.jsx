import React, { useState } from "react"
import { Col, Container, Navbar, Row } from "react-bootstrap";
import Calendar from "./components/Calendar";

function App() {

  const [date,setDate] = useState(new Date(new Date().toLocaleDateString()));

  const changeDate = date => {
    setDate(new Date(date + 'T00:00:00'));
  };

  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday'];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  return (
    <>
      <Container fluid>
        <Row>
          <Col md={12}>
            <Navbar expand="lg" variant="light" bg="light">
              <Container>
                <Navbar.Brand href="#"><h1>Calendar</h1></Navbar.Brand>
              </Container>
            </Navbar>
          </Col>
        </Row>
        <Row className="flex justify-center">
          <Col xs={12} sm={12} md={8} lg={9} xl={6}>
            <Calendar changeDate={changeDate} updateEvent={prepareEventUpdate} events={events}/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
