/**
 * Timer class
 * Functions: start, stop, status, reset, update
 * Parameters: maxTime, onComplete, (elapsedTime, interval)
 * Times are in ms.
 */
class Timer {
  constructor(maxTime, onComplete=()=>{}, onUpdate=()=>{}, remainingTime=maxTime, interval=100) {
    this.maxTime = maxTime;
    this.remainingTime = remainingTime;
    this.onComplete = onComplete;
    this.onUpdate = onUpdate;
    this.interval = interval;
    this.timerHandle = null;
    this.isRunning = false;
  }
  start = () => {
    if (!this.isRunning) {
      console.log(`Timer started. ${this.remainingTime}ms remain.`);
      this.timerHandle = setInterval(this.update, this.interval);
      this.isRunning = true;
    }
    else
      console.log("Timer already running.");
  }
  stop = () => {
    console.log("Timer stopped.")
    clearInterval(this.timerHandle);
    this.isRunning = false;
  }
  update = () => {
    // Update elapsed time
    this.remainingTime -= this.interval;
    // Perform update action
    this.onUpdate();
    // Check to see if timer has reached end
    if (this.remainingTime <= 0) {
      this.stop();
      this.onComplete();
    }
  }
  // Returns alpha of timer (0 to 1)
  // 0 = just started, 1 = done.
  status = () => {
    const alpha = (this.maxTime - this.remainingTime) / this.maxTime;
    return Math.min(1, alpha);
  }
  // Stops and resets timer
  reset = () => {
    console.log("Timer reset.")
    this.stop();
    if (this.timerHandle) {
      clearInterval(this.timerHandle);
    }
    // Reset elapsed time
    this.remainingTime = this.maxTime;
    this.isDone = false;
  }
}


export default Timer;

