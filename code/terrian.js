class Terrain {
    constructor(pos, width, height) {
        this.pos = pos;
        this.tiles = [];
        this.width = width;
        this.height = height;
        this.tileSize = 5; // Size of each tile
        this.rows = Math.floor(height / this.tileSize);
        this.cols = Math.floor(width / this.tileSize);
        this.terrainSeed = 400; 
        // this.terrainSeed = random(1000); 
        this.generateTerrain();

        this.suitableTiles = this.tiles.filter(tile => SUITABLE_BUILDING_TILES.includes(tile.name));
    }

    generateTerrain() {
        noiseSeed(this.terrainSeed);
        const terrainWidth = this.cols * this.tileSize;
        const terrainHeight = this.rows * this.tileSize;
        const terrainOffsetX = this.width - terrainWidth;
        const terrainOffsetY = this.height - terrainHeight;
        for (let ind = 0; ind < this.rows * this.cols; ind++) {
            let row = Math.floor(ind / this.cols);
            let col = ind % this.cols;

            let x = col * this.tileSize + this.pos.x + terrainOffsetX / 2;
            let y = row * this.tileSize + this.pos.y + terrainOffsetY / 2;
            let tile = this.createTile(x, y);
            this.tiles[ind] = tile;
        }
    }

    createTile(x, y) {
        // use Perlin noise to create tiles
        let noiseValue = this.generateNoise(x, y);
        let tileTypeInfo = this.getTileType(noiseValue); 
        
        let tile = {
            x: x,
            y: y,
            color: tileTypeInfo.color,
            name: tileTypeInfo.name,
        };

        return tile;
    }

    generateNoise(x, y) {
        const freqX = 0.005;
        const freqY = 0.005;

        const elevation = noise(x * freqX, y * freqY);
        return elevation;
    }

    getTileType(noiseValue) {
        for (let type of TILE_TYPES) {
            const [min, max] = type.range;
            if (noiseValue >= min && noiseValue < max) {
                return type;
            }
        }
        // Fallback
        return {
            name: 'void',
            color: color(255, 0, 255)
        };
    }



    ////////////////////
    // Helpful functions
    ////////////////////
    getRandomSuitableTile() {
        const randomIndex = Math.floor(Math.random() * this.suitableTiles.length);
        return this.suitableTiles[randomIndex];
    }




    render() {
        strokeWeight(1);
        stroke(100);
        // render based on tile type
        for (let tile of this.tiles) {
            fill(tile.color);
            rect(tile.x, tile.y, this.tileSize, this.tileSize);
        }
    }

}