exports.seed = async function (knex) {
  await knex('collections').del()
  await knex('collections').insert([
    {
      "movie_id": 1,
      "user_id": 1,
      "rating": 5
    },
    {
      "movie_id": 1,
      "user_id": 2,
      "rating": 3
    },
    {
      "movie_id": 1,
      "user_id": 3,
      "rating": 4
    },
    {
      "movie_id": 2,
      "user_id": 1,
      "rating": 2
    },
    {
      "movie_id": 2,
      "user_id": 2,
      "rating": 5
    },
    {
      "movie_id": 2,
      "user_id": 3,
      "rating": 1
    },
    {
      "movie_id": 3,
      "user_id": 1,
      "rating": 3
    },
    {
      "movie_id": 3,
      "user_id": 2,
      "rating": 4
    },
    {
      "movie_id": 3,
      "user_id": 3,
      "rating": 2
    },
    {
      "movie_id": 4,
      "user_id": 1,
      "rating": 0
    },
    {
      "movie_id": 4,
      "user_id": 2,
      "rating": 3
    },
    {
      "movie_id": 4,
      "user_id": 3,
      "rating": 5
    },
    {
      "movie_id": 5,
      "user_id": 1,
      "rating": 4
    },
    {
      "movie_id": 5,
      "user_id": 2,
      "rating": 1
    },
    {
      "movie_id": 5,
      "user_id": 3,
      "rating": 2
    }
  ]
);
};
