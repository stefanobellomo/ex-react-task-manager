import { useContext, useState, useMemo } from "react"
import { GlobalContext } from "../context/GlobalContext"
import TaskRow from "../components/TaskRow"

export default function TaskList() {

    const [sortBy, setSortBy] = useState("createdAt")
    const [sortOrder, setSortOrder] = useState(1)

    const { tasks } = useContext(GlobalContext)

    function handleOrder(column) {
        if (sortBy === column) {
            setSortOrder(prev => prev * -1)
        } else {
            setSortBy(column)
            setSortOrder(1)
        }
    }

    const sortedTasks = useMemo(() => {
        const copy = [...tasks];

        const statusOrder = { "To do": 0, "Doing": 1, "Done": 2 };

        copy.sort((a, b) => {
            if (sortBy === "title") {
                return a.title.localeCompare(b.title) * sortOrder;
            }

            if (sortBy === "status") {
                return (statusOrder[a.status] - statusOrder[b.status]) * sortOrder;
            }

            const aTime = new Date(a.createdAt).getTime();
            const bTime = new Date(b.createdAt).getTime();
            return (aTime - bTime) * sortOrder;
        });

        return copy;
    }, [tasks, sortBy, sortOrder]);


    return (
        <div className="container">
            <table className="table" style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th onClick={() => handleOrder("title")}>Name</th>
                        <th onClick={() => handleOrder("status")}>Status</th>
                        <th onClick={() => handleOrder("createdAt")}>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sortedTasks.map(task => (
                            <TaskRow key={task.id} task={task} />
                        ))
                    }
                </tbody>
            </table>
        </div>

    )
}