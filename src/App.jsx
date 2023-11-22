import { RouterProvider } from "react-router-dom"
import router from "./routes/Routes"


function App() {
  return (
    <>
    <div className="max-w-screen-[1440px] mx-auto font-new">
    <RouterProvider router={router} />
    </div>
    </>
  )
}

export default App
