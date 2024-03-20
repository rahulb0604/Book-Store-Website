const router =require("express").Router();
const bookModel=require("../models/bookModels");

router.post("/add",async(req,res)=>{
    try{
        const data=req.body;
        const newBook=new bookModel(data);
        await newBook.save().then(()=>{
            res.status(200).json({message:"Book Added Successfully"});
        })
    }
catch(error){
    console.log(error);
}
})

router.get("/getbooks",async(req,res)=>{
    let books;
    try{
        books=await bookModel.find();
        res.status(200).json({books});
    }
    catch(error){
        console.log(error);
    }
})

router.get("/getbooks/:bookname",async (req,res)=>{
    let book;
    try{
        book=await bookModel.findOne({bookname:req.params.bookname});
        res.status(200).json({book});
    }
    catch(error){
        console.log(error);
    }
})

router.put("/updateBook/:bookname",async(req,res)=>{
    // const bookname=req.params.bookname;
    // console.log(id);
    const{bookname, description, author, image, price}=req.body;
    let book;
    try{
        book=await bookModel.findOneAndUpdate({bookname:req.params.bookname},{
            bookname,
            description,
            author,
            image,
            price,
        })
        book=await book.save().then(()=> res.json({message:"Data Update Successfully"}));
    }
    catch(error){
        console.log(error);
    }
})

router.delete("/deleteBook/:bookname",async(req,res)=>{
    try{
        await bookModel.findOneAndDelete({bookname:req.params.bookname})
        .then(()=> res.status(201).json({message:"Book Deleted Successfully"}));
    }
    catch(error){
        console.log(error);
    }
})

module.exports=router;