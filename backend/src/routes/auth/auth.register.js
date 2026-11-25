import express from "express"

const router = express.Router();

router.post("/register", (req,res) => {
    const { name , email , password } = req.body;

    if (!name || !email || !password){
        return res.status(400).json({
            message : "All fields are required"
        });
    }

    return res.status(200).json({
        message : "Registration data received",
        name,
        email
    })
})

export default router;