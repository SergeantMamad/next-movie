"use client"
export function ToHour(time:number) {
  var hours = Math.trunc(time/60);
  var minutes = time % 60;
  return hours+"h"+minutes+"m"
}