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
    this.timeStamp = Date.now();
  }
  /**
   * Start timer.
   * Records current datetime (if not running) before starting.
   */
  start = () => {
    if (!this.isRunning) {
      console.log(`Timer started. ${this.remainingTime}ms remain.`);
      this.timeStamp = Date.now();
      this.timerHandle = setInterval(this.update, this.interval);
      this.isRunning = true;
    }
    else
      console.log("Timer already running.");
  }
  stop = () => {
    console.log("Timer stopped.")
    // Update time remaining
    // this.remainingTime -= (Date.now() - this.timeStamp);
    // if (this.remainingTime <= 0)
    //   this.onComplete();
    // Stop interval
    clearInterval(this.timerHandle);
    this.isRunning = false;
  }
  update = () => {
    // Update elapsed time
    const now = Date.now();
    this.remainingTime -= (now - this.timeStamp);
    this.timeStamp = now;
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

    // Can be reset before starting
    // Check for interval
    if (this.timerHandle) {
      clearInterval(this.timerHandle);
    }
    
    // Reset elapsed time
    this.remainingTime = this.maxTime;
    this.isDone = false;
  }
}


export default Timer;

