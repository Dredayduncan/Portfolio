import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';

function HomeCards(props){
    const {icon, value, label} = props;
    const cardStyle = {
        "background": "#292B2E"
    }

    const rightArrowStyle = {
      "color": "#ffffff",
      "padding-top": "60%",
      "font-size": "12px"
    }

    const rightArrow = <FontAwesomeIcon icon={faAngleRight} style={rightArrowStyle} />;

    return <div className="shadow row col-md-3 rounded" style={cardStyle}>
    <div className="d-flex">
      <div className="col-md-4 homeCardIcon">
        <img src={icon} className="img-fluid" alt="..."></img>
      </div>
      <div className="col-md-6">
        <div className="card-body align-middle">
          <h5 className="card-title orangeText">{value}</h5>
          <p className="card-text">{label}</p>
        </div>
      </div>
      <div className="col-md-2">
        {rightArrow}
      </div>
    </div>
  </div>
}

export default HomeCards;