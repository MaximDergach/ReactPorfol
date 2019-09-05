import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const apiUrl = 'https://dog.ceo/api/breeds/image/random'
const loadingImageUrl = 'https://media.giphy.com/media/y1ZBcOGOOtlpC/200.gif'

const imgStyle = {
  width: '350px',
  height: '350px',
  marginBottom: '20px',
  marginRight: '20px'
}  

class ApiReq extends Component {
  state = {
    dogImageUrl: '',
    loading: true
  }

  updateDogImage = async () => {
    this.setState({
      loading: true
    })

    await sleep(200)

    const { message: dogImageUrl } = await fetch(apiUrl).then(res => res.json())
    this.setState({
      dogImageUrl,
      loading: false
    })
  }

  busyClickHandler = () => alert('Собачка уже загружается.')

  componentDidMount() {
    this.updateDogImage()
  }

  render() {
    const { dogImageUrl, loading } = this.state

    const imageUrl = loading ? loadingImageUrl : dogImageUrl
    const onClickHandler = loading ? this.busyClickHandler : this.updateDogImage
    console.log(apiUrl.message)
    return (
      
      <div>
      <img src={imageUrl} style={imgStyle} onClick={onClickHandler} />
        
      </div> 
    )
  }
}

export default ApiReq