class DisplayController {
  constructor() {
    this.appDiv = document.getElementById('app');
    this.createContainer();
    this.createTopBar();
    this.createWeatherContainer();
    this.createTempArea();
    this.createInfoArea();
  }

  createContainer() {
    this.containerDiv = document.createElement('div');
    this.containerDiv.id = 'container';
    this.appDiv.appendChild(this.containerDiv);
  }

  createTopBar() {
    this.topBarDiv = document.createElement('div');
    this.topBarDiv.classList.add('search');
    this.unitOptionsDiv = document.createElement('div');
    this.unitOptionsDiv.classList.add('unit-options');
    this.fSpan = document.createElement('span');
    this.fSpan.classList.add('f-span');
    this.fSpan.innerText = 'F';
    this.cSpan = document.createElement('span');
    this.cSpan.classList.add('c-span');
    this.cSpan.innerText = 'C';
    this.search = document.createElement('input');
    this.search.classList.add('search-input');
    this.search.placeholder = 'Search Location';
    this.unitOptionsDiv.appendChild(this.fSpan);
    this.unitOptionsDiv.appendChild(this.cSpan);
    this.topBarDiv.appendChild(this.unitOptionsDiv);
    this.topBarDiv.appendChild(this.search);
    this.containerDiv.appendChild(this.topBarDiv);
  }

  createWeatherContainer() {
    this.weatherAppContainer = document.createElement('div');
    this.weatherAppContainer.classList.add('weather-app-container');
    this.containerDiv.appendChild(this.weatherAppContainer);
  }

  createTempArea() {
    this.tempArea = document.createElement('div');
    this.weatherAppContainer.appendChild(this.tempArea);
    this.tempArea.classList.add('weather-temp');
    this.weatherAppContainer.appendChild(this.tempArea);
  }

  createInfoArea() {
    this.infoArea = document.createElement('div');
    this.infoArea.classList.add('info-area');
    this.nameDiv = document.createElement('div');
    this.nameDiv.classList.add('location');
    this.descriptionDiv = document.createElement('div');
    this.descriptionDiv.classList.add('weather-desc');
    this.feelsLikeDiv = document.createElement('div');
    this.feelsLikeDiv.classList.add('feels-like');
    this.highLowDiv = document.createElement('div');
    this.highLowDiv.classList.add('high-low');
    this.humidityDiv = document.createElement('div');
    this.humidityDiv.classList.add('humidity');
    this.weatherAppContainer.appendChild(this.infoArea);
    this.infoArea.appendChild(this.nameDiv);
    this.infoArea.appendChild(this.descriptionDiv);
    this.infoArea.appendChild(this.feelsLikeDiv);
    this.infoArea.appendChild(this.highLowDiv);
    this.infoArea.appendChild(this.humidityDiv);
  }

  updateText(temp, name, desc, feelsLike, highLow, humidity) {
    this.tempArea.innerText = `${temp}°`;
    this.nameDiv.innerText = name;
    this.descriptionDiv.innerText = desc;
    this.feelsLikeDiv.innerText = `Feels like: ${feelsLike}°`;
    this.highLowDiv.innerText = `High: ${highLow[0]}° | Low: ${highLow[1]}°`;
    this.humidityDiv.innerText = `Humidity: ${humidity}%`;
  }
}

export default DisplayController;
