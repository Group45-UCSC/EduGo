import React from 'react'
import MainLayout from "../../components/layout/MainLayout";

function ChildrenPage() {
  return (
    <div>
        <MainLayout>
            <div>
                <button className='bg-orange p-4 rounded-lg'>Add New childrern</button>
            </div>
        </MainLayout>
    </div>
  )
}

export default ChildrenPage