import React from 'react'
import axios from 'axios'

class Country extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // Reverse GeoCode MapQuest
        // http://open.mapquestapi.com/geocoding/v1/reverse?key=KEY&location=Lat,Lng&includeRoadMetadata=true&includeNearestIntersection=true
        // KEY = REACT_APP_MAPQUEST_KEY
        // Lat = latitude
        // Lng = longitude
        // Fazer uma consulta na API para traduzir o nome das cidades
        axios.get(`${this.props.url}/${this.props.country}/`).then(res => {
            console.log(res.data)
        })
    }
    render() {
        return(
            <>
                <h1>{this.props.name}</h1>
                {/* <h2>{this.props.url}</h2> */}

            </>
        )
    }
}

export default Country