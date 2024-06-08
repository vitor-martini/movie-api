exports.seed = async function (knex) {
  await knex('tags').del()
  await knex('tags').insert([
    {
      "collection_id": 1,
      "name": "Assistir mais tarde"
    },
    {
      "collection_id": 2,
      "name": "Família"
    },
    {
      "collection_id": 3,
      "name": "Ação"
    },
    {
      "collection_id": 4,
      "name": "Favoritos"
    },
    {
      "collection_id": 5,
      "name": "Comédia"
    },
    {
      "collection_id": 6,
      "name": "Suspense"
    },
    {
      "collection_id": 7,
      "name": "Documentários"
    },
    {
      "collection_id": 8,
      "name": "Animação"
    },
    {
      "collection_id": 9,
      "name": "Romance"
    },
    {
      "collection_id": 10,
      "name": "Drama"
    },
    {
      "collection_id": 11,
      "name": "Históricos"
    },
    {
      "collection_id": 1,
      "name": "Para assistir com amigos"
    },
    {
      "collection_id": 2,
      "name": "Recomendações"
    },
    {
      "collection_id": 3,
      "name": "Clássicos"
    },
    {
      "collection_id": 4,
      "name": "Sci-Fi"
    },
    {
      "collection_id": 5,
      "name": "Férias"
    },
    {
      "collection_id": 6,
      "name": "Halloween"
    },
    {
      "collection_id": 7,
      "name": "Natal"
    },
    {
      "collection_id": 8,
      "name": "Viagens"
    },
    {
      "collection_id": 9,
      "name": "Esportes"
    },
    {
      "collection_id": 10,
      "name": "Musicais"
    },
    {
      "collection_id": 11,
      "name": "Biografias"
    }
  ]);
};
