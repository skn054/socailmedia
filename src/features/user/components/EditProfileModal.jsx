import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateProfile, setLoading } from "../userSlice";
import toast from "react-hot-toast";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import UserProfile from "../../../Components/UserProfile";

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dsbdynrz3/image/upload";

const CLOUDINARY_UPLOAD_PRESET = "r1gieeqc";

export const EditProfileModal = ({ setEditModal }) => {
  const { token, user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const currentUser = users?.find(
    (dbUser) => dbUser.username === user.username
  );

  const [editInput, setEditInput] = useState(currentUser);
  const [image, setImage] = useState(null);

  const uploadImageFile = () => {
    // dispatch(setLoading());

    const file = image;
    console.log("file is", image);
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    formData.append("folder", "twitter");
    formData.append("cloud_name", "dsbdynrz3");

    fetch(CLOUDINARY_URL, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("response", data);
        return dispatch(
          updateProfile({
            editInput: {
              ...currentUser,
              ...editInput,
              profileAvatar: data.url,
            },
            token,
          })
        );
      })
      .catch((err) => console.error("error is", err));
  };

  const editChangeHandler = (e) => {
    const { name, value } = e.target;
    setEditInput(() => ({ ...editInput, [name]: value }));
  };

  const editFormHandler = (e) => {
    e.preventDefault();

    if (image) {
      uploadImageFile();
    } else
      dispatch(
        updateProfile({ editInput: { ...currentUser, ...editInput }, token })
      );
    setEditModal(false);
  };

  return (
    <div className="bg-darkSecondary mx-4 text-sm border border-darkGrey p-4 w-80 rounded overflow-y-auto">
      <form className="flex flex-col gap-2.5" onSubmit={editFormHandler}>
        <div className="flex justify-between items-center ">
          <div className="flex items-center">
            <button
              className="hover:bg-dark h-min hover:rounded-full px-2 py-0.5 mr-2"
              type="button"
              onClick={() => setEditModal(false)}
            >
              <CloseOutlinedIcon />
            </button>
            <span className="text-lg">Edit Profile</span>
          </div>

          <button className="bg-primary py-1 px-4 rounded-full" type="submit">
            Save
          </button>
        </div>

        <label className="edit-profile relative w-max cursor-pointer mx-auto my-2">
          <input
            type="file"
            className="hidden"
            onChange={(e) => {
              Math.round(e.target.files[0].size / 1024000) > 1
                ? toast.error("File size should not be more than 1Mb")
                : setImage(e.target.files[0]);
            }}
          />

          <UserProfile
            user={
              image
                ? {
                    ...currentUser,
                    profileAvatar: URL.createObjectURL(image),
                  }
                : currentUser
            }
          />

          <CameraAltIcon className=" absolute text-md bottom-0 right-0" />
        </label>

        <div className="flex flex-col items-center py-1 px-2  rounded border-lightGrey border focus-within:border-primary">
          <label className="w-full">
            <div className="text-xs text-grey">Name</div>
            <input
              className="bg-inherit w-full text-sm outline-none border-none"
              type="text"
              name="fullName"
              value={editInput.fullName}
              onChange={editChangeHandler}
            />
          </label>
        </div>
        <div className="flex flex-col items-center py-1 px-2  rounded border-lightGrey border focus-within:border-primary">
          <label className="w-full">
            <div className="text-xs text-grey">Bio</div>
            <input
              className="bg-inherit w-full text-sm outline-none border-none"
              type="text"
              name="bio"
              value={editInput.bio}
              onChange={editChangeHandler}
            />
          </label>
        </div>
        <div className="flex flex-col items-center py-1 px-2  rounded border-lightGrey border focus-within:border-primary">
          <label className="w-full">
            <div className="text-xs text-grey">Website</div>
            <input
              className="bg-inherit w-full text-sm outline-none border-none"
              type="url"
              name="website"
              value={editInput.website}
              onChange={editChangeHandler}
            />
          </label>
        </div>
      </form>
    </div>
  );
};
