import axios from "axios";
import { useState } from "react";
import PersonCard from "./components/PersonCard";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [persons, setPersons] = useState([]);
  const requestData = () => {
    setIsLoading(true);
    axios
      .get("https://randomuser.me/api/?results=50")
      .then((response) => {
        setPersons(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="persons">
      <h1>Person Cards</h1>
      <button onClick={requestData}>get data</button>
      {isLoading ? (
        <h2>Loading</h2>
      ) : (
        persons.map((person, idx) => <PersonCard key={idx} person={person} />)
      )}
    </div>
  );
}

export default App;
