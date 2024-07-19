import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div >
      <Row  className='bg-info'>
        <Col className=' mt-5'>
        <h4>Media Player</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim magni quos laboriosam, consectetur consequatur sequi sed iusto exercitationem. Natus ab tempore et voluptate vitae, asperiores nam accusantium praesentium quod quibusdam?</p>
        
        </Col>
        <Col className=' mt-5' ><h4>Links</h4>
        <ul style={{listStyle:'none'}}>
            <li ><Link style={{textDecoration :'none'}} to={'./'}>Landing</Link></li>
            <li><Link  style={{textDecoration :'none'}} to={'./home'}>Home</Link></li>
            <li><Link  style={{textDecoration :'none'}} to={'./history'}>History</Link></li>
        </ul>
        </Col>
        <Col className=' mt-5'>
        <h2>contact us</h2> <br />
        <h4>mediaplayer@gmail.com</h4>
        <h4>+91292199299</h4>
        </Col>
      </Row>
    </div>
  )
}

export default Footer
