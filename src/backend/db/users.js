import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    fullName: "Chandra",
    username: "chandraa",
    password: "123",
    bio: "Hey there, Chandra here",
    website: "https://github.com",
    profileAvatar: "https://picsum.photos/id/37/2000/1333",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        fullName: "Kiran",
        username: "kiran123",
        profileAvatar: "https://picsum.photos/id/43/1280/831",
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: "Kiran",
        username: "kiran123",
        profileAvatar: "https://picsum.photos/id/43/1280/831",
      },
      {
        _id: uuid(),
        fullName: "Akhil",
        username: "akhil",
        profileAvatar: "https://picsum.photos/id/50/4608/3072",
      },
      {
        _id: uuid(),
        fullName: "Prasad",
        username: "prasad",
        profileAvatar: "https://picsum.photos/id/58/1280/853",
      },
    ],
  },
  {
    _id: uuid(),
    fullName: "Kiran",
    username: "kiran123",
    password: "123kiran",
    bio: "Hey there, Kiran here",
    website: "https://www.kiran123.com",
    profileAvatar: "https://picsum.photos/id/43/1280/831",
    createdAt: "2022-05-05",
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        fullName: "Chandra",
        username: "chandraa",
        profileAvatar: "https://picsum.photos/id/37/2000/1333",
      },
      {
        _id: uuid(),
        fullName: "Akhil",
        username: "akhil",
        profileAvatar: "https://picsum.photos/id/50/4608/3072",
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: "Prasad",
        username: "prasad",
        profileAvatar: "https://picsum.photos/id/58/1280/853",
      },
      {
        _id: uuid(),
        fullName: "Chandra",
        username: "chandraa",
        profileAvatar: "https://picsum.photos/id/37/2000/1333",
      },
    ],
  },
  {
    _id: uuid(),
    fullName: "Prasad",
    username: "prasad",
    password: "prasad123",
    bio: "Hey there, Prasad here",
    website: "https://www.nike.com",
    profileAvatar: "https://picsum.photos/id/58/1280/853",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        fullName: "Chandra",
        username: "chandraa",
        profileAvatar: "https://picsum.photos/id/37/2000/1333",
      },
      {
        _id: uuid(),
        fullName: "Kiran",
        username: "kiran123",
        profileAvatar: "https://picsum.photos/id/43/1280/831",
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: "Akhil",
        username: "akhil",
        profileAvatar: "https://picsum.photos/id/50/4608/3072",
      },
    ],
  },
  {
    _id: uuid(),
    fullName: "Akhil",
    username: "akhil",
    password: "akhil123",
    bio: "Hello Twitter, Akhil here!",
    website: "https://www.wikipedia.com",
    profileAvatar: "https://picsum.photos/id/50/4608/3072",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        fullName: "Chandra",
        username: "chandraa",
        profileAvatar: "https://picsum.photos/id/37/2000/1333",
      },
      {
        _id: uuid(),
        fullName: "Prasad",
        username: "prasad",
        profileAvatar: "https://picsum.photos/id/58/1280/853",
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: "Kiran",
        username: "kiran123",
        profileAvatar: "https://picsum.photos/id/43/1280/831",
      },
      {
        _id: uuid(),
        fullName: "Prasad",
        username: "prasad",
        profileAvatar: "https://picsum.photos/id/58/1280/853",
      },
    ],
  },
];
