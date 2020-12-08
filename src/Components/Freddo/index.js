import React from 'react';
import BitcoinPrice from "./BitcoinPrice";
import FreddoCount from "./FreddoCount";

class Freddo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bitcoin: 0,
            freddo: 0.25,
            noOfFreddos: 0
        }
    }

    componentDidMount = () => {
        this.getBitcoinPrice();
        this.timerId = setInterval(() => {
            this.getBitcoinPrice();
        }, 5000)
    }

    getBitcoinPrice = () => {
        fetch('https://api.coindesk.com/v1/bpi/currentprice/gbp.json')
            .then(data=>data.json())
            .then((data)=>{
                let rate = parseFloat(data.bpi.GBP.rate_float).toFixed(2)
                this.setState({
                    bitcoin: rate,
                    noOfFreddos: this.calculateFreddos(rate)
                })
            })
    }

    calculateFreddos = (bitcoinValue) => {
        return (bitcoinValue / this.state.freddo).toFixed(0);
    }

    render() {

        return (
            <div className="freddo">
                <BitcoinPrice bitcoin={this.state.bitcoin} />
                <FreddoCount noOfFreddos={this.state.noOfFreddos} />
            </div>
        );
    }
}

export default Freddo;