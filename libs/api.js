const API_END_POINT = import.meta.env.VITE_API_END_POINT;
const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const request = async (url) => {
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

const imgRequest = async () => {
  try {
    const res = await fetch('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    });
    if (res.ok) {
      const { urls } = await res.json();
      return urls;
    }
  } catch (e) {
    console.log(e);
  }
};

const postMessage = async (post) => {
  try {
    const res = await fetch(`${API_END_POINT}post`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    });
    if (res.ok) {
      const { data } = await res.json();
      return data;
    }
  } catch (e) {
    console.log(e);
  }
};

export { request, imgRequest, postMessage };
