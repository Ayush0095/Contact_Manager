const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bycrpt = require("bcrypt");

//@desc Register the user
//@route POST /api/users/register
//@access Public

const registerUser = asyncHandler(async(req, res) => {
    const{ username, email, password } = req.body;
    if(!username || !email || !password) {
        res.status(400);
        throw new error("Please fill all the fields");
    }

    //check if user of given email already exits.
    const userAvailabe = await User.findOne({ email });
    if(userAvailabe) {
        res.status(400);
        throw new Error("User already exists");
    }
    //Bcrypt will also provide us some promise, so wee can use async and await
    const hashedPassword  = await bycrpt.hash(password,10);
    console.log("hashed Password",hashedPassword);
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    })
    console.log(`User created with name ${user}`);

    //if user is created successfully then we will not send the password because it contains hashed password
    if(user){
        res.status(201).json({
            _id: user.id,
            email: user.email,
        });
    }else{
        throw new Error("User data is not valid");
    }
    res.status(200).json({ message : "Register the user" });
});

//@desc login user
//@route POST /api/users/login
//@access Public
const loginUser = asyncHandler(async(req, res) => {
    res.status(200).json({ message : "Login the user" });
});

//@desc Current User
//@route GET /api/users/register
//@access Private
const CurrentUser = asyncHandler(async(req, res) => {
    res.status(200).json({ message : "Current user" });
});

module.exports = { registerUser, loginUser, CurrentUser };