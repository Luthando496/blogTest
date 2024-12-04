import { Route, Routes } from "react-router";
import MainApp from "./pages/MainApp";
import BlogPage from "./pages/BlogPage"
import CreateBlog from "./pages/CreateBlog";
import Login from "./pages/Login";


function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<MainApp />} />
      <Route path="/blog/:id" element={<BlogPage />} />
      <Route path="/blog/create" element={<CreateBlog />} />
      <Route path="/sign-in" element={<Login />} />
    </Routes>
    
    </>
  )
}

export default App
