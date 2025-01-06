import { Route, Routes } from "react-router";
import MainApp from "./pages/MainApp";
import BlogPage from "./pages/BlogPage"
import CreateBlog from "./pages/CreateBlog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect,useState } from "react";
import { supabase } from "./superclient";
import { useDispatch } from "react-redux";
import { loginUser } from "./store/actions/userActions";


function App() {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch()


  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user || null);
      dispatch(loginUser(session?.user))

    };

    fetchUser();

    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => subscription?.subscription?.unsubscribe();
  }, []);

  return (
    <>
     <Routes>
      <Route path="/" element={<MainApp />} />
      <Route path="/blog/:id" element={<BlogPage />} />
      <Route path="/blog/create" element={<CreateBlog />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="/sign-up" element={<Register />} />
    </Routes>
    
    </>
  )
}

export default App
