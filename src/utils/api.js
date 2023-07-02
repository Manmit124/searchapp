import axios from "axios";
const BASE_URL = "https://www.googleapis.com/customsearch/v1";
const params = {
  // key: "AIzaSyBuuorHhIA2-xIfBjC6-55O14Sa-pleBkg",
key:"AIzaSyCG8rJoIlnaUb8tu_-HEU6n5yO1jjOeje0",
  // cx: "42a5bce7d82cc469",
cx:"20aa4e87b454943ce"
};
export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  })
  return data;
};
