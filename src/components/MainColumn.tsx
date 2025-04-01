'use client'

import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import {appData} from '@/data/data';
import {FeatureObject, FeatureStatuses} from '@/types/Feature';
import {useState} from 'react';


const MainColumn = () => {
  const [data, setData] = useState<FeatureObject[]>(appData.Onboarding)
  const [section, setSection] = useState("Onboarding")

  const updateData = (section: keyof typeof appData) => {
    setData(appData[section])
    setSection(section)
  }

  return (
    <main className="lg:pl-72">
      <div className="xl:pr-96">
        <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
          <SectionHeader section={section}/>
          <button onClick={() => updateData("Onboarding")}>Onboarding</button>
          <button onClick={() => updateData("Profile")}>Profile</button>
          <div className="mt-3">
            <ul className="space-y-3">
              {data.map((item) => (
                <li key={item.id}>
                  <Card feature={item.feature} description={item.description} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainColumn