import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
export const signup = async (req, res) => {
  try {
    console.log(req.body);
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword)
      return res.status(400).json({ error: "Passwords don't match" });

    const user = await User.findOne({ username });

    console.log(user);

    if (user) return res.status(400).json({ error: "Username already exists" });

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        gender: newUser.gender,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.error("Error while signing up", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = (req, res) => {
  console.log("Login Route");
};

export const logout = (req, res) => {
  console.log("Logout Route");
};
