const API_END_POINT = import.meta.env.VITE_API_END_POINT;

export const request = async (url) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`);
    if (res.ok) {
      const { data } = await res.json();
      return data;
    }
  } catch (e) {
    console.log(e);
  }
};
