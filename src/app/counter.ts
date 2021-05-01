import { entity, persistence } from 'simpler-state';


export const counter = entity(0,[persistence("counter")]);
export const timer = entity(0);

export const reset = () => {
  counter.set(0)
}

export const increment = (by:number) => {
  counter.set(value => value + by)
  // --OR-->  counter.set(counter.get() + by)  
}

export const incrementByTime = (time:number,by:number) => {
  setTimeout(()=>{
    counter.set(value=>value+by);
  },time);
  
  let progress = setInterval(()=>{
    timer.set(value=>value+0.5);
    if(timer.get()===100) {
      clearInterval(progress);
      timer.set(0);
    };
  },time/200);
}
