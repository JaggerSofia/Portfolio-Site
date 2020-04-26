import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <animated.div className="v-card-info justify-content-center" style={style}>
            <p className="v-card-title">{props.title}</p>
            <p className="v-card-sub-title">{props.subTitle}</p>
            <p className='v-card-sub-title' >{props.description}</p>
            <p className='v-card-sub-title'>{props.tech}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>
            <br />
            <a href={props.repoFront} target="_blank" rel="noopener noreferrer">GitHub</a>
        </animated.div>
    );

}

export default CardInfo;