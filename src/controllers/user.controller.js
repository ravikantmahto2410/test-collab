import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler";
import { User } from "../models/user.models.js";

const registerUser = asyncHandler( async (req, res) => {
    const {fullName, email, username, password } = req.body

    //validation
    if(
        [fullName, username, email, password].some((field) => field?.trim() === "")
    ){
        throw new ApiError(400, "All fields are required")
    }

    //checking if the user is already existed or not

    const existedUser = await User.findOne({
        $or: [{username},{email}]
    })

    if(existedUser){
        throw new ApiError(400, "User with this email or username already exists")
    }

    const user = await User.create({
        fullName,
        email,
        password,
        username: username.toLowerCase
    })
    
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registering a user")
    }

    return res
        .status(201)
        .json(new ApiResponse(200), createdUser,"User registered successfully")
} )

export {
    registerUser
}
