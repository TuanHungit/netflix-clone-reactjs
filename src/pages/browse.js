import React from 'react';
import { useContent } from '../hooks';
import { selectionFilter } from '../utils';
import BrowseContainer from '../containers/browse';
export default function Browse() {
  const { films } = useContent('films');
  const { series } = useContent('series');
  const slides = selectionFilter({ films, series });
  return (
    <>
      <BrowseContainer slides={slides} />
    </>
  );
}
