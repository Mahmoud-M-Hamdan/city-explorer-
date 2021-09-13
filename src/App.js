  
import React, { Component } from 'react';
import Location from './Location';
import SearchForm from './SearchForm';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';

export class App extends Component {
  constructor(props){
    super(props);
    this.state={
      city_name:"",
      type:"",
      lat:"",
      lon:"",
      showData:false,
      errorMessage: '',
      weatherData:[]
    }
  }
  handleLocation=(e)=>{
    let city_name=e.target.value;
    this.setState({
      city_name:city_name
    })
  }
  handleSubmit=(e)=>{
    console.log(`${process.env.REACT_APP_LOCATIONIQ_API_KEY}`);
    e.preventDefault();
    let config={
      method:"GET",
      baseURL:`https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city_name}`,
     
    }
    
    
    axios(config).then(res=>{
      let responseData=res.data[0]
      this.setState({
        city_name:responseData.display_name,
        lon:responseData.lon,
        lat:responseData.lat,
        url : `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${responseData.lat},${responseData.lon}&zoom=7&size=400x600&format=png`,
        showData:true

      })
      
    }).then(()=>{

      axios.get(`http://${process.env.REACT_APP_BACKEND_URL}/weather-data?lat=${this.state.lat}&lon=${this.state.lon}`)
      .then(res=>{
      this.setState({
weatherData:res.data

      })
      })
    })
    .catch(err => { 
      this.setState({errorMessage: err.message});
    })




  }
  render() {
    return (
      <>
        <h1>Welcome to City explorer</h1>
        <SearchForm handleLocation={this.handleLocation} handleSubmit={this.handleSubmit} getMap={this.getMap}/>
        {
          this.state.showData&&
          <Location city_name={this.state.city_name}
                    type={this.state.type}
                    lat={this.state.lat}
                    lon={this.state.lon}
                    url={this.state.url}
                    weatherData= {this.state.weatherData}
                 
          />
       
        }
        
         {
         
         
         
         this.state.errorMessage &&
            <Alert variant="success">
            <Alert.Heading>Error !!</Alert.Heading>
            <p>
           { this.state.errorMessage} 
            </p>
            <hr />
            <p className="mb-0">
              please try to fix it 
            </p>
          </Alert>
  }
         
  
        
      </>
    )
  }
}

 export default App
