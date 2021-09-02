import '../App.css';

function AppHeader(logo) {
    console.log(logo)
    return (
        <header className="App-header">
            <img src={logo.logo} className="App-logo" alt="logo" />
        </header>
    );
  }
  
  export default AppHeader;