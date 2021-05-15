import axios from "../axiosConfig";

export const getUserOffers = async () => axios.get("/offers", null, { withCredentials: true });
export const createOffer = async(offerData) => axios.post(`/offers/${offerData.id}`, offerData);

