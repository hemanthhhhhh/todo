import React from 'react'
import AddTask from '../AddTask'
import TaskList from '../TaskList'
import Cards from '../Cards'

const Home = () => {
  return (
    <>
      <div className='min-h-screen bg-gray-100 p-4'>
        <div className='max-w-3xl mx-auto bg-white shadow-md rounded-md p-6'>
          <h1 className='text-2xl font-bold text-center mb-4 text-indigo-600'>To Do List</h1>
          <AddTask />
          <TaskList />
        </div>
        <Cards/>
      </div>
    </>
  )
}

export default Home
