/* React */
import React, { Fragment } from 'react';

/* Components */
import StoryLine from '../../components/StoryLine';
import Members from '../../components/Members';

/* UI-Kit */
import { TitleH1 } from '../../ui-kit/typography';


const About = () => (
    <Fragment>
        <TitleH1 text={'Биография'} />
        <StoryLine />
        <Members />
    </Fragment>
);

export default About;