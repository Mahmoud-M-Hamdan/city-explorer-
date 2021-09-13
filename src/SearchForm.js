
import React, { Component } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

export class SearchForm extends Component {


    render() {
        return (
            <div>
                <Form onSubmit={this.props.handleSubmit}>
                    <Row className="align-items-center">
                        <Col xs="auto">
                            <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                                Name
                            </Form.Label>
                            <Form.Control
                                className="mb-2"
                                id="inlineFormInput"
                                placeholder="Please enter a city name..."
                                onChange={this.props.handleLocation}
                            />
                        </Col>

                        <Col xs="auto">
                            <Button type="submit" className="mb-2">
                                Search
                            </Button>
                        </Col>
                    </Row>
                </Form>

            </div>
        )
    }
}
<Form.Control type="text" placeholder="Readonly input here..." readOnly />

export default SearchForm