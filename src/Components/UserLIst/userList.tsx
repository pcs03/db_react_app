import React from 'react'
import User from '../User/User'

interface User {
  id: number
  name: string
  age: number
}

interface Props {
  users: User[]
}

const UserList: React.FC<Props> = ({ users }) => {
  return (
    <div className='user-list'>
      {users.map(user => (
        <User key={user.id} name={user.name} age={user.age}/>
      ))}
    </div>
  )
}

export default UserList;
