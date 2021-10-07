export const findUserData = (id: number) => {
  return fetch(`http://localhost:8000/user/${id}`)
    .then((data) => data.json())
    .then((userData) => userData);
};
