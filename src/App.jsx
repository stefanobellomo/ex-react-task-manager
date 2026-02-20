import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import TaskList from "./pages/TaskList"
import AddTask from "./pages/AddTask"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<TaskList />} />
            <Route path="/" element={<AddTask />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
