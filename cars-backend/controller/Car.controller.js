const {registerCar,fetchCar,getOneCar,fetchUsersCar,deleteCar,saveCarImage,
    getCarImages} = require('../repository/Car.repository');


    const fetchCarsImgs = async(req,res)=>{
        try {
            const carId = req.query.carId;
            const response = await getCarImages(carId);
             res.status(200).json(response);
        }catch(err){
            res.status(500).send(err);
        }
            
        
           
        
        };

const addCarImg = async(req,res)=>{
    try {
        const carImg = req.body;
        const response = await saveCarImage(carImg);
        console.log('Slika Auta je dodana!',response);
         res.status(200).json(response);
    }catch(err){
        res.status(500).send(err);
    }
        
    
    };


const deleteOneCar = async(req,res)=>{
    try {
        const carid = req.query.carId;
        console.log("Delete car with id",carid);
        const response = await deleteCar(carid);
         res.status(200).json(response);
    }catch(err){
        res.status(500).send(err);
    }
        
    
       
    
    };




const getUsersCars = async(req,res)=>{
    try {
        const userId = req.query.userId;
        const response = await fetchUsersCar(userId);
         res.status(200).json(response);
    }catch(err){
        res.status(500).send(err);
    }
        
    
       
    
    };
const registerNewCar = async(req,res)=>{
try {
    const car = req.body;
    
    const response = await registerCar(car);
    console.log(response);
     res.status(200).json(response);
}catch(err){
    res.status(500).send(err);
}
    

};

const fetchAllCars = async(req,res)=>{
    try {
        const car = req.body;
        const response = await fetchCar(car);
         res.status(200).json(response);
    }catch(err){
        res.status(500).send(err);
    }
        
    
       
    
    };
    const fetchOneCar = async(req,res)=>{
        try {
            const carid = req.query.carid;
            console.log("Getting car with id",carid);
            const response = await getOneCar(carid);
             res.status(200).json(response);
        }catch(err){
            res.status(500).send(err);
        }
            
        
           
        
        };

module.exports={
    registerNewCar,
    fetchAllCars,
    fetchOneCar,
    getUsersCars,
    deleteOneCar,
    addCarImg,
    fetchCarsImgs
};