import { createContext } from "react";
import useTask from "../customHooks/useTask";

export const GlobalContext = createContext()

export function GlobalProvider({ children }) {

    const { tasks, setTasks, addTask, removeTask, updateTask } = useTask()

    return (
        <GlobalContext.Provider value={{ tasks, setTasks }}>
            {children}
        </GlobalContext.Provider>
    )
}