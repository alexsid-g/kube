import '../App.css';

function LoadingScreen(props) {
    return (
        <div className="lds-facebook-wrap">
            <div className="lds-facebook"><div></div><div></div><div></div></div>
            {(props.text? <div>{props.text}</div>: '')}
            
        </div>
    );
}

export default LoadingScreen;