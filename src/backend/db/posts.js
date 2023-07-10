import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "Enjoying breakfast at Taj Krishna, Hyderabad",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "akhil",
    fullName: "Akhil",
    postImage:
      "https://res.cloudinary.com/dsbdynrz3/image/upload/v1688962159/cld-sample-4.jpg",
    createdAt: "2022-05-01",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Prasad",
        username: "prasad",

        profileAvatar: "https://picsum.photos/id/58/1280/853",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Chandra",
        username: "chandraa",
        profileAvatar: "https://picsum.photos/id/37/2000/1333",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Bought shoes at a great discount during myntra's sale",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    username: "chandraa",
    fullName: "Chandra",
    createdAt: "2022-05-11",
    postImage:
      "https://res.cloudinary.com/dsbdynrz3/image/upload/v1688962152/samples/shoe.jpg",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Prasad",
        username: "prasad",
        profileAvatar: "https://picsum.photos/id/58/1280/853",
        createdAt: "2022-05-11",
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Akhil",
        username: "akhil",
        profileAvatar: "https://picsum.photos/id/50/4608/3072",
        createdAt: "2022-05-12",
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Ordered Special Mutton Biryani from Paradise. Taste's great",
    likes: {
      likeCount: 2,
      likedBy: [
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
      dislikedBy: [],
    },
    username: "prasad",
    fullName: "Prasad",
    postImage:
      "https://res.cloudinary.com/dsbdynrz3/image/upload/v1688986001/MuttonBiryani_y0p2i9.webp",
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Prasad",
        username: "prasad",
        profileAvatar: "https://picsum.photos/id/58/1280/853",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Chandra",
        username: "chandraa",
        profileAvatar: "https://picsum.photos/id/37/2000/1333",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2022-04-20",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Went on a run for 4km, feeling refreshed",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    postImage: null,
    username: "prasad",
    fullName: "Prasad",
    createdAt: "2022-05-05",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Prasad",
        username: "prasad",
        profileAvatar: "https://picsum.photos/id/58/1280/853",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Chandra",
        username: "chandraa",
        profileAvatar: "https://picsum.photos/id/37/2000/1333",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Enrolled in JavaScript course on udemy. ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    postImage:
      "https://res.cloudinary.com/dsbdynrz3/image/upload/v1688985136/twitter/ey1e7mkctogettvoqxkt.png",
    username: "kiran123",
    fullName: "Kiran",
    createdAt: "2022-05-11",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Prasad",
        username: "prasad",
        profileAvatar: "https://picsum.photos/id/58/1280/853",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Chandra",
        username: "chandraa",
        profileAvatar: "https://picsum.photos/id/37/2000/1333",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Started learning React.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "kiran123",
    fullName: "Kiran",
    createdAt: "2022-05-09",
    postImage:
      "https://res.cloudinary.com/dsbdynrz3/image/upload/v1688978772/twitter/cq9sqifbhaq684fpwaxo.png",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Prasad",
        username: "prasad",
        profileAvatar: "https://picsum.photos/id/58/1280/853",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Chandra",
        username: "chandraa",
        profileAvatar: "https://picsum.photos/id/37/2000/1333",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Work from Office starts tomorrow",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "kiran123",
    fullName: "Kiran",
    postImage:
      "https://res.cloudinary.com/dsbdynrz3/image/upload/v1688962137/samples/ecommerce/leather-bag-gray.jpg",
    createdAt: "2022-05-01",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Prasad",
        username: "prasad",
        profileAvatar: "https://picsum.photos/id/58/1280/853",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "All the Best!",
        fullName: "Chandra",
        username: "chandraa",
        profileAvatar: "https://picsum.photos/id/37/2000/1333",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
