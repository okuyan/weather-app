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
  const dateTime = moment(dt_txt).tz("America/Los_Angeles").format("YYYY-MM-DD HH:mm");
  const iconSrc = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
  const description = weather[0].description;
  const tempMax = Math.floor(main.temp_max);
  const tempMin = Math.floor(main.temp_min);

  return (
    <li className="Item">
      <img src={iconSrc} />
      <div className="Item--section">
        <span className="Item--section-datetime">{dateTime}</span>
        <span>{description}</span>
        <span>{tempMax}/{tempMin}</span>
      </div>
    </li>
  );
};

export default Item;
