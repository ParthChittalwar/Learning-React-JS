import React from 'react'

const LocalStore = () => {
  localStorage.setItem('user', 'Parth Chittalwar')
  localStorage.setItem('age', '20')
  localStorage.setItem('address', 'Nagpur')
  localStorage.setItem('user2','Virat Kohli')
  localStorage.setItem('address2','London')
  localStorage.setItem('age2','37')


  const user = localStorage.getItem('user')
  const age = localStorage.getItem('age') 
  const user2 = localStorage.getItem('user2')
  const age2 = localStorage.getItem('age2')
  const address2 = localStorage.getItem('address2')

  localStorage.removeItem('address')
  const address = localStorage.getItem('address')

  console.log(user);
  console.log(age);
  console.log(address);
  console.log(user2);
  console.log(age2);
  console.log(address2);



  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{user}</h1>
        <h1 className="text-lg text-gray-600 mb-4">Age: {age}</h1>
        <hr className="border-t border-gray-900 my-4" />
        <h1 className="text-lg text-gray-600">{address}</h1>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{user2}</h1>
        <h1 className="text-lg text-gray-600 mb-4">Age: {age2}</h1>
        <h1 className="text-lg text-gray-600">{address2}</h1>
      </div>
    </div>
  )
}

export default LocalStore
