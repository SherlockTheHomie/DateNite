import React, { useState, useRef, useEffect } from 'react';

// MUI 
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import foodHolder from '../static/foodbg.jpg';
import drinkHolder from '../static/drinkbg.jpg';
import musicHolder from '../static/musicbg.jpg';

// Local Storage
import dateNiteStorage from '../utils/dateNiteStorage';



export default function Genny({setSaveDate}) {


    const [food, setFood] = useState(foodHolder);
    const [foodTitle, setFoodTitle] = useState('');
    const [foodPrep, setFoodPrep] = useState('')
    const [drink, setDrink] = useState(drinkHolder);
    const [drinkTitle, setDrinkTitle] = useState('');
    const [drinkPrep, setDrinkPrep] = useState('')
    const [music, setMusic] = useState(musicHolder);
    const [musicTitle, setMusicTitle] = useState('');

    // const foodPop = food.current.value;
    // const drinkPop = drink.current.value;
    // const musicPop = music.current.value;

const getApi = () => {
getFoodApi()
getDrinkApi()
getMusicapi()
};

const dateName = useRef();


const onSaveClick=(dateData)=>{
  if (!dateName.value) {
    alert("please enter a name for this date");
  } else {
    let dateNite = {
      name: dateName.value,
      food: food.src,
      foodTitle: foodTitle.value,
      foodPrep: foodPrep.value,
      drink: drink.src,
      drinktitle: drinkTitle.value,
      drinkPrep: drinkPrep.value,
      music: music.value
    }
    dateNiteStorage.push(dateNite);
    localStorage.setItem("dates", JSON.stringify(dateNiteStorage));
  }
  setSaveDate(dateNite, dateNiteStorage)
}

// https://foodish-api.herokuapp.com/api/


const getFoodApi = () => {
	let requestUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
	fetch(requestUrl)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
      console.log(data)
			setFood(data.meals[0].strMealThumb)
      setFoodTitle(data.meals[0].strMeal)
      setFoodPrep(data.meals[0].strInstructions)
		});
}

const getDrinkApi = () => {
	let requestUrl = "https://thecocktaildb.com/api/json/v1/1/random.php/";
	fetch(requestUrl)
		.then(function (response) {
			return response.json();
		})
		.then(function (randBeverage) {
			dispBeverage(randBeverage);
		});
}
const dispBeverage = (randomBevvy) => {
	console.log(randomBevvy);
	setDrinkTitle(randomBevvy.drinks[0].strDrink);
	setDrink(randomBevvy.drinks[0].strDrinkThumb);
  setDrinkPrep(randomBevvy.drinks[0].strInstructions);
	console.log(randomBevvy.drinks[0].strDrinkThumb);
}

const getMusicapi = () => {
	let requestUrl = "https://binaryjazz.us/wp-json/genrenator/v1/genre/";
	
	fetch(requestUrl)
		.then(function (response) {
			return response.json();
			//console.log(requestUrl);
		})
		.then(function (data) {
			setMusicTitle(data);
});
}

return (
    <Box sx={{ marginLeft: 0, marginRight: 0, padding: 0 }}>
<Grid container spacing={2} display="flex" sx={{ margin: 0, padding: 0, justifyContent:"space-around", alignItems:"space-evenly"}}>
    <Grid item xs={12} md={12} display="flex" sx={{ justifyContent: 'center', alignItems: 'center'}}>
        <Button size="large" variant="outlined" onClick={getApi} sx={{ color: '#df07f1'}}>Generate</Button>
    </Grid>
    <Grid item xs={12} md={12} display="flex" sx={{ justifyContent: 'center', alignItems: 'center'}}>
        <Card sx={{ maxWidth: 500, border: 4, borderRadius: 2, borderColor:'rgba(163,0,255,0.50)'}}>
          <CardContent>
          <Typography sx={{ textAlign:"center"}}>
          Turn the lights down low, put some <Typography sx={{color:'yellow'}}>{musicTitle}</Typography> on the stereo to set the mood before you delve into an unforgettable evening
          while you and your date dine on <Typography sx={{color:'yellow'}}>{foodTitle}</Typography> and quench your thirst with <Typography sx={{color:'yellow'}}>{drinkTitle}.</Typography>
          </Typography>
          </CardContent>
          <CardActions>
           
          </CardActions>
        </Card>
    </Grid>
    <Grid item xs={12} md={12} display="flex" sx={{ justifyContent: 'center', alignItems: 'center'}}>
    <TextField label="Name this Date" variant="outlined" color="secondary" focused inputRef={dateName}></TextField>
            <Button onClick={() => onSaveClick}>Save this date</Button>
    </Grid>
    <Grid item xs={12} md={6} display="flex" sx={{ justifyContent:'right', alignItems:'flex-start'}} >
    <Card sx={{ maxWidth: 345, border: 4, borderRadius: 2, borderColor:'rgba(163,0,255,0.50)' }}>
      <CardMedia
        component="img"
        image={food}
        alt="The Dish"
        sx={{ 
            padding: 1,
            maxHeight: {xs:'auto', md:'auto'},
            maxWidth: '345',
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {foodTitle}
        </Typography>
        <Typography gutterBottom variant="body" component="div">
          {foodPrep}
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    <Grid item xs={12} md={6} display="flex" sx={{ justifyContent:'left', alignItems:'flex-start'}}>
    <Card sx={{ maxWidth: 345, border: 4, borderRadius: 2, borderColor:'rgba(163,0,255,0.50)'}}>
      <CardMedia
        component="img"
        image={drink}
        alt="The Drink"
        sx={{ 
            padding: 1,
            maxHeight: {xs:'auto', md:'auto'},
            maxWidth: '345',
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {drinkTitle}
        </Typography>
        <Typography gutterBottom variant="body" component="div">
          {drinkPrep}
        </Typography>

      </CardContent>
    </Card>
    </Grid>
</Grid>
</Box>

)

}