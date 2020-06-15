import React from 'react'
import axios from 'axios'
import uuid from 'react-uuid'
import Country from './country'
import styles from './covid.module.scss'

export default class Covid extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            covidData: [],
            url: `https://covid19-brazil-api.now.sh/api/report/v1`,
            defaultValue: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
        console.log(event.target.value)
    }
  
    componentDidMount() {
        axios.get(`${this.state.url}/countries`).then(res => {
            const covidData = res.data.data
            // console.log(covidData)
            this.setState({ covidData })
        })
    }
  
    componentWillUnmount() {

    }
  
    render() {
      let country = this.state.value;
      return (
        <>
            <form>
                <div>
                    <label>Selecione o país</label>
                    <select defaultValue={this.state.defaultValue} value={this.state.value} onChange={this.handleChange}>
                        <option value="" selected>Selecione o país</option>
                        {this.state.covidData.map(data => <option key={uuid()} value={data.country}>{data.country}</option>)}
                    </select>
                </div>
            </form>
            <div>
                {this.state.covidData.map(data => (data.country === country) ? 
                <div key={uuid()}>
                    <span>País:</span><em>{data.country}</em><br />
                    <span>Casos confirmados:</span><em>{data.confirmed}</em><br />
                    <span>Pessoas infectadas:</span><em>{data.cases}</em><br />
                    <span>Mortos:</span><em>{data.deaths}</em><br />
                    <span>Pessoas curadas:</span><em>{data.recovered}</em><br />
                    <span>Última atualização:</span><em>{new Date(data.updated_at).toLocaleString()}</em>
                </div>
                : '')}
                
                <Country name={(country) ? country : this.state.defaultValue} url={this.state.url} data={this.state.covidData} />
            </div>
        </>
      );
    }
}