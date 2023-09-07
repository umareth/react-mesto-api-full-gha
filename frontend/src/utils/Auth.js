export const BASE_URL = 'https://api.shakh.eth.nomoredomainsicu.ru';

const _getResponseData = res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);

export const  register = (data) => {
    return fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password: data.password,
        email: data.email,
      }),
    }).then((res) => _getResponseData(res));
  }

export const login = (data) => {
    return fetch(`${BASE_URL}/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password: data.password,
        email: data.email,
      }),
    }).then((res) => _getResponseData(res));
  }

export const checkToken= (token) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => _getResponseData(res));
  }

