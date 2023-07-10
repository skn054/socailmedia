import logo from "./logo.svg";
import "./App.css";
import { PrivateRoute } from "./Routes/PrivateRoute";
import { Navigate, Route, Routes } from "react-router-dom";
import { Parent } from "./Routes/Parent";
import Login from "./features/auth/components/Login";
import Signup from "./features/auth/components/Signup";
import Home from "./Components/Home";
import BookMarks from "./Components/BookMarks";
import { SinglePost } from "./features/post/components/SinglePost";
import ProfileDetails from "./Components/ProfileDetails";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
        {/* <Route element={<PrivateRoute />}>
        <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/post/:postId" element={<SinglePost />} />


          <Route path="/bookmarks" element={<Bookmark />} />
          <Route path="/profile/:username" element={<UserProfile />} />
        </Route> */}

        <Route
          path="/"
          element={
            <PrivateRoute>
              <Parent />
            </PrivateRoute>
          }
        >
          <Route index element={<Home title="Home" />} />
          <Route path="/explore" element={<Home title="Explore" />} />
          <Route path="/bookmarks" element={<BookMarks />} />
          <Route path="/post/:postId" element={<SinglePost />} />
          <Route path="/profile/:userName" element={<ProfileDetails />} />
        </Route>

        <>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </>
      </Routes>
    </div>
  );
}

export default App;
