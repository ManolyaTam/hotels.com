const BASE_URL =
  "https://app-hotel-reservation-webapi-uae-dev-001.azurewebsites.net";

const formatDate = (date) => {
  if (!date) {
    return new Date().toISOString().split("T")[0];
  }
  date = parseInt(date, 10);
  return new Date(date).toISOString().split("T")[0];
};
const formatDateTime = (dateTime) => {
  dateTime = parseInt(dateTime, 10);
  new Date(dateTime).toISOString();
};

export { BASE_URL, formatDate, formatDateTime };
