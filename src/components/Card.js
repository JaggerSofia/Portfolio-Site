import React from 'react';

import CardInfo from '../components/CardInfo';


function Card(props) {

    return(
        <div className="d-inline-block v-card">
            <img className="v-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
                <CardInfo 
                    title={props.item.title}
                    subTitle={props.item.subTitle}
                    description={props.item.description}
                    tech={props.item.tech}
                    link={props.item.link} 
                    repoFront={props.item.repoFront}
                />
        </div>
    );

}

export default Card;