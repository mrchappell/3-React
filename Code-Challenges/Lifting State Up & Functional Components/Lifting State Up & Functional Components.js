
function Welcome(props) {
    return <h1>Welcome to {props.name}!</h1>
  };
  
  
  class App extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        bootcampName: "Nucamp"
      };
    }
    
    render() {
      return (
              <Welcome name={this.state.bootcampName} />
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));