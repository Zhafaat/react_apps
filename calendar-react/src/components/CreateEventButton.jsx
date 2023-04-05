import React, { useContext } from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'
import GlobalContext from '../context/GlobalContext'

const CreateEventButton = () => {
    const { setShowEventModal } = useContext(GlobalContext)

  return (
    <button 
        className='border p-2 rounded-full flex items-centered shadow-md hover:shadow-2xl'
        onClick={() => setShowEventModal(true)}
    >
        <PlusIcon width={24} />
        <span className='pl-3 pr7'>Create</span>
    </button>
  )
}

export default CreateEventButton