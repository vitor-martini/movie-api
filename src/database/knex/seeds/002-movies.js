exports.seed = async function(knex) {
  await knex('movies').del()
  await knex('movies').insert([
    {
      "title": "Inception",
      "description": "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction: stealing valuable secrets from deep within the subconscious during the dream state when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible: inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse; their task is not to steal an idea but to plant one. If they succeed, it could be the perfect crime.",
      "created_by": 2
    },
    {
      "title": "The Matrix",
      "description": "Thomas Anderson, a computer programmer, is living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination. Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government. Morpheus awakens Neo to the real world, a ravaged wasteland where most of humanity have been captured by a race of machines that live off of the humans' body heat and electrochemical energy and who imprison their minds within an artificial reality known as the Matrix. As a rebel against the machines, Neo must return to the Matrix and confront the agents: super-powerful computer programs devoted to snuffing out Neo and the entire human rebellion.",
      "created_by": 2
    },
    {
      "title": "Blade Runner",
      "description": "In the smog-choked dystopian Los Angeles of 2019, Rick Deckard, an ex-cop, is a 'Blade Runner'. Blade Runners are tasked with hunting down and 'retiring' replicants: bioengineered beings created to serve in off-world colonies. Deckard is reluctantly brought back into action by his old boss, who needs him to hunt down a group of replicants who have escaped to Earth. As Deckard delves deeper into the investigation, he begins to question his own humanity and what it means to be human. The lines between man and machine blur as Deckard encounters Rachael, a replicant with implanted memories, who forces him to confront his own perceptions of reality and identity.",
      "created_by": 1
    },
    {
      "title": "Interstellar",
      "description": "In the near future, Earth is devastated by drought and famine, causing a scarcity in food and extreme changes in climate. When humanity is facing extinction, a mysterious rip in the space-time continuum is discovered, giving mankind the opportunity to widen their lifespan. A group of explorers must travel beyond our solar system in search of a planet that can sustain life. The crew of the Endurance are required to think bigger and go further than any human in history as they embark on an interstellar voyage into the unknown. Cooper, the pilot of the Endurance, must decide between seeing his children again and the future of the human race.",
      "created_by": 2
    },
    {
      "title": "The Prestige",
      "description": "In late 19th century London, two stage magicians, Robert Angier and Alfred Borden, engage in a bitter rivalry to create the ultimate stage illusion. Their fierce competition leads them to perform increasingly dangerous and elaborate tricks to outdo each other. The obsession with their craft consumes their lives, and they resort to sabotage, deception, and even murder. As the rivalry spirals out of control, it becomes clear that the true cost of their ambition is far greater than they ever imagined. The film delves into themes of sacrifice, obsession, and the blurred line between illusion and reality, culminating in a shocking revelation that changes everything.",
      "created_by": 1
    },
    {
      "title": "Avatar",
      "description": "On the lush alien world of Pandora live the Na'vi, beings who appear primitive but are highly evolved. Because the planet's environment is poisonous, human/Na'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully, a paralyzed former Marine, becomes mobile again through one such Avatar and falls in love with a Na'vi woman. As a bond with her grows, he is drawn into a battle for the survival of her world. As Jake bonds with the Na'vi and learns their ways, he becomes torn between his mission and his newfound love for Pandora, leading to a climactic battle that will determine the fate of an entire world.",
      "created_by": 2
    },
    {
      "title": "The Dark Knight",
      "description": "With the help of allies Lt. Jim Gordon and DA Harvey Dent, Batman has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism. As the Joker’s deadly plan unfolds, Batman must navigate a complex web of deceit and face his most personal and devastating battle yet. The film explores themes of justice, order, and the duality of man, pushing Batman to his physical and psychological limits in his quest to bring the Joker to justice.",
      "created_by": 2
    },
    {
      "title": "Jurassic Park",
      "description": "On a remote island, wealthy entrepreneur John Hammond has created Jurassic Park, a theme park showcasing cloned dinosaurs. When a park worker is killed, Hammond brings in experts Dr. Alan Grant, Dr. Ellie Sattler, and Dr. Ian Malcolm to certify the park's safety. During a preview tour, a massive power breakdown occurs, allowing the cloned dinosaurs to run amok. The visitors must now survive the dinosaur onslaught and find a way to escape the island. The film explores the clash between humanity and nature, the ethical implications of genetic engineering, and the unpredictability of scientific advancements.",
      "created_by": 1
    },
    {
      "title": "The Lord of the Rings: The Fellowship of the Ring",
      "description": "In the ancient world of Middle-earth, the Dark Lord Sauron forged the One Ring, a weapon of unparalleled power that would allow him to enslave all of Middle-earth. After centuries of being lost, the Ring has resurfaced and fallen into the hands of a young Hobbit named Frodo Baggins. Tasked with a perilous journey to destroy the Ring in the fires of Mount Doom, Frodo is joined by a fellowship of allies including Aragorn, Legolas, Gimli, Boromir, Gandalf, and his loyal friends Sam, Merry, and Pippin. As they journey across treacherous lands, they face relentless pursuit by Sauron's minions and the corrupting influence of the Ring itself, which threatens to tear the fellowship apart.",
      "created_by": 2
    },
    {
      "title": "The Shawshank Redemption",
      "description": "Andy Dufresne, a successful banker, is sentenced to life imprisonment for the murder of his wife and her lover. Set in the corrupt and oppressive Shawshank State Penitentiary, Andy befriends Ellis 'Red' Redding and becomes instrumental in a money-laundering operation led by the prison warden. Despite the harsh conditions, Andy's unbroken spirit and ingenuity lead to small victories over the years, instilling a sense of hope and dignity among the inmates. The story explores themes of friendship, resilience, and redemption, culminating in Andy's daring and meticulously planned escape, which exposes the warden's corruption and restores Andy's freedom.",
      "created_by": 1
    }
  ]
);
};
