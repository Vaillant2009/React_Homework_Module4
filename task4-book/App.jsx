import React, { Component } from "react";
import "./App.css";

class BookInfo extends Component {
  render() {
    return (
      <div className="container">
        <h1>Гаррі Поттер і філософський камінь</h1>
        <img
          className="cover"
          src="https://covers.openlibrary.org/b/id/7984916-L.jpg"
          alt="Обкладинка книги"
        />
        <h2>Інформація про книгу</h2>
        <p><b>Автор:</b> Джоан Роулінг</p>
        <p><b>Жанр:</b> Фентезі, пригоди</p>
        <p><b>Кількість сторінок:</b> 223</p>
        <p><b>Рік видання:</b> 1997</p>
        <h2>Опис книги</h2>
        <p>
          Гаррі Поттер — хлопчик, який дізнається, що він чарівник.
          Він вступає до школи магії Гоґвортс, де знаходить друзів
          та потрапляє у неймовірні пригоди.
        </p>
        <h2>Відгуки читачів</h2>
        <div className="review">
          <h3>Олександр</h3>
          <p>Цікава книга із захопливим сюжетом!</p>
        </div>
        <div className="review">
          <h3>Марія</h3>
          <p>Дуже сподобався магічний світ та персонажі.</p>
        </div>
        <div className="review">
          <h3>Андрій</h3>
          <p>Чудова історія про дружбу та пригоди.</p>
        </div>
      </div>
    );
  }
}

export default class App extends Component {
  render() {
    return <BookInfo />;
  }
}
