const UserList = () => {
    const users = [
      { id: 1, name: "Sujith", age: 22 },
      { id: 2, name: "Lalitha", age: 21 },
      { id: 3, name: "Sreeja", age: 22 },
    ];
  
    return (
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
          </div>
        ))}
      </div>
    );
  };
  
  export default UserList;