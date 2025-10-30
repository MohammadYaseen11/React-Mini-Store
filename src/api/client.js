import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export const getProducts = async (category, limit = 12, page = 1) => {
  const params = {};
  if (limit) params.limit = limit;
  // Fake Store API doesn't support real pagination; we'll slice client-side
  if (category && category !== "all") {
    const { data } = await api.get(
      `/products/category/${encodeURIComponent(category)}`
    );
    return data;
  }
  const { data } = await api.get("/products", { params });
  return data;
};

export const getCategories = async () => {
  const { data } = await api.get("/products/categories");
  return ["all", ...data];
};

export const getProduct = async (id) => {
  const { data } = await api.get(`/products/${id}`);
  return data;
};

export default api;
