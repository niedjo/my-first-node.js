const PostModel = require("../models/post.model")


// tous ca doit avoir un try catch
module.exports.getPost = async (req, res) => {
    const post = await PostModel.find()
    res.status(200).json(post)
}

module.exports.setPosts = async (req, res) => {
    !req.body.message && res.status(400).json({ message : "merci d'ajouter un message"})

    const post = await PostModel.create({
        message : req.body.message,
        author : req.body.author
    })

    res.status(200).json(post)
}

module.exports.editPost = async (req, res) => {
    // we get the id
    const post = await PostModel.findById(req.params.id)

    if (!post) res.status(400).json({ message : "Ce post n'existe pas"})
    
    const postUpdate = await PostModel.findByIdAndUpdate(
        post,
        req.body,
        {new : true}
    )
    res.status(200).json(postUpdate)
}

module.exports.delePost = async (req, res) => {
    // we get the id
    const post = await PostModel.findById(req.params.id)

    if (!post) res.status(400).json({ message : "Ce post n'existe pas"})
    
    await post.deleteOne()
    res.status(200).json(post)
}

module.exports.likePost = async (req, res) => {
    try {
        await PostModel.findByIdAndUpdate(
            req.params.id,
            {$addToSet : { likers : req.body.userId }},
            {new : true}
        ).then(data => res.status(200).send(data)) 
        
    } catch (error) {
        res.status(400).json(error)
        throw new Error("error : ", error.message);
    }
}

module.exports.disLikePost = async (req, res) => {
    try {
        await PostModel.findByIdAndUpdate(
            req.params.id,
            {$pull : { likers : req.body.userId }},
            {new : true}
        ).then(data => res.status(200).send(data)) 
        
    } catch (error) {
        res.status(400).json(error)
        throw new Error("error : ", error.message);
    }
}