import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "./Admin.css"

function AdminLogin(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const navigate = useNavigate()

const login = async(e)=>{

e.preventDefault()

try{

const res = await axios.post(
"https://hashtag-academy-backend.onrender.com/api/admin/login",
{email,password}
)

localStorage.setItem("token",res.data.token)

navigate("/admin")

}catch(err){

alert("Email or password incorrect")

}

}

return(

<div className="login-container">

<img src="/logo.webp" alt="logo" className="login-logo"/>

<h2>Admin Login</h2>

<form onSubmit={login}>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button>Login</button>

</form>

</div>

)

}

export default AdminLogin