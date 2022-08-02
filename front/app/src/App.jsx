import { Link, Route, Routes } from "react-router-dom";
//components
import Login from "./components/Login/Login";
import Users from "./components/Users/Users";
import Products from "./components/Products/Products";
import AddUser from "./components/AddUser/AddUser";

function App() {

  return (
    <div>
      <ul>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/add/user">Add user</Link></li>
        <li><Link to="/products">Products</Link></li>
      </ul>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="/add/user" element={<AddUser />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
