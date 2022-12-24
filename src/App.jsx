import "./App.css";
import Header from "./components/Header";
import Description from "./components/Description";
import LanguageList from "./components/LanguageList";
import Container from "./components/Container";

function App() {
  return (
    <div className="App flex flex-col justify-center align-middle bg-slate-700 ">
      <Header />
      <Description />
      <LanguageList />
      <Container />
    </div>
  );
}

export default App;
