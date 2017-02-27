import {Component, Pipe} from 'angular2/core';

@Pipe({
  name: 'prettyprint'
})
export class PrettyPrintPipe {
  transform(val) {
    return JSON.stringify(val, null, 2)
      .replace(/ /g, '&nbsp;')
      .replace(/\n/g, '<br/>');
  }
}

@Component({
selector: 'my-app',
template: `
    <div [innerHTML]="obj | prettyprint"></div>
`,
pipes: [ PrettyPrintPipe ]
})
export class AppComponent {
  obj = {
    test: 'testttt',
    name: 'nameeee'
  }
}