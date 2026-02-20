import { createContext, useState, useEffect } from "react";
const apiurl = import.meta.env.VITE_API_URL

export const GlobalContext = createContext()

export function GlobalProvider({ children }) {

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


    return (
        <GlobalContext.Provider value={{ tasks, setTasks }}>
            {children}
        </GlobalContext.Provider>
    )
}