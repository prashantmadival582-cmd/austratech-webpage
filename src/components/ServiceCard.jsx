import { Link } from 'react-router-dom';
import AssetImage from './AssetImage';

const ServiceCard = ({ icon, title, description, link, image }) => {
  return (
    <div className="card">
      {image ? (
        <AssetImage image={image} className="service-card-image" />
      ) : (
        <div className="card-icon">{icon}</div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      {link && (
        <Link to={link} className="card-link">
          Learn More <span>→</span>
        </Link>
      )}
    </div>
  );
};

export default ServiceCard;
