import Spinner from './spinner.js';

const spinner = new Spinner();
spinner.start();
setTimeout(() => {
  spinner.stop();
}, 5000);
