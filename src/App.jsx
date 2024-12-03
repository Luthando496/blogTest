import { Route, Routes } from "react-router";
import MainApp from "./pages/MainApp";
import BlogPage from "./pages/BlogPage"
import CreateBlog from "./pages/CreateBlog";


function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<MainApp />} />
      <Route path="/blog/:id" element={<BlogPage />} />
      <Route path="/blog/create" element={<CreateBlog />} />
    </Routes>
    
    </>
  )
}

export default App
