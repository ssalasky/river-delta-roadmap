'use client'

import {ReactNode} from 'react';

const MainColumn = ({ children }: { children: ReactNode }) => {

  return (
    <main className="lg:pl-72">
      <div className="xl:pr-96">
        <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
          {children}
        </div>
      </div>
    </main>
  )
}

export default MainColumn