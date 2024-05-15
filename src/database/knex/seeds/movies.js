exports.seed = async function(knex) {
  await knex('movies').del()
  await knex('movies').insert([
    {
      "title": "Shadows of Tomorrow",
      "description": "In a future where dreams are monitored and controlled by the government, a rebellious dreamer discovers a way to manipulate his own dreams, leading to a revolution against the oppressive regime that seeks to control the subconscious of its citizens."
    },
    {
      "title": "Echoes of the Void",
      "description": "After Earth becomes uninhabitable, a group of survivors on a distant space station uncover an ancient alien technology that could restore their planet. As they race against time, they must fend off rival factions who seek the technology for themselves."
    },
    {
      "title": "Whispers in the Mist",
      "description": "In a small coastal town shrouded in mist, a young woman with the ability to communicate with ghosts tries to solve a century-old mystery. As she delves deeper, she uncovers secrets that some in the town would do anything to keep hidden."
    },
    {
      "title": "Veil of Time",
      "description": "A historian discovers an ancient relic that allows her to witness history firsthand. As she becomes more entangled with the past, she must decide whether to preserve history or use her power to change it for what she believes is the better."
    },
    {
      "title": "Cipher of the Sun",
      "description": "In a world where sunlight can be harvested as energy, a brilliant young engineer uncovers a conspiracy that could monopolize sunlight forever. Teaming up with a group of rogue scientists, they embark on a dangerous mission to stop the conspiracy before it plunges the world into darkness."
    }
  ]);
};
