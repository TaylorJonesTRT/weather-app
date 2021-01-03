class DisplayController {
  constructor() {
    this.appDiv = document.getElementById('app');
    this.createContainer();
    this.createWeatherContainer();
    // this.updateTempText();
    this.createTempArea();
    this.createInfoArea();
  }

  createContainer() {
    this.containerDiv = document.createElement('div');
    this.containerDiv.id = 'container';
    this.appDiv.appendChild(this.containerDiv);
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
    this.tempArea.innerText = '39';
    this.weatherAppContainer.appendChild(this.tempArea);
  }

  createInfoArea() {
    this.infoArea = document.createElement('div');
    this.infoArea.classList.add('info-area');
    this.weatherAppContainer.appendChild(this.infoArea);
    this.nameDiv = document.createElement('div');
    this.nameDiv.classList.add('location');
    this.nameDiv.innerText = 'Richardson';
    this.feelsLikeDiv = document.createElement('div');
    this.feelsLikeDiv.classList.add('feels-like');
    this.feelsLikeDiv.innerText = 'Feels like: 39';
    this.humidityDiv = document.createElement('div');
    this.humidityDiv.classList.add('humidity');
    this.humidityDiv.innerText = 'Humidity: 45%';
    this.infoArea.appendChild(this.nameDiv);
    this.infoArea.appendChild(this.feelsLikeDiv);
    this.infoArea.appendChild(this.humidityDiv);
  }

  updateText() {
  }
}

export default DisplayController;
