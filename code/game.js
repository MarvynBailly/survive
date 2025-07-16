class Game {
    constructor(pos, size) {
        this.pos = pos;
        this.size = size;
        this.backgroundColor = color(50);
        this.showGridLines = true;
    }
  
    start() {
        this.terrain = new Terrain(this.pos, this.size, this.size);

        const randomTile = this.terrain.getRandomSuitableTile();
        const randomTilePos = createVector(randomTile.x, randomTile.y);
        this.player = new Player(randomTilePos)

        
    }
  
    update() {
        this.player.update();
    }
    
    render() {
        this.renderBackground();
        this.renderText();
    
        this.terrain.render();
        this.player.render();
    }
  
    renderBackground() {
        strokeWeight(2);
        if (this.showGridLines) {
            stroke(0);
        }else{
            noStroke();
        }
        fill(this.backgroundColor);
        rect(this.pos.x, this.pos.y, this.size, this.size);
    }

    renderText() {
        strokeWeight(4);
        textFont('Courier New');
        stroke(0);
        fill(200, 0, 0);
        textSize(64);
        textAlign(CENTER, CENTER);
        text("Survive", this.pos.x, this.pos.y - 50);
    }
}
  