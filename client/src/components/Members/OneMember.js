/* React */
import React from 'react';

/* UI-Kit */
import { TitleH3, TitleH3Link } from '../../ui-kit/typography';


const OneMember = ({title, position, link}) => (
    <div>
        {link ? 
            <TitleH3Link main={true} text={title} link={link} />
            :
            <TitleH3 main={true} text={title} />
        }
        <TitleH3 main={false} text={position} />
    </div>
);

export default OneMember;