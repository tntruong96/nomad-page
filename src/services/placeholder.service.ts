'use server';

import { getPlaiceholder } from 'plaiceholder';

export const getBase64Blur = async (src: string) => {
  let width: number = 0;
  let height: number = 0;
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer()),
  );
  const {
    metadata: { height: heightImg, width: widthImg },
    ...placeholder
  } = await getPlaiceholder(buffer, { size: 10 });
  if (heightImg > 1000) {
    width = widthImg * 0.5;
    height = heightImg * 0.5;
  } else {
    width = widthImg;
    height = heightImg;
  }

  return {
    ...placeholder,
    img: { src, width, height },
  };
};
