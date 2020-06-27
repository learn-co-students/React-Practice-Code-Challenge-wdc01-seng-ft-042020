import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.fourSushis.map(sushi => {
            return < Sushi
            sushi={sushi}
            eatSushi={props.eatSushi}
            menu={props.fourSushis}
            table={props.table}
            />
          })
        }
        <MoreButton newSushis={props.newSushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer