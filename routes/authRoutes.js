const express = require("express")
const router = express.Router()

const {registerUser, loginUser, getUserInfo, logout, updateProfile} = require("../controller/authController")

const auth = require("../middleware/authMiddleware")
const upload = require("../middleware/uploadMiddleware")
router.post("/register", registerUser)
router.post("/login", loginUser)
router.post("/logout", logout)
router.get("/getUser/:id",auth, getUserInfo)
router.put('/update', auth, upload.single('profile'), updateProfile)

router.get("/getbackend",(req, res)=>{
    res.send({
        message : "get api from backend"
    })

})
module.exports = router