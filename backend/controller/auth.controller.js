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

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      gender: newUser.gender,
      profilePic: newUser.profilePic,
    });
  } catch (error) {
    console.error("Error while signing up", error.message);
    res.status(500).json({error: "Internal server error"})
  }
};

export const login = (req, res) => {
  console.log("Login Route");
};

export const logout = (req, res) => {
  console.log("Logout Route");
};
