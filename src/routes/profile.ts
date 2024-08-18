import {
    CreateProfileSchema,
    CreateProfile
} from "../controllers/profile";
import express from "express"
const router = express.Router()

router.post("/create", CreateProfileSchema, CreateProfile)

export default router