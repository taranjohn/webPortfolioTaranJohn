import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { 
  faDatabase, 
  faGem, 
  faCode, 
  faLaptopCode, 
  faRocket,
  faCloud, 
  faChartBar} from '@fortawesome/free-solid-svg-icons'

library.add(fab, 
  faDatabase, 
  faGem, 
  faCode, 
  faLaptopCode,
  faRocket,
  faCloud,
  faChartBar,
  )

function Service(props){
  return (
    <div className="mi-service">
      <span className="mi-service-icon">
        <FontAwesomeIcon icon={props.content.icon} />
      </span>
      <h5>{props.content.title}
        <h6>{props.content.experience}</h6> 
      </h5> 
      <p>{props.content.details}</p>
    </div>
  )
}

export default Service;
