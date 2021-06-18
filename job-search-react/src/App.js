import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import JobApp from "./components/JobApp/JobApp";

function App() {
  const [theme, setTheme] = React.useState('light');
  return (
    <div className="App">
      <Header theme={theme} setTheme={setTheme} />
      <JobApp />
      <Footer />
    </div>
  );
}

export default App;
