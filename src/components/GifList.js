import React from 'react'

export default class GifList extends React.Component {

    mapAllGifs = () => {
        return this.props.gifs.map((gif) => {
            return <li><img src={gif} alt="" /></li>
        })
    }

    render () {
        return (
            <ul>
                {this.mapAllGifs()}
            </ul>
        )
    }
}