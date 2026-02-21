import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GlobalProvider } from "./context/GlobalContext"
import DefaultLayout from "./layouts/DefaultLayout"
import TaskList from "./pages/TaskList"
import AddTask from "./pages/AddTask"
import TaskDetails from "./pages/TaskDetails"

function App() {


  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<TaskList />} />
              <Route path="/tasks/:id" element={<TaskDetails />} />
              <Route path="/addtask" element={<AddTask />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
