import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {RoomsComponent} from "./rooms/rooms.component";

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello world from inline template.</h1>
  // <h2><p>Testing multiline using backtick.</p></h2>
  // `,
  styleUrls: ['./app.component.scss'],
  styles: [
    `h1 {color: #ffbbff}`,
    `h2 {color: #ffdd00}`
  ]
})
export class AppComponent implements OnInit{
  title = 'hotelinventory';
  role = 'Admin';

  @ViewChild('name', {static: true}) name!: ElementRef;

  ngOnInit() {
    this.name.nativeElement.innerText = "Hillbilly Hotel";
  }

    /*  @ViewChild('user', { read : ViewContainerRef }) vcr!:ViewContainerRef;

      ngAfterViewInit() {
        const componentRef = this.vcr.createComponent(RoomsComponent);
        componentRef.instance.numberOfRooms = 50;
      }*/

}
