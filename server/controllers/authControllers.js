const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { findByIdAndUpdate } = require("../models/userModel");

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_USER_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


const get_register = async (req, res) =>{
    res.send("Hello from the register page !!");
}


const post_register = async (req, res) =>{
   
    const { name, email, password, cPassword } = req.body;

    try{
        const isEmail = await userModel.findOne({email : email});

        if(!isEmail){
          
            if(password === cPassword){
               
               
                const salt = bcrypt.genSaltSync();
                
                const hashedPassword = bcrypt.hashSync(password, salt);
                
                const registerUser = await userModel.create({
                    name : name,
                    email : email,
                    password : hashedPassword, 
                    cPassword : hashedPassword,
                });
                
                if(!registerUser){
                    console.log("User not registered")
                   return res.json({msg : "User not registered , Something wents wrong !!"});
                }
                else{
                    return res.status(200).json({user : registerUser, msg : "User Created Successfully !!"});
                }

            }
            else{
                console.log("Password does not matched !!");
                return res.json({msg : "Password does not matched !!"});
            }
            
        }
        else{
            console.log("Email already exists !!");
            return res.json({msg : "Email already exists !!"});
        }

    }
    catch(error){
        console.log(error.message);
        res.status(400).json({msg : error.message});
    }
    
}


const get_login = async (req, res) =>{
    res.send("Hello from the login page !!");
}


const post_login = async (req, res) =>{

    const { email , password } = req.body;

    try{
        const isEmailMatched = await userModel.findOne({email : email});

        if(isEmailMatched){

            const isPasswordMatched = await bcrypt.compareSync(password, isEmailMatched.password);

            if(isPasswordMatched){
                
                const token = jwt.sign({_id : isEmailMatched._id}, process.env.SECRET_KEY);

                if(token){
                    res.status(200).json({msg : "Login Successfull !!", user : isEmailMatched, token : token});
                }
                else{
                    res.json({msg : "token, not generated, please login first !!"});
                }
            }
            else{
                res.json({msg : "Password does not matched"});
            }

        }
        else{
            res.json({msg : "Email not found !!"});
        }

    }
    catch(error){
        res.json({msg : error.message});
    }
    
}


const get_all_users = async(req, res) =>{

    try{
        const users = await userModel.find({});

        if(users){
            res.status(200).json({users : users});
        }
        else{
            res.json({msg : "Users not found"});
        }


    }catch(error){
        res.json({msg : error.message});
    }
}


const get_user = async (req, res)=>{
    const id = req.params.id;

    try{
        const user = await userModel.findById(id);

        if(user){
            res.status(200).json({user : user});
        }
        else{
            res.json({msg : "user not found"});
        }

    }catch(error){
        res.json({msg : error.message});
    }
}


const update_user = async ( req, res )=>{

    const { name, email, password } = req.body;

    try{

        const updateUser = await userModel.findOneAndUpdate(email, {
            name : name,
            email : email,
            password : bcrypt.hashSync(password, bcrypt.genSaltSync()),
            cPassword: bcrypt.hashSync(password, bcrypt.genSaltSync()),
        })

        if(updateUser){
            res.status(200).json({msg : "Update Successfull!!", user : updateUser});
        }
        else{
            res.json({msg : "user not updated"});
        }
    }
    catch(error){
        res.json({msg : error.message});
    }
}


const delete_user = async (req, res) =>{

    const id = req.params.id;

    try{
        const deleteUser = await userModel.findByIdAndDelete(id);

        if(deleteUser){
            res.status(200).json({msg : "user deleted successfully !!", user : deleteUser});
        }
        else{
            res.json({msg : "user not deleted !!"});
        }

    }
    catch(error){
        res.json({msg : error.message});
    }
}


const verify_user = async (req, res) =>{
    try {

        if (req.body.token) {
            const token = req.body.token;

            const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

            if (verifyToken) {
                res.status(200).json({ msg: "User is verified", isAuth: true });
            }
            else {
                res.json({ msg: "Login first !!", isAuth: false })
            }

        }
        else {
            res.json({ msg: "Token not found" });
        }
    }
    catch (error) {
        res.json({ msg: error.message, isAuth: false });
    }
}

const active_user = async (req, res) =>{

    try{
       const token = req.body.token;

       const user =  jwt.verify(token, process.env.SECRET_KEY);

       if(user){

           const activeUser = await userModel.findById(user._id);

           if(activeUser){
               res.status(200).json({user : activeUser})
           }
           else{
              res.json({msg : "Please login"});
           }
           
       }
       else{
        res.json({msg : "Please login"});
       }

    }catch(error){
        console.log(error.message);
        res.json({msg : "Please login"})
    }
}


const update_profile_image =  async (req, res)=>{
   try{

    const file = req.files.profileImage;

    const userId = req.params.id;

    cloudinary.uploader.upload(file.tempFilePath, async (err, result) => {
        try{
            if(result){
                const updateUser = await userModel.findByIdAndUpdate(userId,
                    {
                        profileImage : result.url
                    })

                if(updateUser){
                   res.status(200).json({msg : "Profile Update successfully", user : updateUser})
                }
                else{
                    res.json({msg : "Something wents wrong"})
                }

            }
            else{
                res.json({msg : "Something wents wrong"});
            }

        }
        catch(error){
            res.json({msg : error.message})
        }
     })

   }
   catch(error){
    console.log(error.message);
    res.json({msg : error.message})
   }
}

module.exports = { 
    get_login,
    get_register, 
    post_login, 
    post_register,
    get_all_users,
    get_user,
    update_user,
    delete_user,
    verify_user,
    active_user,
    update_profile_image
};