import React, { Component } from "react";
import "./App.css";

class CityInfo extends Component {
  render() {
    return (
      <div className="container">
        <h1>Вроцлав — місто мостів</h1>
        <p><b>Країна:</b> Польща</p>
        <p><b>Рік заснування:</b> приблизно 1000 рік</p>
        <p>
          Вроцлав — красиве польське місто,
          відоме своєю історією, архітектурою
          та великою кількістю мостів.
        </p>
        <h2>Визначні пам'ятки</h2>
        <div className="photos">
          <img src="https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=600" alt="Місто" />
          <img src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600" alt="Архітектура" />
          <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600" alt="Міські будівлі" />
        </div>
      </div>
    );
  }
}

export default class App extends Component {
  render() {
    return <CityInfo />;
  }
}
