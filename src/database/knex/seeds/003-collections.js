exports.seed = async function (knex) {
  await knex('collections').del()
  await knex('collections').insert([
    {
      "movie_id": 1,
      "user_id": 1,
    },
    {
      "movie_id": 1,
      "user_id": 2,
    },
    {
      "movie_id": 1,
      "user_id": 3,
    },
    {
      "movie_id": 2,
      "user_id": 1,
    },
    {
      "movie_id": 2,
      "user_id": 2,
    },
    {
      "movie_id": 2,
      "user_id": 3,
    },
    {
      "movie_id": 3,
      "user_id": 1,
    },
    {
      "movie_id": 3,
      "user_id": 2,
    },
    {
      "movie_id": 3,
      "user_id": 3,
    },
    {
      "movie_id": 4,
      "user_id": 1,
    },
    {
      "movie_id": 4,
      "user_id": 2,
    },
    {
      "movie_id": 4,
      "user_id": 3,
    },
    {
      "movie_id": 5,
      "user_id": 1,
    },
    {
      "movie_id": 5,
      "user_id": 2,
    },
    {
      "movie_id": 5,
      "user_id": 3,
    }
  ]
);
};
