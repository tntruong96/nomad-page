import axios from 'axios';

const getImages = async () => {
  const { data } = await axios.get(
    `${process.env.UNSPLASH_LINK}/photos/page${1}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
  );

  return data;
};

export { getImages };
