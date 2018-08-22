// import phaser, commons js style
const Phaser = require("phaser");

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: {
    preload() {
      this.load.image("logo", "assets/logo.png");
    },
    create() {
      const logo = this.add.image(400, 150, "logo");

      this.tweens.add({
        targets: logo,
        y: 450,
        duration: 2000,
        ease: "Power2",
        yoyo: true,
        loop: -1
      });
    }
  }
};

// bootstrap the game
const game = new Phaser.Game(config);
