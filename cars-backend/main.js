const express =require('express');
const app =express();
const cors = require('cors');
const PORT = 3000;



const {registerUser,loginUser,changeUserImg,getAllUsers,banUserPermanently} = require('./controller/User.controller');
const {registerNewCar,fetchAllCars,fetchOneCar,getUsersCars,deleteOneCar,addCarImg,fetchCarsImgs} = require('./controller/Car.controller');
const {getAllCategories,addNewCategory} = require('./controller/Category.controller');
const {searchCar} = require('./controller/Search.controller');
const {addComment,fetchComments} = require('./controller/Comment.controller');
const {addMessage,fetchMesseges,deleteOneMessage} = require('./controller/Message.controller');

app.use(express.json());
app.use(cors());


app.get('/categories',getAllCategories);

app.post('/user/register',registerUser);
app.post('/user/login',loginUser);
app.post('/message/send',addMessage);
app.get('/message/get',fetchMesseges);
app.get('/getAllUsers',getAllUsers);
app.put('/user/changeImg',changeUserImg);
app.put('/user/ban',banUserPermanently);
app.post('/car/add',registerNewCar);
app.post('/car/addCarImg',addCarImg);
app.get('/getAllCars',fetchAllCars);
app.get('/car/getImg',fetchCarsImgs);
app.get('/getCarPaige',fetchOneCar);
app.get('/getUsersCars',getUsersCars);
app.delete('/car/delete',deleteOneCar);
app.delete('/message/delete',deleteOneMessage);
app.get('/search',searchCar);
app.get('/comment/get',fetchComments);
app.post('/comment/add',addComment);
app.post('/add/category',addNewCategory);

app.listen(PORT,()=>{
    console.log(`App started on port:${PORT}`);
})