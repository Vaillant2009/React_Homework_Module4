import React from "react";
import "./App.css";

function CityInfo() {
  return (
    <div className="container">
      <h1>Вроцлав — місто мостів</h1>
      <p><b>Країна:</b> Польща</p>
      <p><b>Рік заснування:</b> приблизно 1000 рік</p>
      <p>
        Вроцлав — одне з найкрасивіших міст Польщі.
        Воно відоме своєю архітектурою, історичним
        центром, островами та численними мостами.
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

export default function App() {
  return <CityInfo />;
}
