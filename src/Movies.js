import React, { Component } from "react";
import { Card } from "react-bootstrap";

class Movies extends Component {
    render() {
        return (
            <div>
                <Card

                >

                    <Card.Body>
                        <Card.Title><h2> The Movies List</h2></Card.Title>
                        <Card.Text>
                        
                            {

                                this.props.movies.map(item => {



                                    return <>
                                        <div className="laa">
                                            <h2> Title:<br /> {item.title}</h2>
                                            <h3> Average votes : {item.vote_average}</h3>
                                            <h3> Total votes : {item.vote_count}</h3>
                                            <h3> Popularity : {item.popularity}</h3>
                                            <h3> Released on : {item.release_date}</h3>
                                        </div>

                                    </>


                                })


                            }
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Movies;


