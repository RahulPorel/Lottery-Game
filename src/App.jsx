import Lottery from "./components/lottery.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Lottery n={3} winningSum={15} />
    </>
  );
}

export default App;
