// src/components/GetSkip.tsx
import React, { useEffect, useState } from 'react';
import { API_URL, type SkipItem } from '../src/API';
import SelectSkip from './SelectSkipPage';

const GetSkip: React.FC = () => {
  const [skips, setSkips] = useState<SkipItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setSkips(data);
      } catch (error) {
        console.error('Failed to fetch:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  if (loading) return <p>Loading skip data...</p>;

  return <SelectSkip skips={skips} />;
};

export default GetSkip;
