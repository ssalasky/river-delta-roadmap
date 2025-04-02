import Card from '@/components/Card';
import {FeatureObject} from '@/types/Feature';

interface DeployListProps {
  data: FeatureObject[]
}

const DeployList = ({ data }: DeployListProps) => {
  return (
    <div className="mt-3">
      <ul className="space-y-3">
        {data.map((item) => (
          <li key={item.id}>
            <Card feature={item.feature} description={item.description} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DeployList;