import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  return (
    <Fragment>
      <div className="belt">
        { props.displaySushi.map(s => <Sushi key={s.id} info={s} eatSushi={props.eatSushi} eaten={props.eaten}/>)}
        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
