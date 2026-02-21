import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { useParams, useNavigate } from "react-router-dom"

export default function TaskDetails() {

    const navigate = useNavigate()
    const { id } = useParams()
    const { tasks, removeTask } = useContext(GlobalContext)

    const task = tasks.find(t => String(t.id) === String(id))

    if (!task) {
        return <div>Nessuna task trovata</div>
    }

    async function handleDelete() {
        try {
            await removeTask(id)
            alert("Task eliminata")
            navigate('/')
        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <div className="container">
            <h2>{task.title}</h2>
            <p><strong>Description : </strong>{task.description}</p>
            <p><strong>Status : </strong>{task.status}</p>
            <p><strong>Data di creazione : </strong>{task.createdAt}</p>
            <button onClick={handleDelete}>Elimina task</button>
        </div>
    )
}