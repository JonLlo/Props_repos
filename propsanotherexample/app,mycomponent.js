//component bit
function MyComponent(props) {
    return (
      <div>
        <h1>{props.title}</h1>
        <p>{props.children}</p>
      </div>
    );
  }
  //app bit
  function App() {
    return (
      <div>
        <MyComponent title="Hello">
          <span>This is some text!</span>
        </MyComponent>
      </div>
    );}