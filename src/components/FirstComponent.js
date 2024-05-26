const fistComponent = () => {
  const person = [
    {
      name: "John",
      email: "john@example.com",
      age: 26,
    },
    {
      name: "Ronny",
      email: "ronny@example.com",
      age: 26,
    },
    {
      name: "Douglas",
      email: "douglas@example.com",
      age: 27,
    },
  ];

  return (
    <div>
      <h1>Exemplo</h1>
      {person.map((person, index) => (
        <p key={index}>
          Olá, meu nome é {person.name} e tenho {person.age} anos. Meu email é {person.email}.
        </p>
      ))}
    </div>
  );
};

export default fistComponent;
