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

  const addUser = async () => {
    const newUser = {
      name: "Simone",
      email: "simoneraeder@live.com",
    };
    const response = await api.post("users", newUser);
    setUsers((prev) => [...prev, response.data]);
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
      <button onClick={() => addUser()}>Adicionar usuário</button>
    </>
  );
}

export default App;
