import React from 'react';
import LoadingScreen from './LoadingScreen';
import '../App.css';

function ResultsScreen(props) {
    return (
        <div>
            Result: {props.data ? props.data : 'No data'}
        </div>
    );
};

export default class ComponentMs2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loading: false, result: null};
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState({loading: !this.state.loading});
        }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    
    render() {
        return (
            <div className="App-ComponentMs2">
                {this.state.loading 
                    ? <LoadingScreen text="Loading..." />
                    : <ResultsScreen data={this.state.data} />
                }
            </div>
        );
    }
}
