/**
 * Timer class
 * Functions: start, stop, status
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
    this.isDone = false;
  }
  start= () => {
    console.log(`Timer started. ${this.remainingTime}ms remain.`);
    this.timerHandle = setInterval(this.update, this.interval);
    this.isDone = false;
  }
  stop = () => {
    console.log("Timer stopped.")
    clearInterval(this.timerHandle);
  }
  update = () => {
    //console.log("Timer updated.")
    // Update elapsed time
    this.remainingTime -= this.interval;

    // Perform update action
    this.onUpdate();

    // Check to see if timer has reached end
    if (this.remainingTime <= 0) {
      this.stop();
      this.isDone = true;
      this.onComplete();
    }
  }
  status = () => {
    return (this.maxTime - this.remainingTime) / this.maxTime;
  }
  reset = () => {
    console.log("Timer reset.")
    if (this.timerHandle) {
      clearInterval(this.timerHandle);
    }
    // Reset elapsed time
    this.remainingTime = this.maxTime;
    this.isDone = false;
  }
}


export default Timer;

