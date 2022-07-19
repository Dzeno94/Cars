const connection= require('../database/connection');



const sendMessage = (fullMessage) =>{
    const {message,messageTime,fromUserId,toUserId} =fullMessage;
    console.log('puna poruka',fullMessage);
    const query = `INSERT INTO message (message,messageTime,fromUserId,toUserId)  VALUES (?,?,?,?) `;
    return new Promise((resolve,reject)=>{
        connection.query(query,[message,messageTime,fromUserId,toUserId],(err,result)=>{
            if(err) return reject(err);
           resolve(result);
           
        });
    });
  
};

const getMesseges=  (toUser)=>{
      
    console.log('id',toUser);
    return new Promise( (resolve,reject)=>{
           
        const query = `SELECT message.fromUserId,message.toUserId,message.id,message.message,message.messageTime,user.username,profile.image
         FROM message,user,profile  WHERE   message.toUserId=? and user.id=message.fromUserId and user.id=profile.id `;
       
            connection.query(query,[toUser],(err,result)=>{
                if(err) return reject(err);
               resolve(result);
               console.log(result);
            });

         
      
    });
}    
const deleteMessage=  (messageId)=>{
      
    
    return new Promise( (resolve,reject)=>{
           
        const query = `DELETE  FROM message WHERE  message.id=?`;
        
            connection.query(query,[messageId],(err,result)=>{
                if(err) return reject(err);
               resolve(result);
            });
           
      
    });
}    


module.exports={
    sendMessage,
    getMesseges,
    deleteMessage
};