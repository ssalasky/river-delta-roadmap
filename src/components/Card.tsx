import {FeatureStatuses} from '@/types/Feature';

interface CardProps {
  feature: string
  description: string
  status: FeatureStatuses
}

const Card = ({ feature, description, status }: CardProps) => {

  const getStatus = (status: FeatureStatuses) => {
    switch (status) {
      case FeatureStatuses.Planned:
        return <div className="badge badge-outline badge-info">Planned</div>
      case FeatureStatuses.Building:
        return <div className="badge badge-outline badge-accent">Building</div>
      case FeatureStatuses.Testing:
        return <div className="badge badge-outline badge-primary">Testing</div>
      case FeatureStatuses.Shipped:
        return <div className="badge badge-outline badge-warning">Shipped</div>
      case FeatureStatuses.Released:
        return <div className="badge badge-outline badge-success">Released</div>
      default:
        return null;
    }
  }

  return (
    <div className="card bg-neutral w-96 shadow-sm">
      <div className="card-body">
        <div className="flex justify-between">
        <h2 className="card-title">{feature}</h2>
          <span className="justify-end">{getStatus(status)}</span>
        </div>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card;