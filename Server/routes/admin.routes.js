import express from "express"
import { checkAdmin } from "../middleware/chekAdmin.midddleware.js"
import { addmealplan, addmenuItem } from "../controller/admin.controller.js"
import multer from "multer"


const adminRouter = express.Router()
const upload = multer({storage:multer.memoryStorage()})


adminRouter.route("/addmenu").post(checkAdmin, upload.single('image') ,addmenuItem)
adminRouter.route("/addmealplan").post(checkAdmin, upload.single('image'), addmealplan)

export {adminRouter}