export function formatDate(date: Date) {
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
}

export function formatTime(date: Date) {
  const time = date;
  var min;
  var hour;
  var m = time.getMinutes();
  var h = time.getHours();
  if(m<10){
    min = '0' + String(m);
  } else {
    min = String(m)
  }

  if(h<10){
    hour = '0' + String(h);
  } else {
    hour = String(h)
  }

  return `${hour}:${min}`;
}

export function calcTime(laterHour: Date, earlyHour: Date) {
  const result = laterHour.getTime() - earlyHour.getTime();
  const diffTime = Math.floor(result / (1000 * 60));
    return diffTime;
}

export function calcTimeString(laterHour: string , earlyHour: string){
  const exchangeLateDate = new Date(laterHour);
  const exchangeEarlyDate = new Date(earlyHour);
  const result = exchangeLateDate.getTime() - exchangeEarlyDate.getTime();
  const diffTime = Math.floor(result/(1000 * 60)).toString();
  return diffTime;
}