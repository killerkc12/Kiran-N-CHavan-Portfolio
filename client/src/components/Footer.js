import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import Cookies from 'js-cookie'
import { db } from "../firebase";

function Footer() {

  const [count, setCount] = useState()
  useEffect(()=>{

    if(Cookies.get("visitors")){
      setCount(Cookies.get("visitors"))
    }
    else
    {
        db.collection("visitorCounter").doc("one").get().then(snap=>{
          console.log(snap.data().count,"========================")
          setCount(snap.data().count)
        })
    }
},[])

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Kiran N Chavan</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3><MdEmail/>  kiranchavankc12@gmail.com</h3>
        </Col>
        <Col md="4" className="footer-body">
          <h3>Total Visitors = {count}</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
