import skip4yard from '../src/images/4-yarder-skip.jpg';
import skip12yard from '../src/images/14-yarder-skip.jpg';
import skip14yard from '../src/images/16-yarder-skip.jpg';
import skip20yard from '../src/images/20-yarder-skip.jpg';
import skip40yard from '../src/images/40-yarder-skip.jpg';

type SkipImageRange = {
  image: string;
  min: number;
  max?: number;
};

const skipImageRanges: SkipImageRange[] = [
  { image: skip4yard,  min: 4,  max: 4  },
  { image: skip12yard, min: 5,  max: 13 },
  { image: skip14yard, min: 14, max: 19 },
  { image: skip20yard, min: 20, max: 39 },
  { image: skip40yard, min: 40,         },
];

export const getSkipImage = (size: number): string => {
  for (const range of skipImageRanges) {
    const isInRange: boolean = size >= range.min && (range.max === undefined || size <= range.max);
    if (isInRange) return range.image;
  }

  return skip4yard;
};
