import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import TaskRow from "../components/TaskRow"

export default function TaskList() {

    const { tasks } = useContext(GlobalContext)

    return (
        <div className="container">
            <table className="table" style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(task => (
                            <TaskRow key={task.id} task={task} />
                        ))
                    }
                </tbody>
            </table>
        </div>

    )
}