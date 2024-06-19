exports.seed = async function(knex) {
  await knex('users').del()
  await knex('users').insert([
    { 
      name: 'John Doe', 
      email: 'john@email.com', 
      password: '$2a$08$O.w9aYVZbRdqo5ccWigTsuXy5hKSrSZY9Gdxj03OzpDqrdUXJ7i8G',
      role: "admin"
    },
    {
      name: 'Jane Doe',
      email: 'jane@email.com',
      password: '$2a$08$O.w9aYVZbRdqo5ccWigTsuXy5hKSrSZY9Gdxj03OzpDqrdUXJ7i8G',
      role: "admin"
    }, 
    {
      name: 'John Smith',
      email: 'smith@email.com',
      password: '$2a$08$O.w9aYVZbRdqo5ccWigTsuXy5hKSrSZY9Gdxj03OzpDqrdUXJ7i8G',
      role: "user"
    },
  ]);
};
