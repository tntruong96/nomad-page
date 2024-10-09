'use server';

import { metadata } from '@/app/layout';
import { getPlaiceholder } from 'plaiceholder';

export const getBase64Blur = async (src: string) => {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer()),
  );
  const { ...placeholder } = await getPlaiceholder(buffer, { size: 10 });
  console.log(placeholder);
  return {
    ...placeholder,
    img: { src, ...metadata },
  };
};
