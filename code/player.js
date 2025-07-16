class Player {
    constructor(pos) {
        this.pos = pos;
        this.size = 10;
        this.speed = 4; 
    }

    move(direction) {
        if (keyIsDown(UP_ARROW) || keyIsDown(87)) { // W key
            this.pos.y -= this.speed;
        }
        if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) { // S key
            this.pos.y += this.speed;
        } 
        if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) { // A key
            this.pos.x -= this.speed;
        }
        if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) { // D key
            this.pos.x += this.speed;
        }
    }

    sprint() {
        if (keyIsDown(SHIFT)) {
            this.speed = 8; // Double speed when sprinting
        } else {
            this.speed = 4; // Normal speed
        }
    }

    update() {
        this.move();
        this.sprint();
    }

    render() { 
        strokeWeight(2);
        stroke(0);
        fill(255, 0, 0);
        ellipse(this.pos.x, this.pos.y, this.size, this.size); // Draw player as a red circle
    
    
    }
}