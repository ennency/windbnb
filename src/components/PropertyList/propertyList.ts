import { PropertyType } from '../Property';
import { shuffle } from 'lodash';
import data from '../PropertyList/data';

export type PropertyListType = {
  title: string; 
  isSuperHost?: boolean;
  description?: string;
  ratingNumber?: number
};

export const fetchProperty = (): Promise<PropertyType> => {
  const [property] = shuffle(data);
  return Promise.resolve(property);
};