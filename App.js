import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  const addUser = async () => {
    await axios.post("http://localhost:5000/add", { name });
    fetchUsers();
    setName("");
  };

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:5000/users");
    setUsers(res.data);
  };

  useEffect(() => { fetchUsers(); }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Store Name in MongoDB</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name" />
      <button onClick={addUser}>Submit</button>

      <ul>
        {users.map((u, i) => <li key={i}>{u.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
