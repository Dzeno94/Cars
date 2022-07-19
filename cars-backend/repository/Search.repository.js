const connection = require('../database/connection');



const searchCars = (filter) => {

    let query = `SELECT car.id,car.name,car.description,car.year,car.fuel,car.price,
        car.milage,car.mark,car.model,car.category_id,car.user_id,car_image.image
    FROM car LEFT JOIN car_image ON car.id=car_image.carId WHERE 1=1 `;

    if (filter.carName) {    

        query = query + `AND upper(name) LIKE '%${filter.carName.toUpperCase()}%'`;


    }

    if (filter.categoryId) {       

        query = query + `AND category_id=${filter.categoryId}`;

    }
    query +=' GROUP BY car.id';
  
     
    return new Promise((resolve, reject) => {


        connection.query(query, (err, result) => {
            if (err) {
                console.log("search cars error",err);
                return reject(err);}
            resolve(result);
            console.log('Rezultat querya je', result);
        });

    });
}


module.exports = {
    searchCars,
};