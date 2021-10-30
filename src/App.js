import React, { Component } from 'react';
import './App.css';
import Input from './Inputs/Inputs'


class App extends Component {
  state = {
    inputTextLeft:"",
    inputTextRight: "",
    randomImg:"http://i.imgflip.com/1bij.jpg",
    allImgs: []
  }

  componentDidMount(){
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(data => {
      const {memes} = data.data
      this.setState({
        allImgs:memes
      })
    })
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
    [name]:value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    const random = Math.floor(crypto.getRandomValues() * this.state.allImgs.length)
    const rand = this.state.allImgs[random].url
    this.setState({randomImg :rand})
  }
  render() {
   const style = ['color'].join(' ')
    return [
     
        <form className = "meme-form" key = "i0" onSubmit = {this.handleSubmit}>
        <Input key = "i1" change = {this.handleChange} value = {this.state.inputTextLeft} value2 = {this.state.inputTextRight} />
        <div className = "meme">
        <img key = "i2" src = {this.state.randomImg} alt = "meme"/>
        <h2 className = "top" key = "i3" >{this.state.inputTextLeft}</h2>
        <h2 className = "bottom" key = "i4" >{this.state.inputTextRight}</h2>
        <button className = {style}key = "i5">Button</button>
        </div>
        </form>
  
    ]
  }
}

export default App;
