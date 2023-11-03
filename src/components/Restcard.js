import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



function Restcard({item}) {
  return (
    <div>
        <Link to={`/view/${item.name}`} style={{textDecoration:'none'}}>
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.profile} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
         
        </Card.Text>
        <button type="button" class="btn btn-outline-primary" speechify-initial-font-family="Nunito, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;" speechify-initial-font-size="15px">View Details</button>
      </Card.Body>
    </Card>
    </Link>

    </div>
  )
}

export default Restcard