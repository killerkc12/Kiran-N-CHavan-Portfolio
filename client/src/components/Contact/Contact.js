import React, { useState } from 'react'
import { Container, Row, Col, Form , Button} from 'react-bootstrap'
import Particle from '../Particle'
import SimpleMap from './SimpleMap'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Contact() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()

    const handleSubmit= (e) => {
        e.preventDefault()
        const info = {
            name , email, message
        }
        if(info.name === undefined || info.email === undefined || info.message === undefined || info.name === "" || info.email === "" || info.message === ""){
            toast.error("All Fields are Mandatory!")
            return 
        }else{
            fetch("/mail",{
                method:"post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({info})
            }).then(data=>{
                console.log(data)
                toast.success("Mail Sent Successfully!")
                toast.success("We'll get back to you")
            })
            .catch(err=>{
                console.log(err)
                toast.error("Failed to send Mail!")
            })
        }
        
        console.log(info)
        
    }

    

    return (
        <div>
            <Container fluid className="contact-section" >
            <Particle/>
                <Container>
                    <Row style={{ padding: "10px", paddingTop: "100px", marginBottom:"200px"}} >
                        <Col 
                        md={7}
                        >
                            <div style={{height:"50vh"}}><SimpleMap /></div>
                            
                        </Col>
                        <Col md={5}>
                            <Form onSubmit={e => {handleSubmit(e)}}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control size="lg" type="text" onChange={e=>setName(e.target.value)} placeholder="Enter you Name" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control size="lg" type="email" onChange={e=>setEmail(e.target.value)} placeholder="Enter you Email" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Message </Form.Label>
                                    <Form.Control size="lg" as="textarea" rows={5} onChange={e=>setMessage(e.target.value)} placeholder="Enter you Message"  />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                                <ToastContainer/>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Contact
