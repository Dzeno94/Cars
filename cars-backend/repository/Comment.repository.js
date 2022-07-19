const connection= require('../database/connection');


const addNewComment= (komment) => {
    
    const {comment,userId,carId,commentTime} =komment;
    const query = `INSERT INTO comments (comment,userId,carId,commentTime)  VALUES (?,?,?,?) `;

    return new Promise( (resolve,reject)=>{
        connection.query(query,[comment,userId,carId,commentTime],(err,result)=>{
            console.log(err);
            if(err) return reject(err);
            
           resolve(result);
           console.log(result);
        });
    });
  


}

const getComments=  (carId)=>{
      
      console.log('get comments carId',carId);
    return new Promise( (resolve,reject)=>{
        
        const query = `SELECT user.username,profile.image,comments.comment
        ,comments.commentTime FROM car LEFT JOIN comments ON car.id =comments.carId  LEFT JOIN user ON comments.userId = user.id LEFT JOIN profile ON
        user.id= profile.id 
         WHERE car.id=? `;
        
            connection.query(query,[carId],(err,result)=>{
                if(err) return reject(err);
                console.log('get comments reposi result je',result);
               resolve(result);
              
            });
      
    });
}    

module.exports={
    addNewComment,
    getComments
}