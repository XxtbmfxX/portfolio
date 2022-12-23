import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Description from "./components/Description";
import LanguageList from "./components/LanguageList";

function App() {
  return (
    <div className="App flex flex-col justify-center align-middle">
      <Header />
      <Description />
      <hr style={{ width: "80%", maxWidth: "500px", alignSelf: "center" }} />
      <LanguageList />
      <h1>Creao que funciona broh</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card title="Card 1" description="This is the first card" />
        <Card title="Card 2" description="This is the second card" />
        <Card title="Card 3" description="This is the third card" />
        <Card title="Card 4" description="This is the fourth card" />
        <Card title="Card 5" description="This is the fifth card" />
        <Card title="Card 6" description="This is the sixth card" />
        <Card title="Card 7" description="This is the seventh card" />
        <Card title="Card 8" description="This is the eighth card" />
      </div>
    </div>
  );
}

export default App;
