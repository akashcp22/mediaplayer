import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import img from '../assets/img.png'



function Landing() {
  return (
    <div>
      <div>
<Row>
  <Col sm={12} md={6} className='  column justify-content-center '>
  <p className='mt-5 mb-5' style={{fontSize:'50px'}}>
    Media player is a platform to upload and manage youtube video.
  </p>
<Link to={'/home'} className='btn btn-info'>Explore</Link>

 
  </Col>
  <Col sm={12} md={6}>
  <img height={'500px'} src={img} alt="" /></Col>
  
</Row>
      </div>
      <div className='mb-5'>
        <h1 className='text-center text-info'>Features</h1>
        <div className='d-flex justify-content-around mt-5'>
        <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'210px'} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAATlBMVEXb29t+fn55eXng4OC7u7t7e3u2traLi4t2dnbh4eGSkpLR0dGioqLJycmxsbHZ2dmEhISoqKibm5vExMSkpKTBwcGHh4eOjo65ubmcnJxgtLGxAAADF0lEQVR4nO3bbXOqMBCGYWCJBJA3FW3//x89QLV2epQER8tsvK9vzuAMPN0sSRqjCAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA9yQiTVlVVdnksva9rCMv6yI2yci02zR6vxgkzawx8cWQxa56rxSkb5NrAOcYbFG+TwrSFDa+wST1u4QgVfy7Bi6Soln77v6EpMmdBMZSaMu17+8PSHpzHFxDeINKqGYjGEI4rn2HL9fMJzCGsAu8MUpxrx1e2TTsEHrHSPiy9l2+lBx9IjBdyIXQz7wWf4YQ8LvBpxuMkk24hVD6lUFssmAzkI1nBrEJdrYoO7+hMAyGdO17fRW/t8JUB8G+GdxzxO8Mgp0r+rbEgJuilF6TxMkxX/tun08kqtLOtyXGcbvpSwmqFqSpT+P2sXcE0yar2YWz2SzV7ucW8qIcuiaEFKQZEngggEsMAWyzSvpQCVwlmfYddzn4vwvulYLpVYcgO/eUwGNj6UNxCPLpjiDZts4UFO+uSeeOwNZ56S6FpFr7WR61d/cCO7Z9jxDatZ/lUc4EviIYQ3AxW5WjwWMk2MvLv3S3BJWjoXGOhKEXXC52hmAKhasoca6QfkTgEYLGQpAFVTBe7uoJGjvC3tEN7K+FgDOEWF0GrqHw/1rIFYK+OYJksxmYLpfJ+epRXs2WjtG3gnT0uLaYHKbn2p+mD9nsN8yntgzcL7vJtHcqGzt9cHzhpC2D+br+ds7A6+KWDOJY2yyJDBgLI/cqaGkGptCWgXOqvDwDdZNlzyMnCzLQdzhF6qdnoO9chl9TXJCBupY4PFj73Aw0HsuQ2ueP65+B1TcUIueqaVkGOk+meBVCNi6h8w+P/0OoLINIjh6VsB0c5hfNo0RhN5j4nL3xWDTHms8nOX6ysoTOkTCS+jkhGM0/fZTuCSEY1REMIXwsOol1M4JW/UGU6uh9MvMm+xnCjxlq83AKJjnqPohzIU3XPnI0zRh7Cuf8ukT7Q5bYZAlrilp7I/hFpKn61Fu/L6OwzuoCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADv8AL24fuT8SIgUAAAAASUVORK5CYII=" />
      <Card.Body>
        <Card.Title>Upload videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
    
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'210px'} src="https://i.pinimg.com/originals/e3/10/6b/e3106b678b0d99327062454871555a48.gif" />
      <Card.Body>
        <Card.Title>Manage videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
    
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'210px'} src="https://vimeo.com/blog/wp-content/uploads/2017/11/Hxr1SRB.gif?w=800" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
        </div>
      </div>
      <div>
        <Row>
          <Col sm={12} md={8}
          >
            <h3 className='text-info'>Simple and Fast</h3>
            <p style={{textAlign:'justify'}}>Mauris cursus eget sapien at sagittis. Mauris eleifend rutrum felis eu ullamcorper. Fusce iaculis malesuada enim, ac maximus nibh lobortis vel. Phasellus vestibulum, urna nec ornare bibendum, dui ante fermentum sapien, et commodo tortor dui ut ligula. Fusce elementum egestas lacus. Nunc volutpat, metus vitae varius eleifend, magna nulla mollis ipsum, id euismod diam mi quis enim. Suspendisse dictum elit nec eros finibus, ac scelerisque arcu condimentum. Nullam viverra arcu purus, vitae mattis turpis sollicitudin ut. Duis tempus mauris et venenatis accumsan.</p>
          </Col>
          <Col sm={12} lg={4}>
          <iframe width="360" height="315" src="https://www.youtube.com/embed/wyiZWYMilgk?si=flyrSfDlNVkhcza-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Landing
