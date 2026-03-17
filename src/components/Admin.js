import { useEffect, useState, useCallback } from "react"
import axios from "axios"
import "./Admin.css"

function Admin() {

  const token = localStorage.getItem("token")

  const [reservations, setReservations] = useState([])
  const [teachers, setTeachers] = useState([])
  const [search, setSearch] = useState("")

  const API = "https://hashtag-academy-backend.onrender.com"

  const loadData = useCallback(async () => {

    try {

      const res1 = await axios.get(`${API}/api/reservations`)
      const res2 = await axios.get(`${API}/api/teachers`)

      setReservations(res1.data)
      setTeachers(res2.data)

    } catch (err) {
      console.log(err)
    }

  }, [])

  useEffect(() => {

    if (!token) {
      window.location.href = "/admin/login"
      return
    }

    loadData()

  }, [token, loadData])


  const logout = () => {

    localStorage.removeItem("token")
    window.location.href = "/admin/login"

  }


  const deleteReservation = async (id) => {

    await axios.delete(
      `${API}/api/reservations/${id}`,
      { headers: { Authorization: token } }
    )

    setReservations(reservations.filter(r => r._id !== id))

  }


  const deleteTeacher = async (id) => {

    await axios.delete(
      `${API}/api/teachers/${id}`,
      { headers: { Authorization: token } }
    )

    setTeachers(teachers.filter(t => t._id !== id))

  }


  const filteredReservations = reservations.filter(r =>
    (r.nom || "").toLowerCase().includes(search.toLowerCase()) ||
    (r.email || "").toLowerCase().includes(search.toLowerCase())
  )


  const filteredTeachers = teachers.filter(t =>
    (t.nom || "").toLowerCase().includes(search.toLowerCase()) ||
    (t.email || "").toLowerCase().includes(search.toLowerCase())
  )


  return (

    <div className="admin-container">

      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <button className="logout-btn" onClick={logout}>Logout</button>
      </div>


      <input
        className="admin-search"
        placeholder="Search name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
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

          {filteredReservations.map(r => (

            <tr key={r._id}>

              <td>{r.nom}</td>
              <td>{r.email}</td>
              <td>{r.ville}</td>
              <td>{r.programme}</td>
              <td>{new Date(r.createdAt).toLocaleString()}</td>

              <td>

                <button
                  className="delete-btn"
                  onClick={() => deleteReservation(r._id)}
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

          {filteredTeachers.map(t => (

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
                  className="delete-btn"
                  onClick={() => deleteTeacher(t._id)}
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  )

}

export default Admin