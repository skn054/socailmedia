import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../features/post/postSlice";
import { getAllUsers } from "../features/user/userSlice";
import { sortPosts } from "../utils/sortPosts";

import { PostCard } from "../features/post/components/PostCard";
import SideBar from "./SideBar";
import SuggestedUsers from "./SuggestedUsers";
import { NewPost } from "../features/post/components/NewPost";
import SortBar from "./SortBar";

const Home = ({ title }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.user);
  const { posts, isLoading, activeSort } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getAllUsers());
  }, [dispatch]);

  const loggedInUser = users.find(
    (dbUser) => dbUser.username === user.username
  );

  const followingUsers = loggedInUser?.following;

  var postOfFollowingUsers = posts?.filter((post) =>
    followingUsers?.some(
      (followingUser) => followingUser.username === post.username
    )
  );

  const postsOfUser = posts?.filter(
    (post) => post?.username === loggedInUser?.username
  );

  let timeline;
  switch (title) {
    case "Home":
      timeline = [...postOfFollowingUsers, ...postsOfUser];
      break;
    default:
      timeline = posts;
  }

  const sortedPosts = sortPosts(timeline, activeSort);

  return (
    <div className="grid sm:grid-cols-[5rem_1fr] lg:grid-cols-[15rem_1fr] xl:grid-cols-[13rem_1fr_18rem] w-[100%] lg:w-[80%] mb-14 sm:m-auto">
      <SideBar />

      <div className="sm:border-x border-darkGrey">
        <div className="text-bold py-2 px-2 sticky top-0 bg-[#001527d8] backdrop-blur-sm z-10 border-b border-darkGrey flex justify-between">
          <h1 className="  m-auto sm:block hidden">{title}</h1>

          <h1 className="m-auto font-extrabold text-center text-grey block sm:hidden">
            {title}
          </h1>
          <div className="block xl:hidden"></div>
        </div>

        <div>
          <NewPost />

          <SortBar />

          <div>
            {isLoading ? (
              <h1>Loading...</h1>
            ) : sortedPosts?.length ? (
              sortedPosts.map((post) => <PostCard post={post} key={post._id} />)
            ) : (
              <div className="p-4 text-center">No posts</div>
            )}
          </div>
        </div>
      </div>

      <div className="hidden xl:block">
        <SuggestedUsers />
      </div>
    </div>
  );
};

export default Home;
