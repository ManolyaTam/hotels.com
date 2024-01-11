import { BASE_URL } from "../../api-config";

// TODO: add pagination
const fetchCities = async (auth) => {
  return fetch(BASE_URL + `/api/cities`, {
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

export { fetchCities };

const transformData = (data) => {
  return data.map((item) => ({
    id: item.id,
    city: item.name,
    country: item.country,
    postOffice: item.postOffice,
    hotels: item.hotels,
    creationDate: item.creationDate,
    modificationDate: item.modificationDate,
  }));
};
