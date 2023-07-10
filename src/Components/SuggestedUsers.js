import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import UserProfile from "./UserProfile";
import { followUser } from "../features/user/userSlice";

const SuggestedUsers = () => {
  const { users } = useSelector((state) => state.user);
  const { user, token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedInUser = users.find(
    (dbUser) => dbUser.username === user.username
  );

  const followigUsers = loggedInUser?.following;
  const suggestedUsers = users?.filter(
    (currUser) =>
      loggedInUser?.username !== currUser?.username &&
      !followigUsers?.some(
        (following) => following?.username === currUser?.username
      )
  );
  // console.log(suggestedUsers);
  return (
    <>
      {" "}
      <>
        {suggestedUsers.length ? (
          <div className="flex flex-col justify-center gap-4 m-2.5 mt-0 px-4 py-3  rounded-md bg-darkSecondary h-max w-full sticky top-[85px]">
            <div className="text-lg font-bold tracking-wide">
              Suggested Users
            </div>

            {suggestedUsers.map((user) => (
              <div
                key={user._id}
                className="flex items-start gap-2 cursor-pointer"
                onClick={() => {
                  navigate(`/profile/${user.username}`);
                }}
              >
                <UserProfile user={user} />

                <div className="flex flex-col grow -mt-0.5">
                  <span className="text-sm">{user.fullName}</span>
                  <span className="text-sm text-lightGrey -mt-1">
                    @{user.username}
                  </span>
                </div>

                <button
                  className="bg-primary text-sm py-1 px-4 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    // dispatch(followUser({ token, followUserId: user._id }));
                    dispatch(followUser({ token, followUserId: user._id }));
                  }}
                >
                  Follow
                </button>
              </div>
            ))}
          </div>
        ) : null}
      </>
    </>
  );
};

export default SuggestedUsers;
