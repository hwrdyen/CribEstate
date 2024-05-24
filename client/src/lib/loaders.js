import apiRequest from "./apiRequest";

export const singelPageLoader = async ({ request, params }) => {
  const res = await apiRequest("/posts/" + params.id);
  return res.data;
};
