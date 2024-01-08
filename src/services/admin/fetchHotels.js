import { BASE_URL } from "../api-config";

// TODO: add pagination
const fetchHotels = async (auth) => {
  return fetch(BASE_URL + `/api/hotels`, {
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else throw new Error("Unexpected response code");
    })
    .then((data) => {
      return {
        status: "success",
        data: transformData(data),
      };
    })
    .catch((error) => {
      console.error(error);
      return { status: "error" };
    });
};

const getHotelInfoById = async (id) => {
  return fetch(BASE_URL + `/api/hotels/${id}`)
    .then((response) => {
      if (response.status === 200) return response.json();
      else throw new Error("Unexpected response code");
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
      return { status: "error" };
    });
};

export { fetchHotels, getHotelInfoById };

const transformData = (data) => {
  return data.map((item) => ({
    id: item.id,
    hotel: item.name,
    owner: item.owner,
    rooms: item.rooms,
    starRating: item.starRating,
    creationDate: item.creationDate,
    modificationDate: item.modificationDate,
  }));
};
