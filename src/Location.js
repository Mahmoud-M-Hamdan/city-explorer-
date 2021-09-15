  
import React, { Component } from 'react'
import { Card } from 'react-bootstrap';

export class Location extends Component {
    render() {
        return (
            <>
      

<Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src={this.props.url} alt="gjf"style={{height:'400px'}}  />
  <Card.Body>
    <Card.Title><h1>{this.props.city_name}</h1></Card.Title>
    <Card.Text>
    <h2>{this.props.type}</h2>

                <h3>{this.props.lat}<br/>{this.props.lon}</h3>
    </Card.Text>
    <h2> 🌧️The Weather Data 🌞</h2> 
    {
this.props.weatherData.map(item=>{

return <>
<h3>{item.date}</h3>
<h3>{item.description}</h3>

</>


})


 }

 <h2> The Movies List</h2>
    {
        
this.props.movies.map(item=>{

    
        
return <>
<div className="laa">
<h3> Title: {item.title}</h3>
<h3> Average votes : {item.vote_average}</h3>
<h3> Total votes : {item.vote_count}</h3>
<h3> Popularity : {item.popularity}</h3>
<h3> Released on : {item.release_date}</h3>
</div>

</>


})


 }
  </Card.Body>
</Card>


              
        
            </>
        )
    }
}

export default Location
