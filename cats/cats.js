// structure:
// {
//   name: 'string',
//   age: number,
//   color: 'string',
//   weight: number,
//   breed: 'string',
//   sex: 'string',
//   photo: 'string', - https://unsplash.com/
// },

const cats = [
  {
    name: 'Juniper',
    age: 11,
    color: 'Black and tan',
    weight: 12,
    breed: 'Domestic Shorthair',
    sex: 'F',
    photo: '',
  },
  {
    name: 'Piper',
    age: 18,
    color: 'beige',
    weight: 9,
    breed: 'British Shorthair',
    sex: 'F',
    photo: '',
  },

  {
    name: 'Whitman',
    age: 12,
    color: 'black',
    weight: 15,
    breed: 'Domestic Longhair',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Fozzy',
    age: 16,
    color: 'brown',
    weight: 13,
    breed: 'Ragdoll',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Louis',
    age: 6,
    color: 'ruddy',
    weight: 10,
    breed: 'Abyssinian',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Piper',
    age: 4,
    color: 'blue',
    weight: 12,
    breed: 'Tonkinese',
    sex: 'F',
    photo: '',
  },
  {
    name: 'Rony',
    age: 3,
    color: 'brown',
    weight: 14,
    breed: 'Scottish Fold',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Weasly',
    age: 12,
    color: 'brown',
    weight: 18,
    breed: 'Maine Coon',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Maddie',
    age: 5,
    color: 'calico',
    weight: 15,
    breed: 'Domestic Shorthair',
    sex: 'F',
    photo: '',
  },
  {
    name: 'Gecko',
    age: 2,
    color: 'brown',
    weight: 10,
    breed: 'Bengal',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Shirley Temple',
    age: 17,
    color: 'blue',
    weight: 17,
    breed: 'British Shorthair',
    sex: 'F',
    photo: '',
  },
  {
    name: 'Vince',
    age: 5,
    color: 'black',
    weight: 12,
    breed: 'Domestic Longhair',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Gandolf',
    age: 4,
    color: 'black',
    weight: 13,
    breed: 'Bombay',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Thelma',
    age: 16,
    color: 'seal',
    weight: 14,
    breed: 'Siamese',
    sex: 'F',
    photo: '',
  },
  {
    name: 'Twiggy',
    age: 3,
    color: 'tortoiseshell',
    weight: 13,
    breed: 'Domestic Shorthair',
    sex: 'F',
    photo: '',
  },
  {
    name: 'Demitrius',
    age: 4,
    color: 'brown',
    weight: 17,
    breed: 'Bengal',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Cocoa',
    age: 10,
    color: 'chocolate',
    weight: 15,
    breed: 'Siamese',
    sex: 'F',
    photo: '',
  },
  {
    name: 'Luigi',
    age: 3,
    color: 'ruddy',
    weight: 10,
    breed: 'Abyssinian',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Pebbles',
    age: 13,
    color: 'brown',
    weight: 14,
    breed: 'Domestic Longhair',
    sex: 'F',
    photo: '',
  },
  {
    name: 'Noggle',
    age: 9,
    color: 'orange',
    weight: 22,
    breed: 'Domestic Shorthair',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Quince',
    age: 6,
    color: 'white & grey',
    weight: 19,
    breed: 'Maine Coon',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Leloo',
    age: 11,
    color: 'seal',
    weight: 16,
    breed: 'Birman',
    sex: 'F',
    photo: '',
  },
  {
    name: 'Jade',
    age: 6,
    color: 'brown',
    weight: 13,
    breed: 'Bengal',
    sex: 'F',
    photo: '',
  },

  {
    name: 'Marty',
    age: 1,
    color: 'grey',
    weight: 9,
    breed: 'Domestic Longhair',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Ripley',
    age: 7,
    color: 'black',
    weight: 15,
    breed: 'Domestic Shorthair',
    sex: 'F',
    photo: '',
  },
  {
    name: 'Halo',
    age: 5,
    color: 'seal',
    weight: 13,
    breed: 'Birman',
    sex: 'F',
    photo: '',
  },
  {
    name: 'Koda',
    age: 3,
    color: 'sable',
    weight: 12,
    breed: 'Burmese',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Gramps',
    age: 7,
    color: 'brown',
    weight: 12,
    breed: 'Bengal',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Daisy',
    age: 18,
    color: 'tan',
    weight: 11,
    breed: 'Domestic Longhair',
    sex: 'F',
    photo: '',
  },
  {
    name: 'Snickers',
    age: 15,
    color: 'grey',
    weight: 16,
    breed: 'Nebelung',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Nell',
    age: 2,
    color: 'white',
    weight: 10,
    breed: 'Domestic Shorthair',
    sex: 'F',
    photo: '',
  },
  {
    name: 'Tike',
    age: 1,
    color: 'black and brown',
    weight: 12,
    breed: 'Maine Coon',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Fidget',
    age: 15,
    color: 'blue',
    weight: 17,
    breed: 'Persian',
    sex: 'F',
    photo: '',
  },
  {
    name: 'Batman',
    age: 17,
    color: 'tuxedo',
    weight: 12,
    breed: 'Domestic Longhair',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Pigeon',
    age: 9,
    color: 'black',
    weight: 13,
    breed: 'Bombay',
    sex: 'F',
    photo: '',
  },
  {
    name: 'Zippy',
    age: 2,
    color: 'brown',
    weight: 10,
    breed: 'Domestic Shorthair',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Otto',
    age: 17,
    color: 'champagne',
    weight: 12,
    breed: 'Burmese',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Raviolo',
    age: 19,
    color: 'seal',
    weight: 14,
    breed: 'Tonkinese',
    sex: 'F',
    photo: '',
  },
  {
    name: 'Cool J',
    age: 5,
    color: 'black',
    weight: 12,
    breed: 'Bombay',
    sex: 'M',
    photo: '',
  },
  {
    name: 'KitKat',
    age: 11,
    color: 'black and white',
    weight: 10,
    breed: 'Domestic Shorthair',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Duchess',
    age: 8,
    color: 'brown, black & white',
    weight: 12,
    breed: 'Domestic Longhair',
    sex: 'F',
    photo: '',
  },
  {
    name: 'Beta',
    age: 7,
    color: 'blue',
    weight: 16,
    breed: 'Russian Blue',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Bijou',
    age: 3,
    color: 'white & grey',
    weight: 8,
    breed: 'Domestic Longhair',
    sex: 'F',
    photo: '',
  },
  {
    name: 'Mailman',
    age: 4,
    color: 'black',
    weight: 12,
    breed: 'Domestic Shorthair',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Robin Hood',
    age: 18,
    color: 'chocolate',
    weight: 14,
    breed: 'Himalayan',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Babushka',
    age: 4,
    color: 'grey',
    weight: 11,
    breed: 'Nebelung',
    sex: 'F',
    photo: '',
  },
  {
    name: 'Scamp',
    age: 6,
    color: 'blue',
    weight: 15,
    breed: 'Russian Blue',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Kong',
    age: 19,
    color: 'beige',
    weight: 10,
    breed: 'Domestic Shorthair',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Moe',
    age: 4,
    color: 'chocolate',
    weight: 12,
    breed: 'Persian',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Pepper',
    age: 6,
    color: 'black & brown',
    weight: 16,
    breed: 'Domestic Longhair',
    sex: 'F',
    photo: '',
  },
  {
    name: 'Karma',
    age: 8,
    color: 'seal',
    weight: 13,
    breed: 'Siamese',
    sex: 'F',
    photo: '',
  },
  {
    name: 'Bubbles',
    age: 6,
    color: 'tri coloured',
    weight: 13,
    breed: 'Domestic Shorthair',
    sex: 'F',
    photo: '',
  },
  {
    name: 'Hype',
    age: 10,
    color: 'Black, brown and white',
    weight: 12,
    breed: 'Ragdoll',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Fifi',
    age: 7,
    color: 'brown & white',
    weight: 14,
    breed: 'Domestic Longhair',
    sex: 'F',
    photo: '',
  },

  {
    name: 'Snood',
    age: 2,
    color: 'black',
    weight: 10,
    breed: 'Bombay',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Cali',
    age: 6,
    color: 'black & brown',
    weight: 15,
    breed: 'Domestic Shorthair',
    sex: 'F',
    photo: '',
  },
  {
    name: 'Rosi',
    age: 4,
    color: 'chocolate',
    weight: 11,
    breed: 'Himalayan',
    sex: 'F',
    photo: '',
  },
  {
    name: 'Road Runner',
    age: 4,
    color: 'black',
    weight: 12,
    breed: 'Domestic Longhair',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Rodrigo',
    age: 6,
    color: 'grey & white',
    weight: 16,
    breed: 'Scottish Fold',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Tiger Lily',
    age: 10,
    color: 'white',
    weight: 9,
    breed: 'British Shorthair',
    sex: 'F',
    photo: '',
  },
  {
    name: 'Baloo',
    age: 3,
    color: 'blue',
    weight: 13,
    breed: 'Siamese',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Honey',
    age: 1,
    color: 'white & blue',
    weight: 8,
    breed: 'Domestic Longhair',
    sex: 'F',
    photo: '',
  },
  {
    name: 'Pinky',
    age: 7,
    color: 'calico',
    weight: 8,
    breed: 'Domestic Shorthair',
    sex: 'F',
    photo: '',
  },
  {
    name: 'Beavis',
    age: 2,
    color: 'tabby',
    weight: 15,
    breed: 'Maine Coon',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Sweetie',
    age: 7,
    color: 'white and black',
    weight: 13,
    breed: 'Bobtail Mix',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Ginger',
    age: 2,
    color: 'tortoiseshell',
    weight: 11,
    breed: 'Domestic Shorthair',
    sex: 'F',
    photo: '',
  },
  {
    name: 'Skittles',
    age: 9,
    color: 'seal',
    weight: 14,
    breed: 'Ragdoll',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Freddie',
    age: 13,
    color: 'grey',
    weight: 15,
    breed: 'Scottish Fold',
    sex: 'M',
    photo: '',
  },
  {
    name: 'Velvet',
    age: 4,
    color: 'white & grey',
    weight: 10,
    breed: 'Burmese',
    sex: 'F',
    photo: '',
  },
];

//https://catoftheday.com/
