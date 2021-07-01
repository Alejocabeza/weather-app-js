'use strict'

import { Weather } from './weather';
import {UI} from './ui';
import {Store} from './store';

const store = new Store();
const { city, countryCode } = store.getLocationData();
const ui = new UI();
const weather = new Weather(city, countryCode);

async function fetchWeather(){
  const data = await weather.getweather();
  ui.render(data);
}

document.getElementById('w-change-btn').addEventListener('click', (e)=>{
  const city = document.getElementById('city').value;
  const countryCode = document.getElementById('contryCode').value;
  weather.changeLocation(city, countryCode);
  store.setLocationData(city, countryCode);
  fetchWeather();
  e.preventDefault();
})

document.addEventListener('DOMContentLoaded', fetchWeather)
