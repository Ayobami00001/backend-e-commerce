const userModel = require('../model/user.model');



const register = async (req ,res) => {
    console.log(req.body)
    const { name,mail,pass} = req.body

    
    try {
        
        const user = await userModel.findOne({email: mail});
        if (user){
            return res.status(400).json({status: "user" , message: "user already exist"})
        }
        const newUser = new userModel({
            userName:name,
            email:mail,
            password:pass            
        });
        await newUser.save();

        console.log("user registered successfully" , newUser)
        return res.status(201).json({status: "success" , message: "user registered successfully"});

    } catch (err) {
        console.log("Error checking or registering user", err);
        return res.status(500).json({message: "Error checking or registering", error:err})
    }

}




    const login = async (req, res) => {
        console.log("Logging in user...", req.body);
    
        const { mail, pass } = req.body;
    
        try {
        const user = await userModel.findOne({ email: mail }); 
        if (!user) {
            return res.status(404).json({status: "email", message: "User not found" });
        }
    
        if (user.password !== pass) {
            return res.status(401).json({status: "incorrect", message: "Incorrect password" });
        }else{
            console.log("User logged in successfully:", user);
            return res.status(200).json({ status: "success", message: "Login successful", user });
        }
    

    
        } catch (err) {
        console.error("Login error:", err);
        return res.status(500).json({ message: "Login failed", error: err });
        }
    };



const getUserByEmail = async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.params.mail });
        if (!user) {
            return res.status(404).json({ status: "error", message: "User not found" });
        }
        res.status(200).json({ status: "success", 
            user: {
                name: user.userName,
                profileImage: user.profileImage || ""
            } });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};








module.exports ={register , login , getUserByEmail} 