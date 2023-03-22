import Product from "../models/product";
import Joi from "joi";

const productSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    desc: Joi.string().required(),
    status: Joi.boolean().required(),
    quantity: Joi.number().required(),
});

export const create = async (req, res) => {
    try {
        const{error} = productSchema.validate(req.body);
        if (error) {
            res.json({
                message: error.details[0].message,
            })
        }
        const product = await Product.create(req.body);
        return res.status(201).json({
            message: "them thanh cong", product
        })
    } catch (error) {

        return res.status(400).json({
            message : error
        })
    }
};
export const getAll = async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(201).json(
            products
        );
    } catch (error) {
        return res.status(400).json({
            message : error
        })
    }
};  
export const get = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        return res.status(201).json(
            product
        );
    } catch (error) {
        return res.status(400).json({
            message : error
        })
    }
};
export const update = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.status(201).json({
            message : "Update thanh cong",
            product,    
        });
    } catch (error) {
        return res.status(400).json({
            message : error
        })
    }
};
export const remove = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.status(201).json({
            message : "Xoa thanh cong",
            product,    
        });
    } catch (error) {
        return res.status(400).json({
            message : error
        })
    }
};