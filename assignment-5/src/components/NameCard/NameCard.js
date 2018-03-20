import React from 'react';
import Proptypes from 'prop-types';
import style from './NameCard.css';

const NameCard = ({ name, email, telephone, imageUrl}) => {

    return(
        <div className={`${style.cardContainer}`}>
            <div style={{ backgroundImage: `url(${imageUrl})` }} className={style.avatar}></div>;
            <div className={`${style.name} `}>Name: {name}</div>
            <div className={`${style.email} `}>Email: {email}</div>
            <div className={`${style.telephone}`}>Telephone: {telephone}</div>
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