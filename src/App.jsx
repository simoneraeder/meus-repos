import { useEffect, useState } from "react";
import "./App.css";
import { api } from "./services/api";

function App() {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    try {
      const { data } = await api.get("/users");
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(users);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Usuários</h1>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </>
  );
}

export default App;
