
import './App.css';
import {useState, useEffect} from "react"
import Axios from "axios"

function App() {

  const [listOfUsers, setListOfUsers] = useState([])

  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [username, setUsername] = useState("")

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data)
    })
  }, [])


  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name,
      age,
      username
    }).then((response) => {
      setListOfUsers([...listOfUsers, 
        { name,
        age,
        username}])
    } )

  }

  return (
    <div className="App">
      <div className="usersDisplay">
        {listOfUsers.map((user) => {
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Username: {user.username}</h1>
              <h2>See my data above</h2>
            </div>
          )
        })}
        </div>  

        <div>
          <input type="text" onChange={(e) => {setName(e.target.value)}} placeholder='Name' />
          <input type="number" onChange={(e) => {setAge(e.target.value)}} placeholder='Age' />
          <input type="text" onChange={(e) => {setUsername(e.target.value)}} placeholder='Username' />
          <button onClick={createUser}>Create User</button>
        </div>
    
    
    </div>
  );
}

export default App;
