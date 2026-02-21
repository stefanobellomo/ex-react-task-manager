import { useEffect, useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { useParams } from "react-router-dom"

export default function TaskDetails() {

    const { id } = useParams()
    const { tasks } = useContext(GlobalContext)

    const task = tasks.find(t => String(t.id) === String(id))

    function handleDelete() {
        console.log("task eliminata");
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