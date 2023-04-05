import dayjs from 'dayjs'
import React from 'react'

export default function Day({ day, rowIdx }) {
function getCurrentDayClass() {
  return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? "text-white rounded-full w-7 bg-[#61DAFB]" : ""
}

  return (
    <div className='border border-gray-200 flex flex-col'>
      <header className='flex flex-col items-center'>
        {rowIdx === 0 && (
          <p className='text-sm mt-1'>{day.format('ddd').toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
          {day.format('DD')}
        </p>
      </header>
    </div>
  )
}
