export const moods = [
  { name: 'Amused', emojis: ['😆', '🤣'], related: [], type: 'positive' },
  { name: 'Blissful', emojis: [], related: [], type: 'positive' },
  { name: 'Calm', emojis: [], related: [], type: 'positive' },
  { name: 'Cheerful', emojis: [], related: [], type: 'positive' },
  { name: 'Content', emojis: [], related: [], type: 'positive' },
  { name: 'Dreamy', emojis: [], related: [], type: 'positive' },
  {
    name: 'Ecstatic',
    emojis: [],
    related: ['Happy', 'Joyful', 'Content'],
    type: 'positive'
  },
  { name: 'Like a King', emojis: [], related: [], type: 'positive' },
  { name: 'Energetic', emojis: [], related: [], type: 'positive' },
  { name: 'Excited', emojis: [], related: [], type: 'positive' },
  { name: 'Flirty', emojis: [], related: [], type: 'positive' },
  { name: 'Giddy', emojis: [], related: [], type: 'positive' },
  { name: 'Good', emojis: [], related: [], type: 'positive' },
  { name: 'Happy', emojis: [], related: [], type: 'positive' },
  { name: 'Joyful', emojis: [], related: [], type: 'positive' },
  { name: 'Loving', emojis: [], related: [], type: 'positive' },
  { name: 'Mellow', emojis: [], related: [], type: 'positive' },
  { name: 'Optimistic', emojis: [], related: [], type: 'positive' },
  { name: 'Peaceful', emojis: [], related: [], type: 'positive' },
  { name: 'Silly', emojis: [], related: [], type: 'positive' },
  { name: 'Sympathetic', emojis: [], related: [], type: 'positive' },
  { name: 'Nostalgic', emojis: [], related: [], type: 'positive' },
  { name: 'Angry', emojis: [], related: [], type: 'negative' },
  { name: 'Annoyed', emojis: [], related: [], type: 'negative' },
  { name: 'Apathetic', emojis: [], related: [], type: 'negative' },
  { name: 'Bad', emojis: [], related: [], type: 'negative' },
  { name: 'Cranky', emojis: [], related: [], type: 'negative' },
  { name: 'Depressed', emojis: [], related: [], type: 'negative' },
  { name: 'Envious', emojis: [], related: [], type: 'negative' },
  { name: 'Frustrated', emojis: [], related: [], type: 'negative' },
  { name: 'Gloomy', emojis: [], related: [], type: 'negative' },
  { name: 'Grumpy', emojis: [], related: [], type: 'negative' },
  { name: 'Guilty', emojis: [], related: [], type: 'negative' },
  { name: 'Indifferent', emojis: [], related: [], type: 'negative' },
  { name: 'Irritated', emojis: [], related: [], type: 'negative' },
  { name: 'Melancholy', emojis: [], related: [], type: 'negative' },
  { name: 'Pessimistic', emojis: [], related: [], type: 'negative' },
  { name: 'Rejected', emojis: [], related: [], type: 'negative' },
  { name: 'Restless', emojis: [], related: [], type: 'negative' },
  { name: 'Sad', emojis: [], related: [], type: 'negative' },
  { name: 'Devastated', emojis: [], related: [], type: 'negative' },
  { name: 'Stressed', emojis: [], related: [], type: 'negative' },
  { name: 'Upset', emojis: [], related: [], type: 'negative' },
  { name: 'Weird', emojis: [], related: [], type: 'negative' }
]

export const food = [
  {
    name: 'Strawberries',
    image:
      'https://greenblender.com/smoothies/wp-content/uploads/2015/12/smoothies-with-strawberries-by-Green-Blender-960x540.jpg',
    moods: ['Sad', 'Melancholy', 'Stressed', 'Depressed']
  },
  {
    name: 'Dark Chocolate',
    image:
      'https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2017/02/DarkChocolate-Featured.jpg',
    moods: ['Irritated', 'Envious', 'Frustrated']
  },
  {
    name: 'Mac and Cheese',
    image: '',
    moods: ['Sad']
  },
  {
    name: 'Tomato Soup',
    image: '',
    moods: ['Upset', 'Angry']
  },
  {
    name: 'Grilled Cheese',
    image: '',
    moods: ['Nostalgic']
  },
  {
    name: 'Turkey Leg',
    image: '',
    moods: ['Like a King']
  },
  {
    name: 'Avocado Salad',
    image: '',
    moods: ['Happy']
  },
  {
    name: 'Quinoa Salad',
    image: '',
    moods: ['Devastated']
  }
]

export const getFoodbyMood = mood =>
  food.filter(f => f.moods.indexOf(mood) !== -1)
