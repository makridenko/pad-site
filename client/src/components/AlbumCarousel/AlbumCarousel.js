/* React */
import React, { Fragment } from 'react';

/* Styled */
import { TitleH1 } from '../../ui-kit/typography';

/* Components */
import { Carousel } from './Carousel';


const AlbumCarousel = () => (
    <Fragment>
        <TitleH1 text={'Альбомы'} />
        <Carousel />
    </Fragment>
);

export default AlbumCarousel;