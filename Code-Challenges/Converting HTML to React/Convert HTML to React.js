class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Instructions</h1>
                <p>
                    Time for a back-to-basics drill! Take the code in the HTML section of this Codepen and React-ify it in the JS section. Use at least <strong>two</strong> components. No need for Reactstrap - <a href="https://react-cn.github.io/react/docs/tags-and-attributes.html" target="_blank"><strong>use native JSX</strong></a>. And don't worry about the CSS section right now. When you are done, the rendered view with the white background should look the same, but the HTML section should contain nothing but the 'root' div.
  </p>
                <p>Are you <a href="https://reactjs.org/docs/thinking-in-react.html" target="_blank">thinking in React</a> yet?</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/140px-React-icon.svg.png" />
            </div>

        );
    }
}


ReactDOM.render(<App />, document.getElementById("root"));