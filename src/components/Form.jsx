import React, { Component } from 'react'
import Card from './StackEx'
import { Button } from '@chakra-ui/react'

import {
    FormControl,
    FormLabel,
    Input
  } from '@chakra-ui/react'

export default class Clown extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        username:"",
        review : "",
        modal : false
      }
    }

    handleUsernameChange= (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleReviewChange= (event) => {
        this.setState({
            review: event.target.value
        })
    }

    handleForm = (event) => {
        alert(`${this.state.username} said ${this.state.review} for this website`)
        modal : this.state.modal = true
        event.preventDefault()
    }

    setModal = () => {
        this.setState({
            modal : this.state.modal = true
        })
    }

  render() {
    return (
<div className="wrapper">
<FormControl className='form'>
    <div className='form-wrapper'>
  <FormLabel><div className='username'>Leave a review</div></FormLabel>

  <div>                          
  <FormLabel>Username</FormLabel>
  <Input                         
  type='text'                    
  className='input input-text'  
  onChange={this.handleUsernameChange}
  value={this.state.username} 
  placeholder="Coolkid123"
  />                             
  </div>                         

  <div>
  <FormLabel>Review</FormLabel>
  <Input 
  type='text'
  value={this.state.review}
  onChange={this.handleReviewChange}
  placeholder="I think that this website is...." />
  </div>

  <Button 
  className="btn btn-style"
  colorScheme='teal' 
  size='md' 
  mb={10}
  type="submit"
  onClick={this.setModal}>
    Submit
  </Button>
    </div>
</FormControl>
    {this.state.modal ? <Card username={this.state.username} review={this.state.review}/> : null}
  </div>
    )
  }
}