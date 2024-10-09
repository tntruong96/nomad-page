'use client';
import { useGetImageDetail } from '@/hooks/query/useGallery';
import { useParams } from 'next/navigation';
import React from 'react';

const ClientDetailGallery = () => {
  const { id } = useParams();
  const { data } = useGetImageDetail(id);
  console.log(data);

  return <div>ClientDetail</div>;
};

export default ClientDetailGallery;
