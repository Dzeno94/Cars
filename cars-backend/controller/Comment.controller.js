const {addNewComment,getComments} = require('../repository/Comment.repository');



const addComment = async(req,res)=>{
    try {
        const comment = req.body;
       
        const response = await addNewComment(comment);
         res.status(200).json(response);
    }catch(err){
        res.status(500).send(err);
    }
        
    
    };
    const fetchComments = async(req,res)=>{
        try {
            const carId = req.query.carId;
            console.log('Fetch carId controler je',carId);
            const response = await getComments(carId);
            console.log('Fetch response controler je',response);
             res.status(200).json(response);
        }catch(err){
            res.status(500).send(err);
        }
            
        
           
        
        };
    
    module.exports={
        addComment,
        fetchComments
    }
        