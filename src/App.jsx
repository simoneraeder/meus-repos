import { useEffect, useState } from "react";
import "./App.css";
import { api } from "./services/api";

function App() {
  const [repos, setRepos] = useState([]);
  const getData = async () => {
    try {
      const { data } = await api.get("/repos");
      setRepos(data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(repos);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Meus Repos GitHub</h1>
      {repos.map((repo) => (
        <p key={repo.id}>{repo.name}</p>
      ))}
    </>
  );
}

export default App;
