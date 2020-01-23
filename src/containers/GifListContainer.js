import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {

    state = {
        gifs: [],
        filter: ""
    }

    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
        .then(r => r.json())
        .then((json) => {
            // console.log(json.data[0].images.original.url)
            this.setState({
                gifs: [
                    json.data[0].images.original.url, json.data[1].images.original.url, json.data[2].images.original.url
                ]
            })
        })
    }

    passGifs = () => {
        let gifs = [...this.state.gifs]

        if (this.state.filter > 0) {
            gifs = gifs.filter((gif) => {
                return gif.includes(this.state.filter)
            })
        }
        // console.log(this.state.filter)
        // console.log(gifs)
        return gifs 
    }

    submitHandler = (arg) => {
        // console.log(arg)
        // if (typeof(arg) === "number") {
        //     console.log("number")
        // }
        this.setState({
            filter: arg
        })
    }

    render () {
        return (
            <div>
                <GifSearch submitHander={this.submitHandler} />
                <GifList gifs={this.passGifs()} />
                
            </div>
        )
    }
}