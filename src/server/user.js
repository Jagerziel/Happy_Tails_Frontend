import api from "./apiConfig.js";

const URL = api.USER;

export const getUsers = async () => {
  try {
    const response = await fetch(URL, {
      method: "GET",
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("failed here");
  }
};

export const createUser = async (input) => {
  await fetch(URL, {
    method: "POST",
    body: JSON.stringify(input),
  });
};

export const updateUser = async (input) => {
  await fetch(URL, {
    method: "PUT",
    body: JSON.stringify(input),
  });
};

export const deleteUser = async (id) => {
  await fetch(URL + `/${id}`, {
    method: "DELETE",
  });
};

// export function getUsers(setUserData) {
//   fetch(URL)
//     .then((resp) => resp.json())
//     .then((json) => setUserData(json))
//     .catch((error) => console.error(error));
// }

// // Deletes user
// export const deleteUser = async (id) => {
//     try {
//         const response = await api.delete(`user/${id}/`);
//         return response.data;
//     } catch (error) {
//         throw error;
//     }
// };
