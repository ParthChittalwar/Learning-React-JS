import React from 'react'

export const DataContext = React.createContext()

const UserContext = ({children}) => {

const data = {
    name: "Parth",
    age: 21,
    city:"Nagpur",
    work:"Web Developer"
}

  return (
    <div>
      <DataContext.Provider value = {data}>
        {children}
      </DataContext.Provider>
    </div>
  )
}

export default UserContext
