export const moods = [
  { name: 'Amused', emojis: ['🤣'], related: [], type: 'positive' },
  { name: 'Adventurous', emojis: ['🤔'], related: [], type: 'positive' },
  { name: 'Ecstatic', emojis: ['😁'], type: 'positive' },
  { name: 'Like a King', emojis: ['👑'], related: [], type: 'positive' },
  { name: 'Excited', emojis: ['😃'], related: [], type: 'positive' },
  { name: 'Flirty', emojis: ['😘'], related: [], type: 'positive' },
  { name: 'Good', emojis: ['🙂'], related: [], type: 'positive' },
  { name: 'Happy', emojis: ['😀'], related: [], type: 'positive' },
  { name: 'In Love', emojis: ['😍'], related: [], type: 'positive' },
  { name: 'Mellow', emojis: ['😌'], related: [], type: 'positive' },
  { name: 'Optimistic', emojis: ['🤩'], related: [], type: 'positive' },
  { name: 'Peaceful', emojis: ['😇'], related: [], type: 'positive' },
  { name: 'Silly', emojis: ['🤪'], related: [], type: 'positive' },
  { name: 'Sympathetic', emojis: ['😪'], related: [], type: 'positive' },
  { name: 'Nostalgic', emojis: ['🕹️'], related: [], type: 'positive' },
  { name: 'Thankful', emojis: ['🙏'], type: 'positive' },
  { name: 'Angry', emojis: ['😡'], related: [], type: 'negative' },
  { name: 'Annoyed', emojis: ['😒'], related: [], type: 'negative' },
  { name: 'Apathetic', emojis: ['😑'], related: [], type: 'negative' },
  { name: 'Cranky', emojis: ['😠'], related: [], type: 'negative' },
  { name: 'Depressed', emojis: ['😔'], related: [], type: 'negative' },
  { name: 'Frustrated', emojis: ['😤'], related: [], type: 'negative' },
  { name: 'Grumpy', emojis: ['😠'], related: [], type: 'negative' },
  { name: 'Guilty', emojis: ['😳'], related: [], type: 'negative' },
  { name: 'Indifferent', emojis: ['😑'], related: [], type: 'negative' },
  { name: 'Irritated', emojis: ['😤'], related: [], type: 'negative' },
  { name: 'Melancholy', emojis: ['😢'], related: [], type: 'negative' },
  { name: 'Sad', emojis: ['🙁'], related: [], type: 'negative' },
  { name: 'Devastated', emojis: ['☹️'], related: [], type: 'negative' },
  { name: 'Stressed', emojis: ['😫'], related: [], type: 'negative' },
  { name: 'Upset', emojis: ['😢'], related: [], type: 'negative' },
  { name: 'Weird', emojis: ['🙃'], related: [], type: 'negative' },
  { name: 'Lazy', emojis: ['😫'], related: [], type: 'negative' },
  { name: 'Sleepy', emojis: ['😴'], related: [], type: 'negative' }
]

export const food = [
  {
    name: 'Strawberries',
    moods: ['Sad', 'Melancholy', 'Stressed', 'Depressed']
  },
  {
    name: 'Dark Chocolate',
    moods: ['Irritated', 'Envious', 'Frustrated']
  },
  {
    name: 'Mac and Cheese',
    moods: ['Sad']
  },
  {
    name: 'Tomato Soup',
    moods: ['Upset', 'Angry']
  },
  {
    name: 'Grilled Cheese',
    moods: ['Nostalgic', 'Restless', 'Lazy']
  },
  {
    name: 'Turkey Leg',
    moods: ['Like a King', 'Silly']
  },
  {
    name: 'Avocado Salad',
    moods: ['Happy', 'Apathetic']
  },
  {
    name: 'Quinoa Salad',
    moods: ['Devastated']
  },
  {
    name: 'Salisbury Steak',
    moods: ['Nostalgic', 'Mellow', 'Silly']
  },
  {
    name: 'Cereal',
    moods: ['Lazy', 'Stressed', 'Nostalgic']
  },
  {
    name: 'Meat Loaf',
    moods: ['Nostalgic', 'Grumpy', 'Bad']
  },
  {
    name: 'Pizza',
    moods: ['*']
  },
  {
    name: 'Fried Chicken',
    moods: ['Lazy', 'Mellow', 'Optimistic']
  },
  {
    name: 'Turkey',
    moods: ['Thankful']
  },
  {
    name: 'Ramen Noodles',
    moods: ['Annoyed', 'Lazy', 'Indifferent', 'Sympathetic']
  },
  {
    name: 'Orange',
    moods: ['Weird', 'Silly']
  },
  {
    name: 'Chocolate Covered Straweberries',
    moods: ['In Love', 'Peaceful', 'Flirty']
  },
  {
    name: 'Funnel Cake',
    moods: ['Amused', 'Mellow', 'Ecstatic']
  },
  {
    name: 'Ice Cream',
    moods: ['Sad', 'Depressed', 'Devastated', 'Upset', 'Bad', 'Sympathetic']
  },
  {
    name: 'Bread Bowl Soup',
    moods: ['Apathetic', 'Indifferent']
  },
  {
    name: 'Spaghetti',
    moods: ['Lazy', 'Nostalgic']
  },
  {
    name: 'Hamburger',
    moods: ['Stressed', 'Lazy', 'Indifferent']
  },
  {
    name: 'Bacon',
    moods: ['Like a King', 'Happy', 'Sad']
  },
  {
    name: 'Steak',
    moods: ['Like a King', 'Ecstatic']
  },
  {
    name: 'Cheesecake',
    moods: ['Happy', 'Sad', 'Depressed', 'Excited', 'Ecstatic', 'Melancholy']
  },
  {
    name: 'Filet Minon',
    moods: ['Like a King', 'Advenurous']
  },
  {
    name: 'Whole Chicken',
    moods: ['Like a King']
  },
  {
    name: 'Fried Chicken',
    moods: ['Mellow', 'Lazy', 'Nostalgic', 'Apathetic', 'Irritated']
  },
  {
    name: 'Candy',
    moods: [
      'Sad',
      'Melancholy',
      'Depressed',
      'Upset',
      'In Love',
      'Stressed',
      'Weird',
      'Sleepy'
    ]
  },
  {
    name: 'Sushi',
    moods: ['Adventurous', 'Excited', 'Ecstatic', 'Flirty', 'Weird']
  },
  {
    name: 'Chocolate',
    moods: [
      'Sad',
      'Melancholy',
      'Depressed',
      'Upset',
      'In Love',
      'Stressed',
      'In Love',
      'Flirty'
    ]
  },
  {
    name: 'Pancakes',
    moods: ['Mellow', 'Good', 'Happy', 'Peaceful']
  },
  {
    name: 'Waffles',
    moods: ['Ecstatic', 'Adventurous', 'Sad', 'Upset']
  },
  {
    name: 'Fruit Loops',
    moods: ['Sleepy', 'Lazy']
  },
  {
    name: 'Banana',
    moods: ['Sleepy', 'Weird', 'Silly', 'Happy']
  },
  {
    name: 'Peanuts',
    moods: ['Weird', 'Lazy', 'Silly', 'Apathetic', 'Mellow']
  },
  {
    name: '',
    moods: ['', '']
  },
  {
    name: '',
    moods: ['', '']
  },
  {
    name: '',
    moods: ['', '']
  },
  {
    name: '',
    moods: ['', '']
  },
  {
    name: '',
    moods: ['', '']
  },
  {
    name: '',
    moods: ['', '']
  },
  {
    name: '',
    moods: ['', '']
  },
  {
    name: '',
    moods: ['', '']
  },
  {
    name: '',
    moods: ['', '']
  },
  {
    name: '',
    moods: ['', '']
  },
  {
    name: '',
    moods: ['', '']
  }
]

export const getFoodbyMood = mood =>
  food.filter(f => f.moods.indexOf(mood) !== -1 || f.moods.indexOf('*') !== -1)
