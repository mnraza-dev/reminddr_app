import React from 'react'
import { Loader } from 'lucide-react'

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-40 w-full">
      <Loader className="animate-spin text-primary size-10" />
    </div>
  )
}

export default Loading