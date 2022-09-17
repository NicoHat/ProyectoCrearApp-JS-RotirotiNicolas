import React from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import './Item.css';
import { Col} from 'react-bootstrap'

function Item ({ title, price, img, category, id, author, stock}) {
    return (
          <Col>
            <Card className='cardContainer mt-4 mb-4' style= { { width: '18rem' }}>
              <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{author}</Card.Text>
                  <Card.Text>{category}</Card.Text>
                  <Card.Text>${price}</Card.Text>
                  <Link to={`/detalle/${id}`}>
                    <Button variant='light'>Ver detalles</Button>
                  </Link>
                </Card.Body>
            </Card>
        </Col>
     )
}

export default Item;