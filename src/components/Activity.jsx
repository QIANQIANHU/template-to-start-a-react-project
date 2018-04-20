import React from 'react';
import PropTypes from 'prop-types';

function Activity(props){
  return (
    <div>
      <h3>{props.GalleryHomes}</h3>
      <h3>{props.GalleryExperiences}</h3>
      <h3>{props.GalleryRestaurants}</h3>

    </div>


  );
}

Activity.propTypes = {
  GalleryHomes: PropTypes.string.isRequired,
  GalleryExperiences: PropTypes.string.isRequired,
  GalleryRestaurants: PropTypes.string

};

export default Activity;
