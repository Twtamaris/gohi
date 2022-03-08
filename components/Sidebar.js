import React from 'react'
import SidebarRow from './SidebarRow'

function Sidebar() {
  return (
    <div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
        <SidebarRow title='Hostel Owner' />
        <SidebarRow title='Members' />
        <SidebarRow title='Staff' />
        
        

        
    </div>
  )
}

export default Sidebar