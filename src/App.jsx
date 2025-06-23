import "./App.css";
import Card from "./Components/Card";
import card4 from "./assets/card4.jpg";
import card2 from "./assets/card2.jpg";
import card3 from "./assets/card3.jpg";

function App() {
  return (
    <div className="main"> 
      <Card
        city="New York"
        secondHeading="Economy"
        price="120"
        airPlanePara="JFK"
        bgImg={card4}
        buttonContent="Search Flight"
      />
      <Card
        city="Paris"
        secondHeading="Business Class"
        price="250"
        airPlanePara="CDG"
        bgImg={card2}
        buttonContent="Search Flight"
      />
      <Card
        city="Tokyo"
        secondHeading="First Class"
        price="480"
        airPlanePara="ABC"
        bgImg={card3}
        buttonContent="Explore Deals"
      />
    </div>
  );
}

export default App;
