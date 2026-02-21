import { useContext, useState, useMemo, useEffect } from "react"
import { GlobalContext } from "../context/GlobalContext"
import TaskRow from "../components/TaskRow"

export default function TaskList() {

    const [sortBy, setSortBy] = useState("createdAt")
    const [sortOrder, setSortOrder] = useState(1)
    const [searchQuery, setSearchQuery] = useState("")
    const [debouncedQuery, setDebouncedQuery] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(searchQuery);
        }, 750);

        return () => clearTimeout(timer);
    }, [searchQuery]);

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

        const query = debouncedQuery.trim().toLowerCase()

        const filteredTasks = tasks.filter(t => t.title.toLowerCase().includes(query))

        const copy = [...filteredTasks];

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
    }, [tasks, sortBy, sortOrder, debouncedQuery]);


    return (
        <div className="container">
            <div className="p-3">
                <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="cerca task..." />
            </div>
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