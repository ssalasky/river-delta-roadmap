interface CardProps {
  feature: string
  description: string
}

const Card = ({ feature, description }: CardProps) => {
  return (
    <div className="card bg-neutral w-96 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{feature}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card;