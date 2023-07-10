import { useSelector } from "react-redux";
import { PostCard } from "../features/post/components/PostCard";
import SideBar from "./SideBar";
import SuggestedUsers from "./SuggestedUsers";
const BookMarks = () => {
  const { bookmarks, isLoading } = useSelector((state) => state.user);
  console.log(bookmarks);

  return (
    <div className="grid sm:grid-cols-[5rem_1fr] lg:grid-cols-[15rem_1fr] xl:grid-cols-[13rem_1fr_18rem] w-[100%] lg:w-[80%] mb-14 sm:m-auto">
      <SideBar />

      <div className="sm:border-x border-darkGrey">
        <div className="text-bold py-2 px-2 sticky top-0 bg-[#001527d8] backdrop-blur-sm z-10 border-b border-darkGrey flex justify-between">
          <h1 className="  m-auto sm:block hidden">Bookmarks</h1>

          <h1 className="m-auto font-extrabold text-center text-grey block sm:hidden">
            BookMarks
          </h1>
          <div className="block xl:hidden">{/* <SearchBar /> */}</div>
        </div>

        <div>
          {isLoading ? (
            <h1>Loading....</h1>
          ) : bookmarks.length ? (
            bookmarks?.map((bookmark) => {
              return <PostCard post={bookmark} key={bookmark._id} />;
            })
          ) : (
            <div className="p-4 text-center">No bookmarks</div>
          )}
        </div>
      </div>

      <div className="hidden xl:block">
        {/* <SearchBar /> */}
        <SuggestedUsers />
      </div>
    </div>
  );
};

export default BookMarks;
