export default class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _getResponseData = res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);

  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      },//заголовки запроса
    }).then(this._getResponseData);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      },//заголовки запроса
    }).then(this._getResponseData);
  }

  setUserInfo(InputValue) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: InputValue.name,
        about: InputValue.about,
      }),
    }).then(this._getResponseData);
  }

  addCard(InputValue) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: InputValue.name,
        link: InputValue.link,
      }),
    }).then(this._getResponseData);
  }

  toggleLike(cardId, isLiked) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: isLiked ? "DELETE" : "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      },//заголовки запроса
    }).then(this._getResponseData);
  }

  removeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      },//заголовки запроса
    }).then(this._getResponseData);
  }

  setAvatar(link) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: link.avatar,
      }),
    }).then(this._getResponseData);
  }
}

export const api = new Api({
  baseUrl: "http://api.shakh.eth.nomoredomainsicu.ru",
});
