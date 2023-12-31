const BASE_URL =
  "https://app-hotel-reservation-webapi-uae-dev-001.azurewebsites.net";

const formatDate = (date) => new Date(date).toISOString().split("T")[0];
const formatDateTime = (dateTime) => new Date(dateTime).toISOString();

export { BASE_URL, formatDate, formatDateTime };
