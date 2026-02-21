import { useState, useEffect } from "react"
const apiurl = import.meta.env.VITE_API_URL

export default function useTask() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch(`${apiurl}/tasks`)
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch((err) => console.error("api errata", err))
    }, [])

    console.log(tasks);

    async function addTask({ title, description, status }) {
        try {
            const res = await fetch(`${apiurl}/tasks`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, description, status }),
            });

            const data = await res.json()

            if (!data.success) {
                throw new Error(data.message || "Errore durante la creazione della task");
            }

            setTasks(prev => [...prev, data.task])
            return data.task
        } catch (err) {
            console.error("Errore POST /tasks:", err);
            throw err;
        }
    }

    async function removeTask(taskId) {
        try {
            const res = await fetch(`${apiurl}/tasks/${taskId}`, {
                method: "DELETE",
            });

            const data = await res.json()

            if (!data.success) {
                throw new Error(data.message || "Errore durante l'eliminazione della task");
            }

            setTasks(prev => prev.filter(t => String(t.id) !== String(taskId)))
            return true
        } catch (err) {
            console.error("Errore DELETE /tasks/:id:", err);
            throw err;
        }
    }

    function updateTask() {
        console.log("task aggiunta");

    }

    return { tasks, setTasks, addTask, removeTask, updateTask }
}