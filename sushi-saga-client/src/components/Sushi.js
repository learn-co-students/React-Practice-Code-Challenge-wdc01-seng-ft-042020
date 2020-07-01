import React, { Fragment } from 'react'

const Sushi = (props) => {
    //props
  return (
    <div className="sushi">
      <div className="plate"
           onClick={(e) => props.eatSushi(props.info.id, props.info.price)}>
        { props.eaten.includes(props.info.id) ?
            null
          :
            <img src={props.info.img_url } width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.info.name} - ${props.info.price}
      </h4>
    </div>
  )
}

export default Sushi
