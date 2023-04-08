import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mhrRelativeTime',
  standalone: true,
})
export class MhrRelativeTimePipe implements PipeTransform {
  transform(value: string | number | Date): string {
    const date = new Date(value);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (seconds < 60) {
      return 'just now';
    } else if (minutes < 60) {
      const minString = minutes === 1 ? 'minute' : 'minutes';
      return `${minutes} ${minString} ago`;
    } else if (hours < 24) {
      const hourString = hours === 1 ? 'hour' : 'hours';
      return `${hours} ${hourString} ago`;
    } else if (days === 1) {
      return 'yesterday';
    } else if (days < 7) {
      return `${days} days ago`;
    } else if (weeks === 1) {
      return 'last week';
    } else if (weeks < 3) {
      return `${weeks} weeks ago`;
    } else if (months === 1) {
      return 'last month';
    } else if (months < 12) {
      return `${months} months ago`;
    } else if (years === 1) {
      return 'last year';
    } else {
      return `${years} years ago`;
    }
  }
}
