import "./App.css";
import Hero from "./components/Hero/Hero";
import TravelBlog from "./components/TravelBlog/TravelBlog";
import TravelData from "./TravelData";

function App() {
  const sections = TravelData.map((item) => {
    return (
      <TravelBlog
        key={item.id}
        placeHeading={item.placeHeading}
        placeImg1={item.placeImg1}
        placeImg2={item.placeImg2}
        placeImg3={item.placeImg3}
        placeDescription={item.placeDescription}
      />
    );
  });
  return (
    <div className="App">
      <Hero />
      <div className="places">{sections}</div>
    </div>
  );
}

export default App;
