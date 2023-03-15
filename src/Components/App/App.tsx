import React from 'react'
import mock_database from '../../data/mock_database.json'
import UserList from '../UserList/userList'
import InputField from './../../Components/InputField/InputField'


function App () {
  return (
    <div className='app'>
      <InputField />
      <UserList 
      users={mock_database}/>
    </div>
  )
}

export default App
