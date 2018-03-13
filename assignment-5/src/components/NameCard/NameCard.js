import React from 'react';
import Proptypes from 'prop-types';
import style from './NameCard.css';

const NameCard = ({ name, email, telephone, imageUrl, children}) => {

    return(
        <div className={`${style.cardContainer}`}>
        <div style={{ backgroundImage: `url(${imageUrl})` }} className={style.avatar}></div>;
        <div className={`${style.name} `}>{name}</div>
        <div className={`${style.email} `}>{email}</div>
        <div className={`${style.telephone}`}>{telephone}</div>
        </div>
    );
};

NameCard.proptypes = {
    name: Proptypes.string,
    email: Proptypes.string,
    telephone: Proptypes.string,
    imageUrl: Proptypes.string.isRequired
};


export default NameCard;