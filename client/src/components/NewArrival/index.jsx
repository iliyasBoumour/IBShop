import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import './NewArrival.css'
import Card from '../ProductCard'

const index = () => {
    return (
        <Container style={{marginTop:'80px'}}>
        <h3 className='text-center fw-bold mb-4'>New Arrivals</h3>
        <Row className='justify-content-center mb-2'>
            <Col sm={8}>
        <p className='text-center text-muted mb-4'>Check out our new furniture collection! Cozy sofa, fancy chair, wooden casket, and many more. The new collection brings an informal elegance to your home.</p>
            </Col>
        </Row>
        <Row>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
        </Row>
        </Container>
    )
}

export default index
