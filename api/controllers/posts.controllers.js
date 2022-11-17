import Post from "../models/Post.js";
import User from "../models/User.js";

// Create a post
export const createPosts = async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savePost = await newPost.save();
    res.status(200).json(savePost);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a post
export const updatePosts = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
        await post.updateOne({$set: req.body})
        res.status(200).json("the post has been updated")
    } else {
      res.status(403).json("Your can update only your post");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete a post
export const deletePosts = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.userId === req.body.userId) {
          await post.deleteOne()
          res.status(200).json("the post has been deleted")
      } else {
        res.status(403).json("Your can delete only your post");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };

// like dislike a post
export const likePosts = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);

      if (!post.likes.includes(req.body.userId)) {
        await post.updateOne({$push:{likes:req.body.userId}})
        res.status(200).json("The post has been liked")
      } else {
        await post.updateOne({$pull:{likes:req.body.userId}})
        res.status(200).json("The post has been disliked")
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };

// get a post
export const getPosts = async (req, res) => {
   try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post)
   } catch (error) {
    res.status(500).json(error)
   }
  };

// get timeline posts
export const timelinePosts = async (req, res) => {
    try {
        const currentUser = await User.findById(req.body.userId);
        const userPosts = await Post.find({userId: currentUser._id})
        const friendPosts = await Promise.all(
            currentUser.followings.map(friendId => {
                Post.find({userId: friendId})
            })
        )
        return res.json(userPosts.concat(...friendPosts))
    } catch (error) {
        res.status(500).json(error)
    }
}