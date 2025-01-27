import { Meal, Menu } from "../models/menu.model.js"
import { upload_on_cloudinary } from "../utils/cloudinary.utils.js";


const addmenuItem = async (req,res) => {
    const user = req.adminUser
    const {name, price, size} = req.body
    const filebuffer = req.file ? req.file.buffer : null; // Assuming file is available in req.file.buffer

    if (!name || !price ) {
        return res.status(400).send({error:"name , price or other details not received from req.body"})
    }

    if (!filebuffer) {
        return res.status(400).json({error:"error receiveing image"})
    }

    const uploaded_url  = await upload_on_cloudinary(filebuffer)

    const newMenu = new Menu()
    newMenu.name = name
    newMenu.price = price
    newMenu.image = uploaded_url
    if (size) newMenu.size = size

    await newMenu.save()

    if (!newMenu) {
        return res.status(400).send({error:"error while creating menu item"})
    }
    return res.status(200).send({success:"menu item created successfully", newMenu})
}

const addmealplan =async (req,res) => {
    const {name, items, price} = req.body
    const filebuffer = req.file ? req.file.buffer : null

    if (!name || !price || !items ) {
        return res.status(400).send({error:"name , price or other details not received from req.body"})
    }

    if (!filebuffer) {
        return res.status(400).json({error:"error receiveing image"})
    }

    const uploaded_url  = await upload_on_cloudinary(filebuffer)

    const newMeal = new Meal()
    newMeal.name= name
    newMeal.price= price
    newMeal.items = items
    newMeal.image = uploaded_url

    await newMeal.save()

    if (!newMeal) {
        return res.status(400).send({error:"error while creating new mal plan"})
    }

    return res.status(200).send({success:"meal plan created successfully", createdPlan:newMeal})
}

export {addmenuItem, addmealplan}