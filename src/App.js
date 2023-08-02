import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./components/data";


function App() {
  const cards = data.map(item => {
    return (
        <Card 
            key={item.id}
            {...item}
        />
    )
})        
  return (
    <div className="border-box">
      <div className="container">
        <Navbar />
        <Hero />
        <section className="cards-list">
          {cards}
        </section>
      </div>
    </div>
  );
}

export default App;
