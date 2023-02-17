function App() {
  const clickMe = () => {
    console.log("Click");
    console.log("Click");
    console.log("Click");
  };
  return (
    <div className="App">
      <button onClick={clickMe}>Click</button>
    </div>
  );
}

export default App;
