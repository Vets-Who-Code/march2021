import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import JobApp from "./components/JobApp/JobApp";

function App() {
  return (
    <div className="App">
      <Header />
      <JobApp />
      <Footer />
    </div>
  );
}

export default App;
