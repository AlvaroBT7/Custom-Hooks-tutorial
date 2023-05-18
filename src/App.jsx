import Card from "./components/Card";
import Title from "./components/Title";

const App = () => {
  console.log("app compoentn");
  return (
    <div className="App">
      <Card />
      <Title title="nuevo componente con mi custom hook" />
    </div>
  );
};

export default App;
