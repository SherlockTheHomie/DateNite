import React, { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import foodHolder from '../static/foodbg.jpg';
import drinkHolder from '../static/drinkbg.jpg';
import musicHolder from '../static/musicbg.jpg';



export default function Genny() {


    const [food, setFood] = useState({foodHolder});
    const [foodTitle, setFoodTitle]= useState('');
    const [drink, setDrink] = useState({drinkHolder});
    const [drinkTitle, setDrinkTitle]= useState('');
    const [music, setMusic] = useState({musicHolder});
    const [musicTitle, setMusicTitle]= useState('');

    // const foodPop = food.current.value;
    // const drinkPop = drink.current.value;
    // const musicPop = music.current.value;

const getApi = () => {
getFoodApi()
getDrinkApi()
getMusicapi()
};


const getFoodApi = () => {
	let requestUrl = "https://foodish-api.herokuapp.com/api/";
	fetch(requestUrl)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			setFood(data.image)
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
const dispBeverage = (randomeBevvy) => {
	console.log(randomeBevvy);
	setDrinkTitle(randomeBevvy.drinks[0].strDrink);
	setDrink(randomeBevvy.drinks[0].strDrinkThumb);
	console.log(randomeBevvy.drinks[0].strDrinkThumb);
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
    <Box justifyContent="center" sx={{ marginLeft: 0, marginRight: 0, padding: 0 }}>
<Grid container spacing={1} padding={1} margin={0} display="flex" justifyContent="center">
    <Grid item xs={12} md={12} display="flex" sx={{ justifyContent: 'center', alignItems: 'center'}}>
        <Button size="large" variant="outlined" onClick={getApi} sx={{ color: '#df07f1'}}>Generate</Button>
    </Grid>
    <Grid item xs={12} md={4} >
    <Card sx={{ maxWidth: 345, border: 4, borderRadius: 2, borderColor:'rgba(163,0,255,0.50)' }}>
      <CardMedia
        component="img"
        image={food}
        alt="green iguana"
        sx={{ 
            padding: 2,
            maxHeight: {xs:'auto', md:'auto'},
            maxWidth: '345',
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {foodTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} md={4}>
    <Card sx={{ maxWidth: 345, border: 4, borderRadius: 2, borderColor:'rgba(163,0,255,0.50)'}}>
      <CardMedia
        component="img"
        image={drink}
        alt="green iguana"
        sx={{ 
            padding: 2,
            maxHeight: {xs:'auto', md:'auto'},
            maxWidth: '345',
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {drinkTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} md={4}>
    <Card sx={{ maxWidth: 345, border: 4, borderRadius: 2, borderColor:'rgba(163,0,255,0.50)' }}>
      <CardMedia
        component="img"
        image={music}
        alt="green iguana"
        sx={{
            border: 1,
            padding: 2,
            maxHeight: {xs:'auto', md:'auto'},
            maxWidth: '345',
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {musicTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
</Grid>
</Box>

)

}