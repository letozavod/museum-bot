import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatMessagePipe'})
export class FormatMessagePipe implements PipeTransform {
  transform(message: string): string {
    return message.replace('\n', '<br>');

  }
}