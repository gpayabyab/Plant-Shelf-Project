const { Plants } = require('../models');

const plantdata = [
  {
    plant_name: 'Fiddle Leaf Fig',
    plant_type: 'Tree',
    plant_height: 'Up to 10 feet indoors',
    water: 'Moderate,prefers evenly moist soil',
    sunlight: 'Bright, indirect light.',
    humidity: 'Moderate to high'
  },
  {
    plant_name: 'Snake Plant',
    plant_type: 'Succulent',
    plant_height: '1 to 4 feet',
    water: 'Low; allow soil to dry between waterings',
    sunlight: 'Low to bright, indirect light',
    humidity: 'Low'
  },
  {
    name: 'Spider Plant',
    plant_type: 'Perennial',
    plant_height: '1 to 2 feet',
    water: 'Moderate; keep soil evenly moist',
    sunlight: 'Indirect light; can tolerate some direct sunlight',
    humidity: 'Moderate'
  },
  {
    name: 'Wax Plant (Hoya)',
    plant_type: 'Vine/Shrub',
    plant_height: 'Varies (depends on the species)',
    water: 'Moderate; let the top inch of soil dry before watering',
    sunlight: 'Bright, indirect light',
    humidity: 'Moderate'
  },
  {
    name: 'Monstera',
    plant_type: 'Vine',
    plant_height: 'Up to 10 feet',
    water: 'Moderate; keep soil evenly moist',
    sunlight: 'Bright, indirect light',
    humidity: 'Moderate'
  },
  {
    name: 'ZZ Plant (Zamioculcas Zamiifolia)',
    plant_type: 'Rhizomatous Perennial',
    plant_height: '2 to 3 feet',
    water: 'Low; allow soil to dry between waterings',
    sunlight: 'Low to bright, indirect light',
    humidity: 'Low to moderate'
  },
  {
    name: 'Pothos',
    plant_type: 'Vine',
    plant_height: 'Varies; can trail or climb',
    water: 'Low to moderate; let the top inch of soil dry before watering',
    sunlight: 'Low to bright, indirect light',
    humidity: 'Low to moderate'
  },
  {
    name: 'Aloe',
    plant_type: 'Succulent',
    plant_height: '1 to 2 feet',
    water: 'Low; allow soil to dry between waterings',
    sunlight: 'Bright, indirect light',
    humidity: 'Low'
  },
  {
    name: 'Jade Plant',
    plant_type: 'Succulent',
    plant_height: 'Up to 3 feet',
    water: 'Low; allow soil to dry between waterings',
    sunlight: 'Bright, direct light',
    humidity: 'Low'
  },
  {
    name: 'Rubber Plant',
    plant_type: 'Tree/Shrub',
    plant_height: 'Up to 8 feet',
    water: 'Moderate; keep soil evenly moist',
    sunlight: 'Bright, indirect light',
    humidity: 'Moderate'
  },
  {
    name: 'Prayer Plant',
    plant_type: 'Perennial',
    plant_height: 'Up to 1 foot',
    water: 'Moderate; keep soil evenly moist',
    sunlight: 'Low to moderate, indirect light',
    humidity: 'High'
  },
  {
    name: 'Peace Lily',
    plant_type: 'Perennial',
    plant_height: '1 to 4 feet',
    water: 'Moderate to high; keep soil consistently moist',
    sunlight: 'Low to moderate, indirect light',
    humidity: 'High'
  },
  {
    name: 'Gardenias',
    plant_type: 'Shrub',
    plant_height: '2 to 6 feet',
    water: 'Moderate; keep soil consistently moist',
    sunlight: 'Bright, indirect light',
    humidity: 'High'
  },
  {
    name: 'Pilea (Chinese Money Plant)',
    plant_type: 'Perennial',
    plant_height: 'Up to 12 inches',
    water: 'Moderate; keep soil evenly moist',
    sunlight: 'Moderate, indirect light',
    humidity: 'Moderate'
  },
  {
    name: 'Croton',
    plant_type: 'Shrub',
    plant_height: 'Up to 6 feet',
    water: 'Moderate; keep soil evenly moist',
    sunlight: 'High, indirect light',
    humidity: 'Moderate to high'
  },
  {
    name: 'Money Tree',
    plant_type: 'Tree',
    plant_height: 'Up to 6 feet',
    water: 'Moderate; keep soil evenly moist',
    sunlight: 'Bright, indirect light',
    humidity: 'Moderate'
  },
  {
    name: 'Chinese Evergreen',
    plant_type: 'Perennial',
    plant_height: '1 to 3 feet',
    water: 'Low to moderate; allow soil to dry between waterings',
    sunlight: 'Low to bright, indirect light',
    humidity: 'Low to moderate'
  },
  {
    name: 'Bird of Paradise',
    plant_type: 'Perennial',
    plant_height: '5 to 7 feet indoors',
    water: 'Moderate; keep soil evenly moist',
    sunlight: 'High, indirect light',
    humidity: 'Moderate to high'
  },
  {
    name: 'Orchid',
    plant_type: 'Epiphyte',
    plant_height: 'Varies by species',
    water: 'Moderate; allow orchid mix to dry slightly between waterings',
    sunlight: 'Moderate, indirect light',
    humidity: 'High'
  },
  {
    name: 'African Violet',
    plant_type: 'Perennial',
    plant_height: '6 to 12 inches',
    water: 'Moderate; keep soil consistently moist',
    sunlight: 'Moderate, indirect light',
    humidity: 'Moderate'
  },
  {
    name: 'Dieffenbachia (Dumb Cane)',
    plant_type: 'Perennial',
    plant_height: 'Up to 6 feet',
    water: 'Moderate; keep soil evenly moist',
    sunlight: 'Low to moderate, indirect light',
    humidity: 'Moderate to high'
  },
  {
    name: 'Bromeliad',
    plant_type: 'Perennial',
    plant_height: 'Varies by species',
    water: 'Moderate; keep the central cup filled with water',
    sunlight: 'Bright, indirect light',
    humidity: 'Moderate to high'
  },
  {
    name: 'Alocasia',
    plant_type: 'Perennial',
    plant_height: 'Varies by species',
    water: 'Moderate to high; keep soil consistently moist',
    sunlight: 'Bright, indirect light',
    humidity: 'High'
  },
  {
    name: 'Begonia',
    plant_type: 'Perennial',
    plant_height: 'Varies by species',
    water: 'Moderate; keep soil evenly moist',
    sunlight: 'Moderate, indirect light',
    humidity: 'Moderate'
  },
  {
    name: 'Calathea',
    plant_type: 'Perennial',
    plant_height: 'Varies by species',
    water: 'Moderate; keep soil consistently moist',
    sunlight: 'Low to moderate, indirect light',
    humidity: 'High'
  },
  {
    name: 'Crown of Thorns',
    plant_type: 'Succulent',
    plant_height: 'Up to 3 feet',
    water: 'Low to moderate; allow soil to dry between waterings',
    sunlight: 'High, direct light',
    humidity: 'Low'
  },
  {
    name: 'Hoya',
    plant_type: 'Vine',
    plant_height: 'Varies by species',
    water: 'Moderate; allow soil to dry between waterings',
    sunlight: 'Bright, indirect light',
    humidity: 'Moderate'
  },
  {
    name: 'Air Plant',
    plant_type: 'Epiphyte',
    plant_height: 'Varies; typically small',
    water: 'Soak in water every 1-2 weeks',
    sunlight: 'Indirect light',
    humidity: 'Moderate to high'
  },
  {
    name: 'Inch Plant (Tradescantia zebrina)',
    plant_type: 'Perennial',
    plant_height: 'Up to 12 inches',
    water: 'Moderate; keep soil evenly moist',
    sunlight: 'Bright, indirect light',
    humidity: 'Moderate'
  },
  {
    name: 'Cat Palm (Chamaedorea cataractarum)',
    plant_type: 'Palm',
    plant_height: 'Up to 5 feet',
    water: 'Moderate; keep soil evenly moist',
    sunlight: 'Low to moderate, indirect light',
    humidity: 'Moderate to high'
  }
];

const seedPaintings = () => Painting.bulkCreate(paintingdata);

module.exports = seedPaintings;