import React from 'react';

class BitcoinPrice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bitcoin: this.props.bitcoin
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.bitcoin !== prevProps.bitcoin) {
            this.setState({
                bitcoin: this.props.bitcoin
            })
        }
    }

    render() {
        return (
            <div>
                <p>1 Bitcoin = £{this.state.bitcoin}</p>
            </div>
        );
    }
}

export default BitcoinPrice;