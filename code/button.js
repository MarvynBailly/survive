class Button {
    constructor(x, y, width, height, label) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.label = label;
    }

    render() {
        fill(200);
        rect(this.x, this.y, this.width, this.height);
        fill(0);
        textAlign(CENTER, CENTER);
        textSize(16);
        text(this.label, this.x + this.width / 2, this.y + this.height  / 2);
    }
}