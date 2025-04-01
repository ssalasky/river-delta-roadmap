'use client'

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
                <li key={item.id} className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
                  <div className="flex justify-between w-full">
                    <h2 className="font-semibold">{item.feature}</h2>
                    <span className="justify-end">{FeatureStatuses[item.status].toString()}</span>
                  </div>
                  <p>{item.description}</p>
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