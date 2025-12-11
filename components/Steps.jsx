import React from 'react'

const Steps = ({ step1, step2, step3 }) => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex items-center">
        <div className="rounded-full h-5 w-5 bg-indigo-500 dark:bg-emerald-400 flex items-center justify-center">
          <span className="text-white text-sm font-bold">1</span>
        </div>
        <h5 className="text-xs lg:text-sm ml-2 font-light">{step1}</h5>
      </div>
      <div className="flex items-center">
        <div className="rounded-full h-5 w-5 bg-indigo-500 dark:bg-emerald-400 flex items-center justify-center">
          <span className="text-white text-sm font-bold">2</span>
        </div>
        <h5 className="text-xs lg:text-sm ml-2 font-light">{step2}</h5>
      </div>
      <div className="flex items-center">
        <div className="rounded-full h-5 w-5 bg-indigo-500 dark:bg-emerald-400 flex items-center justify-center">
          <span className="text-white text-sm font-bold">3</span>
        </div>
        <h5 className="text-xs lg:text-sm ml-2 font-light">{step3}</h5>
      </div>
    </div>
  )
}

export default Steps
