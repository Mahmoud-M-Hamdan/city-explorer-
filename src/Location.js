  
import React, { Component } from 'react'
import { Card } from 'react-bootstrap';

export class Location extends Component {
    render() {
        return (
            <>
      

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.url} alt="gjf"style={{height:'250px'}}  />
  <Card.Body>
    <Card.Title><h1>{this.props.city_name}</h1></Card.Title>
    <Card.Text>
    <h2>{this.props.type}</h2>

                <h3>{this.props.lat}/{this.props.lon}</h3>
    </Card.Text>
    
  </Card.Body>
</Card>


              
        
            </>
        )
    }
}

export default Location
