import React from 'react'

export default class GifSearch extends React.Component {

    state = {
        searchValue: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // console.log("submit was pressed")
        this.props.submitHander(this.state.searchValue)

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="searchValue" placeholder="search something" value={this.state.searchValue} onChange={this.handleChange} />
                <input type="submit" name="submit" /> 
            </form>
        )
    }
}