const Products=require('../model/product')


const producControllers={
    AddProduct: async(req, res)=>{
        try{
            const product = new Products({
                product_id: req.body.product_id,
                title: req.body.title,
                price: req.body.price,
                description: req.body.description,
                content: req.body.content,
                images: req.body.images,
                category: req.body.category,
                checked: req.body.checked,
                sold: req.body.sold
            })
            await product.save()
            res.json(product)
        }catch(err){
            return res.status(400).json({msg: 'sdskkajhdkajd'})
        }
    },
    getProducts: async(req, res)=>{
        try {
            const features = new APIfeatures(Products.find(), req.query)
            .filtering().sorting().paginating()
            const products = await features.query

            res.json({
                status:'success',
                result: products.length,
                products: products
            })
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createProducts: async(req, res)=>{
        try {
            const {product_id, title, price, description, content, images, category} = req.body;

            if(!images) return res.status(400).json({msg:"No image upload"})

            const product = await Products.findOne({product_id})
            if(product) res.status(400).json({msg:"This product already exsist."})

            const newProduct = new Products({
                product_id, title: title.toLowerCase(), price, description, content, images,category
            })

            await newProduct.save()
            res.json({msg: 'Created a product'})


        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteProducts: async(req,res)=>{
        try {
            await Products.findByIdAndDelete(req.params.id)
            res.json({msg: 'Delete a product'})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateProducts: async(req,res)=>{
        try {
            const {product_id, title, price, description, content, images,category} = req.body;
            if(!images) return res.status(400).json({msg:"No image upload"})

            await Products.findOneAndUpdate({_id:req.params.id}, {
                product_id, title: title.toLowerCase(), price, description, content, images,category
            })
            res.json({msg: 'Updated a product'})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = producControllers;