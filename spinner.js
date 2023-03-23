import spinners from 'cli-spinners';

class Spinner {
  constructor() {
    this.frames = [
      '\u25B4', // U+25B4
      '\u25B2', // U+25B2
      '\u25B3', // U+25B3
      '\u25B3', // U+25B3
      '\u25BD', // U+25BD
      '\u25BC', // U+25BC
      '\u25BE', // U+25BE
    ];
    this.currentFrame = 0;
    this.interval = null;
    this.delay = 100;
  }

  start() {
    process.stdout.write(this.frames[this.currentFrame]);
    this.interval = setInterval(() => {
      this.currentFrame = (this.currentFrame + 1) % this.frames.length;
      process.stdout.moveCursor(-1, 0);
      process.stdout.write(this.frames[this.currentFrame]);
    }, this.delay);
  }

  stop() {
    clearInterval(this.interval);
    process.stdout.moveCursor(1, 0);
    process.stdout.write(' ');
  }
}

export default Spinner ;
