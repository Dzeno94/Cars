
const connection= require('../database/connection');

const fetchCar=  (car)=>{

    
    return new Promise( (resolve,reject)=>{
        const {id,name,description,year,fuel,price,model,mark,milage,category_id} =car;
        const queryCar = `SELECT car.*,car_image.image FROM car,car_image WHERE car_image.carId=car.id`;
        
            connection.query(queryCar,[id,name,description,year,fuel,price,model,mark,milage,category_id],(err,result)=>{
                if(err) return reject(err);
               resolve(result);
            });
      
    });
}    

const fetchUsersCar=  (userId)=>{

    
    return new Promise( (resolve,reject)=>{
        
        const queryCar = `SELECT car_image.image,car.name,car.price,car.id FROM car,user,car_image WHERE user.id=? and car.user_id=user.id and car_image.carId=car.id`;
        
            connection.query(queryCar,[userId],(err,result)=>{
                if(err) return reject(err);
               resolve(result);
            });
      
    });
} 


const getCarImages=  (carId)=>{
      
    
    return new Promise( (resolve,reject)=>{
           
        const queryCar = `SELECT * FROM car_image  WHERE   car_image.carId=? `;
       
            connection.query(queryCar,[carId],(err,result)=>{
                if(err) return reject(err);
               resolve(result);
            });

         
      
    });
}    

const getOneCar=  (carId)=>{
      
    
    return new Promise( (resolve,reject)=>{
           
        const queryCar = `SELECT car.*,user.username,car_image.image FROM car,user,car_image  WHERE  user.id=car.user_id and car.id=? `;
       
            connection.query(queryCar,[carId],(err,result)=>{
                if(err) return reject(err);
               resolve(result);
            });

         
      
    });
}    
const deleteCar=  (carId)=>{
      
    
    return new Promise( (resolve,reject)=>{
           
        const queryComment = `DELETE  FROM comments WHERE  comments.carId=?`;
        const queryCar = `DELETE  from car WHERE car.id=?`;
            connection.query(queryComment,[carId],(err,result)=>{
                if(err) return reject(err);
               resolve(result);
            });
            connection.query(queryCar,[carId],(err,result)=>{
                if(err) return reject(err);
               resolve(result);
            });
      
    });
}    
    

const registerCar=  (car)=>{

    
  return new Promise(async (resolve,reject)=>{
    try{
        const id = await saveCar(car);
        console.log('save car',id);
        
        resolve('Car successfully created')

    }catch(error){
        
     reject(error);
    }
});
  



}


const saveCar = (car) =>{
    const {name,description,year,fuel,price,milage,mark,model,category_id,user_id} =car;
    const query = `INSERT INTO car (name,description,year,fuel,price,milage,mark,model,category_id,user_id)  VALUES (?,?,?,?,?,?,?,?,?,?) `;
    return new Promise((resolve,reject)=>{
        connection.query(query,[name,description,year,fuel,price,milage,mark,model,category_id,user_id],(err,result)=>{
            if(err) return reject(err);
           resolve(result);
           
        });
    });
  
};
const saveCarImage = (carImg) =>{
    const {id,image} =carImg;
    console.log('CarIMG repositroy prije querya',carImg,id,image);
    const query = `INSERT INTO car_image (carId,image)  VALUES (?,?) `;
    return new Promise((resolve,reject)=>{
        connection.query(query,[id,image],(err,result)=>{
            if(err) return reject(err);
           resolve(result);
        });
    });
  
}

module.exports={
    fetchCar,
    registerCar,
    getOneCar,
    fetchUsersCar,
    deleteCar,
    saveCarImage,
    getCarImages
};