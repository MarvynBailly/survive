const TILE_TYPES = [
    {
        name: 'deep-water',
        color: [39, 71, 144],
        range: [0.0, 0.25]
    },
    {
        name: 'shallow-water',
        color: [56, 132, 207],
        range: [0.25, 0.3]
    },
    {
        name: 'sand',
        color: [234,208,168],
        range: [0.3, 0.35]
    },
    {
        name: 'grass',
        color: [99,127,64],
        range: [0.35, 0.5]
    },
    {
        name: 'dirt',
        color: [182,159,102],
        range: [0.5, 0.6]
    },
    {
        name: 'rock',
        color: [128, 128, 128],
        range: [0.6, 0.7]
    },
    {
        name: 'dark-rock',
        color: [64, 64, 64],
        range: [0.7, 0.8]
    },
    {
        name: 'snow',
        color: [255, 255, 255],
        range: [0.8, 1.0]
    },
];

const SUITABLE_BUILDING_TILES = [
    'sand',
    'grass',
    'dirt',
    'rock',
];