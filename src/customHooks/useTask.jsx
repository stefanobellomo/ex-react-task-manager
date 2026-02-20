import { useState, useEffect } from "react"
const apiurl = import.meta.env.VITE_API_URL

export default function useTask() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        try {
            fetch(`${apiurl}/tasks`)
                .then(res => res.json())
                .then(data => setTasks(data))
                .catch((err) => console.error("api errata", err))
        } catch (error) {
            console.error('chiamata fallita')
        }
    }, [])

    console.log(tasks);

    function addTask() {
        console.log("task aggiunta");

    }
    function removeTask() {
        console.log("task rimossa");

    }
    function updateTask() {
        console.log("task aggiunta");

    }

    return { tasks, setTasks, addTask, removeTask, updateTask }
}