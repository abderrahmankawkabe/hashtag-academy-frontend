import { useEffect, useState, useCallback } from "react"
import axios from "axios"
import "./Admin.css"

function Admin(){

const token = localStorage.getItem("token")

const API="https://hashtag-academy-backend.onrender.com"

const [reservations,setReservations]=useState([])
const [teachers,setTeachers]=useState([])
const [search,setSearch]=useState("")

const [editing,setEditing]=useState(null)
const [formData,setFormData]=useState({})


const loadData=useCallback(async()=>{

const res1=await axios.get(`${API}/api/reservations`)
const res2=await axios.get(`${API}/api/teachers`)

setReservations(res1.data)
setTeachers(res2.data)

},[API])


useEffect(()=>{

if(!token){

window.location.href="/admin/login"
return

}

loadData()

},[token,loadData])


const logout=()=>{

localStorage.removeItem("token")
window.location.href="/admin/login"

}


const deleteReservation=async(id)=>{

await axios.delete(
`${API}/api/reservations/${id}`,
{headers:{Authorization:token}}
)

setReservations(reservations.filter(r=>r._id!==id))

}


const deleteTeacher=async(id)=>{

await axios.delete(
`${API}/api/teachers/${id}`,
{headers:{Authorization:token}}
)

setTeachers(teachers.filter(t=>t._id!==id))

}


const openEdit=(item,type)=>{

setEditing({type,id:item._id})
setFormData(item)

}


const closeModal=()=>{

setEditing(null)

}


const handleChange=(e)=>{

setFormData({
...formData,
[e.target.name]:e.target.value
})

}


const saveUpdate=async()=>{

if(editing.type==="reservation"){

await axios.put(
`${API}/api/reservations/${editing.id}`,
formData,
{headers:{Authorization:token}}
)

}

if(editing.type==="teacher"){

const data=new FormData()

data.append("nom",formData.nom)
data.append("email",formData.email)
data.append("specialite",formData.specialite)

await axios.put(
`${API}/api/teachers/${editing.id}`,
data,
{headers:{Authorization:token}}
)

}

closeModal()
loadData()

}


const filteredReservations=reservations.filter(r=>
(r.nom||"").toLowerCase().includes(search.toLowerCase())||
(r.email||"").toLowerCase().includes(search.toLowerCase())
)


const filteredTeachers=teachers.filter(t=>
(t.nom||"").toLowerCase().includes(search.toLowerCase())||
(t.email||"").toLowerCase().includes(search.toLowerCase())
)


return(

<div className="admin-container">

<div className="admin-header">
<h1>Admin Dashboard</h1>
<button className="logout-btn" onClick={logout}>Logout</button>
</div>


<input
className="admin-search"
placeholder="Search name or email..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>


<h2>Reservations</h2>

<table>

<thead>
<tr>
<th>Nom</th>
<th>Email</th>
<th>Ville</th>
<th>Programme</th>
<th>Date</th>
<th>Action</th>
</tr>
</thead>

<tbody>

{filteredReservations.map(r=>(

<tr key={r._id}>

<td>{r.nom}</td>
<td>{r.email}</td>
<td>{r.ville}</td>
<td>{r.programme}</td>
<td>{new Date(r.createdAt).toLocaleString()}</td>

<td>

<button
className="update-btn"
onClick={()=>openEdit(r,"reservation")}
>
Update
</button>

<button
className="delete-btn"
onClick={()=>deleteReservation(r._id)}
>
Delete
</button>

</td>

</tr>

))}

</tbody>

</table>


<h2>Teachers</h2>

<table>

<thead>
<tr>
<th>Nom</th>
<th>Email</th>
<th>Specialite</th>
<th>CV</th>
<th>Date</th>
<th>Action</th>
</tr>
</thead>

<tbody>

{filteredTeachers.map(t=>(

<tr key={t._id}>

<td>{t.nom}</td>
<td>{t.email}</td>
<td>{t.specialite}</td>

<td>

<a
href={`${API}/uploads/${t.cv}`}
target="_blank"
rel="noreferrer"
>
Voir CV
</a>

</td>

<td>{new Date(t.createdAt).toLocaleString()}</td>

<td>

<button
className="update-btn"
onClick={()=>openEdit(t,"teacher")}
>
Update
</button>

<button
className="delete-btn"
onClick={()=>deleteTeacher(t._id)}
>
Delete
</button>

</td>

</tr>

))}

</tbody>

</table>


{editing &&(

<div className="modal">

<div className="modal-content">

<h2>Edit</h2>

<input
name="nom"
value={formData.nom||""}
onChange={handleChange}
placeholder="Nom"
/>

<input
name="email"
value={formData.email||""}
onChange={handleChange}
placeholder="Email"
/>

{editing.type==="reservation"&&(

<>

<input
name="ville"
value={formData.ville||""}
onChange={handleChange}
placeholder="Ville"
/>

<input
name="programme"
value={formData.programme||""}
onChange={handleChange}
placeholder="Programme"
/>

</>

)}

{editing.type==="teacher"&&(

<input
name="specialite"
value={formData.specialite||""}
onChange={handleChange}
placeholder="Specialite"
/>

)}

<button onClick={saveUpdate}>Save</button>
<button onClick={closeModal}>Cancel</button>

</div>

</div>

)}

</div>

)

}

export default Admin