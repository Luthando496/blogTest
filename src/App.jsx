import { Route, Routes } from "react-router";
import MainApp from "./pages/MainApp";
import BlogPage from "./pages/BlogPage"
import CreateBlog from "./pages/CreateBlog";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<MainApp />} />
      <Route path="/blog/:id" element={<BlogPage />} />
      <Route path="/blog/create" element={<CreateBlog />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    
    </>
  )
}

export default App
