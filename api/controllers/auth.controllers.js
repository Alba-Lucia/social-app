import User from "../models/User.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
    // Generate new password crypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    
    // New user
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
    });
    
    // save user
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    // return res.status(500).json(error)
    console.log(error)
  }
};

// LOGIN
export const login = async (req, res) => {
  try {
    // Validate Email
    const user = await User.findOne({email: req.body.email})
    !user && res.status(404).send("user no faund")
    
    // Validate Password
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    !validPassword && res.status(400).json("wrong password")

    res.status(200).json(user)
  } catch (error) {
    return res.status(500).json(error)
  }
}


