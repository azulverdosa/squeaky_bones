const catBreeds = [
  {
    name: 'Abyssinian',
    origin: 'Unspecified, but somewhere in Afro-Asia, likely Ethiopia',
    type: 'Natural',
    body: 'Semi-foreign',
    coat: 'Short',
    coat_pattern: 'Ticked tabby',
  },

  {
    name: 'Aegean',
    origin: 'Greece',
    type: 'Natural',
    body: 'Moderate',
    coat: 'Semi-long',
    coat_pattern: 'Multi-color',
  },

  {
    name: 'American Bobtail',
    origin: 'the United States',
    type: 'Mutation',
    body: 'Cobby',
    coat: 'Semi-long',
    coat_pattern: 'All',
  },

  {
    name: 'American Curl',
    origin: 'the United States',
    type: 'Mutation',
    body: 'Semi-foreign',
    coat: 'Semi-long',
    coat_pattern: 'All',
  },

  {
    name: 'American Ringtail',
    origin: 'the United States',
    type: 'Mutation',
    body: 'Foreign',
    coat: 'Semi-long',
    coat_pattern: 'All',
  },

  {
    name: 'American Shorthair',
    origin: 'the United States',
    type: 'Natural',
    body: 'Cobby',
    coat: 'Short',
    coat_pattern: 'All',
  },

  {
    name: 'American Wirehair',
    origin: 'the United States',
    type: 'Mutation',
    body: 'Normal',
    coat: 'Rex',
    coat_pattern: 'All',
  },

  {
    name: 'Aphrodite Giant',
    origin: 'Cyprus',
    type: 'Natural',
    body: 'Lean and muscular',
    coat: 'All',
    coat_pattern: 'All',
  },
  {
    name: 'Arabian Mau',
    origin: 'the Arabian Peninsula',
    type: 'Natural',
    body: 'Moderate and muscular',
    coat: 'Short',
    coat_pattern: 'All',
  },

  {
    name: 'Asian',
    origin: 'the United Kingdom',
    type: 'Crossbreed between the Burmese and Chinchilla Persians',
    body: 'Moderate',
    coat: 'Short',
    coat_pattern: 'All without white and without siamese pointing',
  },

  {
    name: 'Asian Semi-longhair',
    origin: 'the United Kingdom',
    type: 'Crossbreed between the Burmese and Chinchilla Persians',
    body: 'Moderate',
    coat: 'Semi-long',
    coat_pattern: 'All without white and without siamese pointing',
  },

  {
    name: 'Australian Mist',
    origin: 'Australia',
    type: 'Crossbreed between the Abyssinian, Burmese, and Australian short-haired cats',
    body: 'Moderate',
    coat: 'Short',
    coat_pattern: 'Spotted or marbled',
  },

  {
    name: 'Balinese',
    origin: 'Developed in the United States; foundation stock from Thailand',
    type: 'Mutation of the Siamese',
    body: 'Semi-foreign',
    coat: 'Long',
    coat_pattern: 'Colorpoint',
  },

  {
    name: 'Bambino',
    origin: 'the United States',
    type: 'Crossbreed between the Munchkin and Sphynx',
    body: 'Dwarf',
    coat: 'Rex',
    coat_pattern: '',
  },
  {
    name: 'Bengal',
    origin: 'Developed in the United States,but created in Asia',
    type: 'Hybrid of the Abyssinian and Egyptian Mau × leopard cat (Prionailurus bengalensis)',
    body: 'Large',
    coat: 'Short',
    coat_pattern: 'Spotted, marbled, or rosetted',
  },

  {
    name: 'Birman',
    origin: 'Developed in France; foundation stock from Burma (Myanmar)',
    type: 'The original Birman was crossed with the Siamese and the Persian to create the Birman of today.',
    body: 'Cobby',
    coat: 'Semi-long',
    coat_pattern: 'Mitted colorpoint',
  },

  {
    name: 'Bombay',
    origin: 'the United States and Burma (Myanmar)',
    type: 'Crossbreed between the Black American Shorthair and Sable Burmese',
    body: 'Cobby',
    coat: 'Short',
    coat_pattern: 'Solid black',
  },

  {
    name: 'Brazilian Shorthair',
    origin: 'Brazil',
    type: 'Natural',
    body: 'Normal',
    coat: 'Short',
    coat_pattern: 'All',
  },

  {
    name: 'British Longhair',
    origin: 'the United Kingdom (England)',
    type: 'Natural',
    body: 'Cobby',
    coat: 'Semi-long',
    coat_pattern: 'All',
  },

  {
    name: 'British Shorthair',
    origin: 'the United Kingdom (England)',
    type: 'Natural',
    body: 'Cobby',
    coat: 'Short',
    coat_pattern: 'All',
  },

  {
    name: 'Burmese',
    origin: 'Burma (Myanmar)',
    type: 'Natural',
    body: 'Semi-foreign or semi-cobby',
    coat: 'Short',
    coat_pattern: 'Solid and Tortoiseshell',
  },

  {
    name: 'Burmilla',
    origin: 'the United Kingdom (England)',
    type: 'Crossbreed between the Burmese and the Chinchilla Persian',
    body: 'Semi-cobby',
    coat: 'Short',
    coat_pattern: 'Solid with Shaded Silver and Silver Tipped patterns',
  },

  {
    name: 'California Spangled',
    origin: 'the United States',
    type: 'Crossbreed between the Abyssinian, American Shorthair and British Shorthair',
    body: 'Moderate',
    coat: 'Short',
    coat_pattern: 'Spotted tabby',
  },

  {
    name: 'Chantilly-Tiffany',
    origin: 'the United States',
    type: 'Natural',
    body: 'Cobby',
    coat: 'Long',
    coat_pattern: 'Solid, classic tabby, spotted tabby and ticked tabby',
  },

  {
    name: 'Chartreux',
    origin: 'France',
    type: 'Natural',
    body: 'Muscular; cobby',
    coat: 'Short',
    coat_pattern: 'Varying shades of blue',
  },

  {
    name: 'Chausie',
    origin: 'the United States',
    type: 'Hybrid of the Abyssinian × jungle cat (Felis chaus)',
    body: 'Normal',
    coat: 'Short',
    coat_pattern: 'Solid black, black grizzled tabby and black ticked tabby',
  },

  {
    name: 'Colorpoint Shorthair',
    origin: 'the United Kingdom (England)',
    type: 'Crossbreed between the Abyssinian, Siamese and short-haired cats',
    body: 'Foreign',
    coat: 'Short',
    coat_pattern: 'Colorpoint',
  },

  'Cornish Rex',
  {
    name: 'Cornwall, England,',
    origin: 'the United Kingdom',
    type: 'Mutation',
    body: 'Foreign',
    coat: 'Rex',
    coat_pattern: 'All',
  },

  {
    name: 'Cymric, Manx Longhair or Long-haired Manx',
    origin: 'the Isle of Man, the United States, and Canada [b',
    type: 'Mutation of the Manx',
    body: 'Semi-cobby',
    coat: 'Long',
    coat_pattern: 'All',
  },

  {
    name: 'Cyprus',
    origin: 'Cyprus',
    type: 'Natural',
    body: 'Lean and muscular',
    coat: 'All',
    coat_pattern: 'All',
  },

  {
    name: 'Devon Rex',
    origin: 'Buckfastleigh, Devon, England, the United Kingdom',
    type: 'Mutation',
    body: 'Semi-foreign',
    coat: 'Rex',
    coat_pattern: 'All',
  },

  {
    name: 'Donskoy or Don Sphynx',
    origin: 'Russia',
    type: 'Mutation',
    body: 'Semi-foreign',
    coat: 'Hairless',
    coat_pattern: 'Solid',
  },

  {
    name: 'Dragon Li or Chinese Li Hua',
    origin: 'China',
    type: 'Natural',
    body: 'Normal',
    coat: 'Short',
    coat_pattern: 'Ticked tabby',
  },

  {
    name: 'Dwelf',
    origin: 'the United States',
    type: 'Crossbreed between the American Curl, Munchkin and Sphynx',
    body: 'Dwarf',
    coat: 'Hairless',
    coat_pattern: 'All',
  },

  {
    name: 'Egyptian Mau',
    origin: 'Egypt',
    type: 'Natural',
    body: 'Moderate and muscular',
    coat: 'Short',
    coat_pattern: 'Spotted tabby',
  },

  {
    name: 'European Shorthair',
    origin: 'Continental Europe',
    type: 'Natural',
    body: 'Moderate',
    coat: 'Short',
    coat_pattern: 'All',
  },

  {
    name: 'Exotic Shorthair',
    origin: 'the United States',
    type: 'Crossbreed between the American Shorthair and Persian',
    body: 'Cobby',
    coat: 'Short',
    coat_pattern: 'All',
  },

  {
    name: 'Foldex',
    origin: 'Canada',
    type: 'Crossbreed between the Exotic Shorthair and Scottish Fold',
    body: 'Cobby',
    coat: 'Short',
    coat_pattern: 'All',
  },

  {
    name: 'German Rex',
    origin: 'Germany',
    type: 'Mutation',
    body: 'Semi-foreign',
    coat: 'Rex',
    coat_pattern: 'All',
  },

  {
    name: 'Havana Brown',
    origin: 'the United Kingdom (England); foundation stock from Thailand',
    type: 'Crossbreed between the Siamese and black short-haired cats',
    body: 'Semi-foreign',
    coat: 'Short',
    coat_pattern: 'Solid brown',
  },

  {
    name: 'Highlander',
    origin: 'the United States',
    type: 'Crossbreed between the Desert Lynx and Jungle Curl',
    body: 'Moderate',
    coat: 'Short/long',
    coat_pattern: 'All',
  },

  {
    name: 'Himalayan or Colorpoint Persian',
    origin: 'the United States and the United Kingdom',
    type: 'Crossbreed between the Persian and Siamese',
    body: 'Cobby',
    coat: 'Long',
    coat_pattern: 'Colorpoint',
  },

  {
    name: 'Japanese Bobtail',
    origin: 'Japan',
    type: 'Mutation',
    body: 'Moderate',
    coat: 'Short/long',
    coat_pattern: 'All',
  },

  {
    name: 'Javanese or Colorpoint Longhair',
    origin: 'Developed in the United States and Canada; foundation stock from Southeast Asia',
    type: 'Crossbreed between the Balinese (with some Colorpoint Shorthair), Oriental Longhair and Siamese',
    body: 'Oriental',
    coat: 'Long',
    coat_pattern: 'Colorpoint',
  },

  {
    name: 'Kanaani',
    origin: 'Israel',
    type: 'Hybrid of short-haired cats ×African wildcat (Felis lybica)',
    body: 'Semi-foreign',
    coat: 'Short',
    coat_pattern: 'Solid black, chocolate spotted tabby or cinnamon spotted tabby',
  },

  {
    name: 'Khao Manee',
    origin: 'Thailand',
    type: 'Natural',
    body: 'Moderate',
    coat: 'Short',
    coat_pattern: 'Solid white',
  },

  {
    name: 'Kinkalow',
    origin: 'the United States',
    type: 'Crossbreed between the Munchkin and American Curl',
    body: 'Dwarf',
    coat: 'Short',
    coat_pattern: 'All',
  },

  {
    name: 'Korat',
    origin: 'Thailand',
    type: 'Natural',
    body: 'Semi-foreign or semi-cobby and muscular',
    coat: 'Short',
    coat_pattern: 'Solid blue',
  },

  {
    name: 'Korean Bobtail',
    origin: 'Korea',
    type: 'Natural, mutation',
    body: 'Moderate',
    coat: 'Short/long',
    coat_pattern: 'All',
  },

  {
    name: 'Korn Ja',
    origin: 'Thailand',
    type: 'Natural',
    body: 'Small',
    coat: 'Short',
    coat_pattern: 'Solid black',
  },

  {
    name: 'Kurilian Bobtail or Kuril Islands Bobtail',
    origin: 'Kuril Islands, North Pacific',
    type: 'Natural, mutation',
    body: 'Semi-cobby',
    coat: 'Short/long',
    coat_pattern: 'All',
  },

  {
    name: 'Lambkin',
    origin: 'the United States',
    type: 'Crossbreed between the Munchkin and Selkirk Rex',
    body: 'Dwarf',
    coat: 'Rex',
    coat_pattern: 'All',
  },

  {
    name: 'LaPerm',
    origin: 'the United States',
    type: 'Mutation',
    body: 'Moderate',
    coat: 'Rex',
    coat_pattern: 'All',
  },

  {
    name: 'Lykoi',
    origin: 'the United States',
    type: 'Mutation',
    body: 'Moderate',
    coat: 'Sparse haired',
    coat_pattern: 'Black roan',
  },

  {
    name: 'Maine Coon',
    origin: 'the United States',
    type: 'Natural, crossbreed',
    body: 'Large',
    coat: 'Semi-long/long',
    coat_pattern: 'All excluding chocolate and colourpoint',
  },

  {
    name: 'Manx',
    origin: 'the Isle of Man',
    type: 'Mutation',
    body: 'Moderate',
    coat: 'Short/long',
    coat_pattern: 'All',
  },

  {
    name: 'Mekong Bobtail',
    origin: 'Developed in Russia; foundation stock ultimately from Southeast Asia',
    type: 'Mutation',
    body: 'Moderate',
    coat: 'Short',
    coat_pattern: 'Colorpoint',
  },

  {
    name: 'Minskin',
    origin: 'the United States',
    type: 'Crossbreed between the Munchkin, Burmese, Devon Rex, and Sphynx',
    body: 'Dwarf',
    coat: 'Hairless',
    coat_pattern: 'All',
  },

  {
    name: 'Minuet',
    origin: 'the United States',
    type: 'Crossbreed between the Persian and Munchkin',
    body: 'Dwarf',
    coat: 'Short/long',
    coat_pattern: 'All',
  },

  {
    name: 'Munchkin',
    origin: 'the United States',
    type: 'Mutation',
    body: 'Dwarf',
    coat: 'Short/long',
    coat_pattern: 'All',
  },

  {
    name: 'Nebelung',
    origin: 'the United States',
    type: 'Natural, mutation',
    body: 'Foreign',
    coat: 'Semi-long',
    coat_pattern: 'Solid blue',
  },

  {
    name: 'Neva Masquerade (colorpoint Siberian)',
    origin: 'Russia',
    type: 'Crossbreed between the Siberian and a colorpoint cat',
    body: 'Cobby',
    coat: 'Long',
    coat_pattern: 'Colorpoint',
  },

  {
    name: 'Norwegian Forest Cat',
    origin: 'Norway',
    type: 'Natural',
    body: 'Cobby',
    coat: 'Long',
    coat_pattern: 'Chocolate or orange and white bicolor',
  },

  {
    name: 'Ocicat',
    origin: 'the United States',
    type: 'Crossbreed between the Abyssinian, American Shorthair and Siamese',
    body: 'Large',
    coat: 'Short',
    coat_pattern: 'Spotted tabby',
  },

  {
    name: 'Ojos Azules',
    origin: 'the United States',
    type: 'Crossbreed',
    body: 'Moderate',
    coat: 'Short',
    coat_pattern: 'All',
  },
  {
    name: 'Oregon Rex (extinct)',
    origin: 'the United States',
    type: 'Mutation',
    body: '',
    coat: 'Rex',
    coat_pattern: ',',
  },

  {
    name: 'Oriental Bicolor',
    origin:
      'Developed in the United States and the United Kingdom, later in Continental Europe; foundation stock ultimately from Thailand',
    type: 'Color variety of the Oriental Shorthair',
    body: 'Oriental',
    coat: 'Short',
    coat_pattern: 'Bicolor',
  },

  {
    name: 'Oriental Longhair',
    origin:
      'Developed in the United States and the United Kingdom; foundation stock ultimately from Thailand',
    type: 'Crossbreed between the Oriental Shorthair and long-haired cats',
    body: 'Oriental',
    coat: 'Semi-long',
    coat_pattern: 'All; if colorpoint is considered to be a separate breed, it is called the Javanese',
  },

  {
    name: 'Oriental Shorthair ',
    origin:
      'Developed in the United States and the United Kingdom; foundation stock ultimately from Thailand',
    type: 'Crossbreed between the European Shorthair and Siamese',
    body: 'Oriental',
    coat: 'Short',
    coat_pattern: 'All',
  },

  {
    name: 'Persian (modern)',
    origin: 'Developed in the United States and Europe; foundation stock from Greater Iran',
    type: 'Mutation of the Traditional Persian',
    body: 'Cobby',
    coat: 'Long',
    coat_pattern: 'All but colorpoint',
  },

  {
    name: 'Persian (traditional)',
    origin: 'Greater Iran',
    type: 'Natural, but some crossbreeding with the Turkish Angora',
    body: 'Cobby',
    coat: 'Long',
    coat_pattern: 'All but colorpoint',
  },

  {
    name: 'Peterbald',
    origin: 'Russia',
    type: 'Crossbreed between the Donskoy, Oriental Shorthair and Siamese; before this, it was between the Balinese and Javanese',
    body: 'Oriental',
    coat: 'Hairless, velour, brush, or straight coat',
    coat_pattern: 'All',
  },

  {
    name: 'Pixie-bob',
    origin: 'the United States',
    type: 'Mutation (falsely claimed to be a hybrid of the domestic cat and the bobcat (Lynx rufus) early on)',
    body: 'Medium',
    coat: 'Short',
    coat_pattern: 'Spotted tabby',
  },

  {
    name: 'Ragamuffin or Liebling (obsolete)',
    origin: 'the United States',
    type: 'Crossbreed between the Ragdoll with limited out-crossing to the Himalayan, the Persian, and other long-haired cats',
    body: 'Cobby',
    coat: 'Long',
    coat_pattern: 'All',
  },

  {
    name: 'Ragdoll',
    origin: 'the United States',
    type: 'Behavioral mutation in a crossbreed, presumed to be between the Persian or Turkish Angora and the Birman or Burmese',
    body: 'Cobby',
    coat: 'Long',
    coat_pattern: 'Colorpoint, mitted, or bicolor',
  },

  {
    name: 'Raas',
    origin: 'Raas Island, Indonesia',
    type: 'Natural',
    body: 'Moderate',
    coat: 'Short',
    coat_pattern: 'Solid blue, solid cinnamon, or cinnamon colorpoint',
  },

  {
    name: 'Russian Blue',
    origin: 'Russia',
    type: 'Natural',
    body: 'Moderate, Oriental',
    coat: 'Short',
    coat_pattern: 'Solid blue',
  },

  {
    name: 'Russian White, Russian Black and Russian Tabby',
    origin: 'Developed in Australia; foundation stock from Russia',
    type: 'Crossbreeds between the Russian Blue and short-haired cats from Siberia, Russia',
    body: 'Moderate',
    coat: 'Short',
    coat_pattern: 'Solid white, solid black and tabby',
  },

  {
    name: 'Sam Sawet',
    origin: 'Thailand',
    type: 'Color variety of the Thai',
    body: 'Moderate',
    coat: 'Short',
    coat_pattern: 'Solid',
  },

  {
    name: 'Savannah',
    origin: 'the United States',
    type: 'Hybrid of the domestic cat x serval (Leptailurus serval)',
    body: 'Large',
    coat: 'Short',
    coat_pattern: 'Spotted',
  },

  {
    name: 'Scottish Fold',
    origin: 'the United Kingdom (Scotland)',
    type: 'Mutation of the bones and cartilage of the ears',
    body: 'Cobby',
    coat: 'Short/long',
    coat_pattern: 'All',
  },

  {
    name: 'Selkirk Rex',
    origin: 'the United States in 1988',
    type: 'Mutation/crossbreed between the American Shorthair, Persian, Himalayan, Exotic Shorthair and British Shorthair',
    body: 'Large and cobby',
    coat: 'Short/long (longhair, sometimes in early generations, can appear to be semi-long)',
    coat_pattern: 'All',
  },

  {
    name: 'Serengeti',
    origin: 'the United States',
    type: 'Crossbreed/hybrid between the Bengal and Oriental Shorthair',
    body: 'Oriental',
    coat: 'Short',
    coat_pattern: 'Spotted',
  },

  {
    name: 'Serrade Petit',
    origin: 'France',
    type: 'Natural',
    body: 'Semi-cobby',
    coat: 'Short',
    coat_pattern: 'Solid tan, solid orange and solid white',
  },

  {
    name: 'Siamese (modern) (for traditional, see Thai below)',
    origin: 'Developed in the United States and Europe; foundation stock from Thailand',
    type: 'Mutation of the Thai',
    body: 'Oriental',
    coat: 'Short',
    coat_pattern: 'Colorpoint',
  },

  {
    name: 'Siberian or Siberian Forest Cat (for colorpoint, see Neva Masquerade)',
    origin: 'Russia, Ukraine',
    type: 'Natural',
    body: 'Cobby',
    coat: 'Long',
    coat_pattern: 'All; except chocolate, lilac, cinnamon, and fawn[17',
  },

  {
    name: 'Singapura',
    origin: 'Developed in the United States; foundation stock from Singapore',
    type: 'Possibly a mutation of a crossbreed (excluding the Munchkin), solving why they are so small',
    body: 'Small',
    coat: 'Short',
    coat_pattern: 'Ticked tabby',
  },

  {
    name: 'Snowshoe',
    origin: 'the United States',
    type: 'Crossbreed between the American Shorthair and Siamese',
    body: 'Moderate',
    coat: 'Short',
    coat_pattern: 'Mitted colorpoint',
  },

  {
    name: 'Sokoke',
    origin: 'Kenya',
    type: 'Natural',
    body: 'Moderate',
    coat: 'Short',
    coat_pattern: 'Ticked tabby',
  },

  {
    name: 'Somali',
    origin: 'the United States, Canada',
    type: 'Mutation',
    body: 'Cobby',
    coat: 'Long',
    coat_pattern: 'Ticked tabby',
  },

  {
    name: 'Sphynx',
    origin: 'Canada, Europe',
    type: 'Mutation',
    body: 'Oriental',
    coat: 'Hairless',
    coat_pattern: 'All',
  },

  {
    name: 'Suphalak',
    origin: 'Thailand',
    type: 'Natural',
    body: 'Moderate',
    coat: 'Short',
    coat_pattern: 'Solid reddish-brown',
  },

  {
    name: 'Thai or Traditional, Classic, or Old-style Siamese;Wichien Maat',
    origin: 'Developed in Europe; foundation stock from Thailand',
    type: 'Natural',
    body: 'Moderate',
    coat: 'Short',
    coat_pattern: 'Colorpoint',
  },

  {
    name: 'Thai Lilac, Thai Blue Point and Thai Lilac Point',
    origin: 'Thailand',
    type: 'Color varieties of the Korat',
    body: 'Moderate',
    coat: 'Short',
    coat_pattern: 'Solid lilac and colorpoint (blue point and lilac point only)',
  },

  {
    name: 'Tonkinese',
    origin: 'Canada, the United States',
    type: 'Crossbreed between the Burmese and Siamese',
    body: 'Oriental',
    coat: 'Short',
    coat_pattern: 'Colorpoint, mink, or solid',
  },

  {
    name: 'Toybob',
    origin: 'Russia',
    type: 'Mutation',
    body: 'Dwarf',
    coat: 'Short',
    coat_pattern: 'All',
  },

  {
    name: 'Toyger',
    origin: 'the United States',
    type: 'Crossbreed/hybrid between the Bengal and short-haired cats',
    body: 'Moderate',
    coat: 'Short',
    coat_pattern: 'Mackerel tabby',
  },

  {
    name: 'Turkish Angora',
    origin: 'Turkey',
    type: 'Natural',
    body: 'Semi-cobby',
    coat: 'Semi-long',
    coat_pattern: 'All',
  },

  {
    name: 'Turkish Van',
    origin: 'Developed in the United Kingdom; foundation stock from Lake Van, Turkey',
    type: 'Natural',
    body: 'Semi-cobby',
    coat: 'Semi-long',
    coat_pattern: 'Van pattern',
  },

  {
    name: 'Turkish Vankedisi (white variety of Turkish Van)',
    origin: 'Lake Van, Turkey',
    type: 'Natural',
    body: 'Svelte',
    coat: 'Long',
    coat_pattern: 'Solid white',
  },

  {
    name: 'Ukrainian Levkoy',
    origin: 'Ukraine',
    type: 'Crossbreed between the Donskoy and Scottish Fold',
    body: 'Moderate',
    coat: 'Hairless',
    coat_pattern: 'Solid gray',
  },

  {
    name: 'York Chocolate',
    origin: 'the United States',
    type: 'Natural',
    body: 'Moderate',
    coat: 'Long',
    coat_pattern:
      coat_'Solid chocolate, solid lilac and solid taupe or any of these colors with whitepatterns://en.wikipedia.org/wiki/List_of_cat_breeds',
  },
];

// https://en.wikipedia.org/wiki/List_of_cat_breeds
