import React, { use } from 'react';

const UsersList = ({ usersPormise }) => {
  const users = use(usersPormise)
  return (
    <div>
      <h2>Users inside users {users.length} </h2>
    </div>
  );
};

export default UsersList;