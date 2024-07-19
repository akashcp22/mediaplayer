import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Addvideo from '../Components/Addvideo'
import Videolist from '../Components/Videolist'
import Category from '../Components/Category'
import { Link } from 'react-router-dom'



function Home() {
  const[addResponse,setAddResponse]=useState("")
  return (
    <div>
      <div  className='justify-content-between'>
        <h1 className='text-info'>All videos</h1>
      <Link to={'/history'}>Watch History</Link>
      </div>
     <div className='container-fluid'>
      
      <Row>
        <Col sm={12} md={2}>
        <Addvideo setAdd={setAddResponse}/>
        </Col>
        <Col sm={12} md={6}>
        <Videolist addres={addResponse}></Videolist>
        </Col>
        <Col sm={12} md={4}>
        <Category></Category>
        </Col>
      </Row>
     </div>
    </div>
  )
}

export default Home
