import { memo } from "react"
import { Link } from "react-router-dom"

export default memo(function TaskRow({ task }) {
    return (
        <tr>
            <td><Link to={`/tasks/${task.id}`}>{task.title}</Link></td>
            <td style={{
                color: task.status === "To do" ? "red" :
                    task.status === "Doing" ? "orange" :
                        task.status === "Done" ? "green" :
                            "white"
            }}>{task.status}</td>
            <td>{task.createdAt}</td>
        </tr>
    )
})