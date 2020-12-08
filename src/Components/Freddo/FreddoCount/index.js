import React from 'react';

class FreddoCount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noOfFreddos: this.props.noOfFreddos
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.noOfFreddos !== prevProps.noOfFreddos) {
            this.setState({
                noOfFreddos: this.props.noOfFreddos
            })
        }
    }

    render() {
        return (
            <div>
                <p>that's { this.state.noOfFreddos } Freddo bars!</p>
            </div>
        );
    }
}

export default FreddoCount;