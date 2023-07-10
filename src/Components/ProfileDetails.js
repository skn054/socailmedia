import { useSelector, useDispatch } from "react-redux";
import SideBar from "./SideBar";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getAllUsers } from "../features/user/userSlice";
import { UserProfileDetails } from "../features/user/components/UserProfileDetails";
import { getPosts } from "../features/post/postSlice";

// import { SearchBar } from "../components/SearchBar";

import { PostCard } from "../features/post/components/PostCard";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SuggestedUsers from "./SuggestedUsers";

const ProfileDetails = () => {
  const { userName } = useParams();
  const { users } = useSelector((state) => state.user);
//   const { user, token } = useSelector((state) => state.auth);
  const { posts, isLoading } = useSelector((state) => state.post);
  const navigate = useNavigate();
  const currentUser = users.find((curruser) => curruser.username === userName);

  const currPosts = posts.filter(
    (post) => post.username === currentUser.username
  );
  return (
    <div className="grid sm:grid-cols-[5rem_1fr] lg:grid-cols-[15rem_1fr] xl:grid-cols-[13rem_1fr_18rem] w-[100%] lg:w-[80%] mb-14 sm:m-auto">
      <SideBar />

      <div className="sm:border-x border-darkGrey">
        <h1 className="flex items-center px-4 py-2 sticky top-0 bg-[#001527d8] backdrop-blur-sm z-10 border-b border-darkGrey">
          <ArrowBackIcon
            className="fa-solid fa-arrow-left mr-4 cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <span>
            <p className="font-bold tracking-wide">{currentUser?.fullName}</p>
            <p className="text-sm text-lightGrey">{currPosts?.length} posts</p>
          </span>
        </h1>

        {/* {currentUser ? <ProfileDetails currentUser={currentUser} /> : null} */}
        {currentUser ? <UserProfileDetails currentUser={currentUser} /> : null}

        {isLoading ? (
          <h1>Loading...</h1>
        ) : currPosts?.length ? (
          [...currPosts]
            ?.reverse()
            .map((post) => <PostCard post={post} key={post._id} />)
        ) : (
          <p className="p-4 text-center">No posts to show.</p>
        )}
      </div>

      <div className="hidden xl:block">
        {/* <SearchBar /> */}
        <SuggestedUsers />
      </div>
    </div>
  );
};

export default ProfileDetails;
