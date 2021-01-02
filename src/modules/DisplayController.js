class DisplayController {
  constructor() {
    this.appDiv = document.getElementById('app');
    this.createContainer();
    this.createWeatherContainer();
    this.updateTempText();
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

  updateTempText() {
    this.tempArea = document.createElement('div');
    this.weatherAppContainer.appendChild(this.tempArea);
    this.tempArea.classList.add('weather-temp');
    this.tempArea.innerText = '39';
    this.testarea = document.createElement('div');
    this.weatherAppContainer.appendChild(this.testarea);
    this.testarea.classList.add('other-test');
    this.testarea.innerText = 'Richardson';
  }
}

export default DisplayController;
