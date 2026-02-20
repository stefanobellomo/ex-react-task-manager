import { memo } from "react"

export default memo(function TaskRow({ task }) {
    return (
        <tr>
            <td>{task.title}</td>
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