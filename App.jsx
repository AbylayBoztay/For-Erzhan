import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Slider from "./components/slider/Slider"
import DoctorInfo from "./components/doctorInfo/DoctorInfo";

function App() {
  return (
    <div className="App">
      <Header/>
      <Promo/>
      <Slider/>
      <DoctorInfo/>
    </div>
  );
}

export default App;
