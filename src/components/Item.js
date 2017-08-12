import React from 'react';
import moment from 'moment-timezone';
import './Item.css';

const Item = (props) => {
  const {
    dt,
    dt_txt,
    weather,
    main,
  } = props.info;
  const dateTime = moment(dt_txt).tz("America/Los_Angeles").format();
  const iconSrc = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
  const description = weather[0].description;
  const tempMax = main.temp_max;
  const tempMin = main.temp_min;

  return (
    <li className="Item">
      <img src={iconSrc} />
      <span>{dateTime}</span>
      <span>{description}</span>
      <span>{tempMax}/{tempMin}</span>
    </li>
  );
};

export default Item;
