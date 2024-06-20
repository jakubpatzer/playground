"use client";

import React, { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
}

const Users = ({ users }: { users: User[] }) => {
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, users]);

  return (
    <div>
      <input
        className="text-black mb-10 px-1 rounded-sm placeholder-red-500"
        type="text"
        placeholder="Find user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => (
          <p className="text-center py-1" key={user.id}>
            {user.name}
          </p>
        ))
      ) : (
        <p className="text-center">No users found</p>
      )}
    </div>
  );
};

export default Users;
