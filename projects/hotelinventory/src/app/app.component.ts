import { Component } from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello world from inline template.</h1>
  // <h2><p>Testing multiline using backtick.</p></h2>
  // `,
  styleUrls: ['./app.component.scss'],
  styles: [`h1 { color: #ffbbff}`, `h2 { color: #ffdd00}`]
})
export class AppComponent {
  title = 'hotelinventory';
}
