const {sendMessage,getMesseges,deleteMessage} = require('../repository/Message.repository');

const addMessage = async(req,res)=>{
    try {
        const message = req.body;
        const response = await sendMessage(message);
        console.log('Poruka je dodana!',response);
         res.status(200).json(response);
    }catch(err){
        res.status(500).send(err);
    }
};
const fetchMesseges= async(req,res)=>{
    try {
        const toUserId = req.query.toUser;
        console.log('Fetch toUserId controler je',toUserId);
        const response = await getMesseges(toUserId);
        console.log('Fetch response  controler je',response);
         res.status(200).json(response);
    }catch(err){
        res.status(500).send(err);
    }
        
    
       
    
    };
    const deleteOneMessage = async(req,res)=>{
        try {
            const msgId = req.query.messageId;
            console.log("Delete message with id",msgId);
            const response = await deleteMessage(msgId);
             res.status(200).json(response);
        }catch(err){
            console.log(err);
            res.status(500).send(err);
        }
            
        
           
        
        };

    module.exports={
        addMessage,
        fetchMesseges,
        deleteOneMessage
    };