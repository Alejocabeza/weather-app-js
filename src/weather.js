"use strict";

export class Weather {
  constructor(city, countryCode) {
    this.city = city;
    this.countryCode = contryCode;
    this.apiKey = "2162b9b02534035ed4c2687bee11ba9f";
  }

  async getweather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  changeLocation(city, countryCode) {
    this.city = city;
    this.countryCode = countryCode;
  }
}
