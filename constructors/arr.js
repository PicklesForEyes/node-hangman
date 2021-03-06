var Word = require('./word.js');

var arr = [
  'cabinet',
  'caddy',
  'cake pan',
  'cake stand',
  'can',
  'can opener',
  'carafe',
  'casserole',
  'cast iron pan',
  'china',
  'chop',
  'chopsticks',
  'cleanser',
  'coffee grinder',
  'coffee maker',
  'coffee mill',
  'colander',
  'cook',
  'cookbook',
  'cooker',
  'cookie cutter',
  'cookie sheet',
  'corn pick',
  'counter',
  'creamer',
  'crockpot',
  'cup',
  'cupboard',
  'custard cup',
  'cutlery',
  'cutting board',
  'table',
  'tablecloth',
  'tablespoon',
  'tea cup',
  'tea infuser',
  'teapot',
  'teaspoon',
  'thermometer',
  'timer',
  'tin',
  'toaster',
  'toaster oven',
  'tongs',
  'trash bags',
  'trash can',
  'tray',
  'trivet',
  'tumbler',
  'tureen',
  'marinate',
  'masher',
  'measuring cup',
  'measuring spoons',
  'meat grinder',
  'meat tenderizer',
  'meat thermometer',
  'microwave oven',
  'mixer',
  'mixing bowl',
  'mold',
  'mop',
  'mortar and pestle',
  'muffin pan',
  'mug'
];

var wordObjects = [];

for(var i = 0; i < arr.length; i++) {
  wordObjects.push(new Word(arr[i]));
}

module.exports = wordObjects;