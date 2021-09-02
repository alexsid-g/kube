import { useState } from 'react';
import LoadingScreen from './LoadingScreen';
import '../App.css';
import Config from '../Config';

function handleClick(setState) {
    setState({loading: true});
    setTimeout(() => {
        const fetchUrl = Config.MS1_URL + '/WeatherForecast'; 
        fetch(fetchUrl)
            .then(response => response.json())
            .then(data => {
                setState({loading: false, data: data});
            })
            .catch(error => setState({loading: false, data: error || 'Error'}));
    }, 1000);
}

function ResultScreen(props) {
    if (props.data && Array.isArray(props.data)) {
        return (
            <div className="App-forecast">
                {props.data.map((x, i) => {
                    return (
                        <div className="App-forecast-item" key={i}>
                            {'T: ' + x.temperatureC + ' *C'}
                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <div>
            Result: {props.data ? props.data : 'No data'}
        </div>
    );
}

function ComponentMs1() {
    let [state, setState] = useState({success: true, data: null});
    return (
        <div className="App-ComponentMs1">
            {state.loading 
                ? <LoadingScreen text="Loading..." />
                : <ResultScreen data={state.data} />}
                <div>
                    <button onClick={() => handleClick(setState)}>
                        Click me!
                    </button>
                </div>
        </div>
    );
}

export default ComponentMs1;