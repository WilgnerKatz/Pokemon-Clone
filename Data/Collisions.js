//Collission Array Points From Map
const collisions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 1025, 0, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 1025, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 0, 1025, 0, 0, 1025, 0, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0,
    0, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 1025, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 0, 1025, 0, 0, 1025, 0, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0,
    0, 1025, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 1025, 0, 1025, 1025, 1025, 1025, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0,
    0, 1025, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1025, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 1025, 1025, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0, 1025, 1025, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0,
    0, 1025, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 1025, 0, 0, 1025, 1025, 1025, 1025, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0,
    0, 1025, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 1025, 0, 1025, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0,
    0, 1025, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 1025, 0, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0,
    0, 1025, 1025, 1025, 1025, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 1025, 1025, 1025, 1025, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 1025, 0, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0,
    0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 1025, 1025, 1025, 1025, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0,
    1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    1025, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 1025, 1025, 1025, 0, 1025, 1025, 1025, 0, 0, 1025, 0, 0, 0, 1025, 1025, 1025, 0, 1025, 1025, 1025, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 1025, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 1025, 0, 1025, 1025, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0,
    0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 1025, 0, 1025, 1025, 1025, 1025, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0,
    0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 1025, 0, 1025, 0, 0, 1025, 0, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0,
    0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 1025, 0, 1025, 1025, 0, 0, 1025, 1025, 0, 1025, 1025, 0, 1025, 1025, 0, 1025, 1025, 0, 0, 0, 0, 1025, 0, 0, 0, 1025, 1025, 0, 1025, 0, 0, 1025, 0, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0,
    0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 1025, 1025, 0, 0, 1025, 1025, 0, 0, 1025, 0, 0, 1025, 0, 0, 1025, 0, 0, 1025, 0, 0, 0, 1025, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 1025, 0, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0,
    0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 1025, 0, 0, 0, 1025, 0, 0, 1025, 1025, 1025, 1025, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0,
    0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 1025, 0, 0, 0, 0, 1025, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0, 1025, 1025, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 1025, 1025, 1025, 1025, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0,
    0, 0, 0, 0, 0, 1025, 1025, 0, 1025, 1025, 0, 1025, 1025, 0, 1025, 1025, 0, 1025, 1025, 0, 1025, 1025, 0, 1025, 1025, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0, 1025, 0, 0, 1025, 0, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0,
    0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 1025, 0, 0, 1025, 0, 0, 1025, 0, 0, 1025, 0, 0, 1025, 0, 0, 1025, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0, 1025, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 1025, 0, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0,
    0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0, 1025, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 1025, 0, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0,
    0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 1025, 0, 0, 0, 0, 1025, 0, 0, 1025, 1025, 1025, 1025, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 1025, 0, 0, 1025, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 1025, 0, 0, 0, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 1025, 0, 0, 0, 0, 1025, 0, 0, 0, 0, 1025, 0, 1025, 1025, 1025, 1025, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0,
    0, 0, 0, 0, 0, 1025, 1025, 0, 1025, 1025, 0, 1025, 1025, 0, 1025, 1025, 0, 1025, 1025, 0, 1025, 1025, 0, 1025, 1025, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 1025, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 1025, 0, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0,
    0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 1025, 0, 0, 1025, 0, 0, 1025, 0, 0, 1025, 0, 0, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 1025, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 1025, 0, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0,
    0, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0, 1025, 0, 0, 1025, 0, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 1025, 0, 0, 1025, 0, 0, 0,
    0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 1025, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 1025, 1025, 1025, 1025, 0, 0, 0, 0, 0, 1025, 1025, 1025, 1025, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 1025, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1025, 0, 0, 0, 1025, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]