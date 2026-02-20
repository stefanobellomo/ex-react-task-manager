import { createContext } from "react";
import useTask from "../customHooks/useTask";

export const GlobalContext = createContext()

export function GlobalProvider({ children }) {

    // const { tasks, setTasks, addTask, removeTask, updateTask } = useTask()
    const taskState = useTask()

    return (
        <GlobalContext.Provider value={taskState}>
            {children}
        </GlobalContext.Provider>
    )
}