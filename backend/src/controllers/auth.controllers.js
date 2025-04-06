export const sigup = (req,res)=>{
    const {email,fullName,password,profilePic } = req.body
    try {
        //hash password
        
    } catch (error) {
        
    }
    res.send("signup route")
}
export const login = (req,res)=>{

}
export const logout = (req,res)=>{

}