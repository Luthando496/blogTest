import { Route, Routes } from "react-router";
import MainApp from "./components/MainApp";
import BlogPage from "./pages/BlogPage"


function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<MainApp />} />
      <Route path="/blog/:id" element={<BlogPage />} />
    </Routes>
    
    </>
  )
}

export default App
