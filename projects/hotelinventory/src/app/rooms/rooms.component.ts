import {
  AfterViewChecked,
  AfterViewInit,
  Component, OnDestroy, /*DoCheck,*/
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {Room, RoomList} from "./rooms";
import {HeaderComponent} from "../header/header.component";
import {RoomsService} from "./services/rooms.service";


@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, AfterViewInit /*,DoCheck*/ , AfterViewChecked{

  hotelName = 'Hillbilly Hotel'
  numberOfRooms = 10

  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  title = 'Room List';

  roomList: RoomList[] = [];

  @ViewChild(HeaderComponent/*, {static: true}*/) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>

  // roomService = RoomsService();

  constructor(private roomsService: RoomsService) {  }

  ngOnInit(): void {
this.roomList = this.roomsService.getRooms();
  }

  ngDoCheck() {
    console.log('On change is called.')
  }

  ngAfterViewInit() {
    this.headerComponent.title = "Rooms View";
    this.headerChildrenComponent.last.title="Last Title";
    // this.headerChildrenComponent.get(0).title="First Title";
  }

  ngAfterViewChecked() {
    console.log()
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://unsplash.com/photos/a-living-room-with-a-couch-and-a-table-76JYlSoAYM4',
      checkinTime: new Date('11-12-2023'),
      checkoutTime: new Date('12-12-2023'),
      rating: 4.64
    }

    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
    // The ... operator is used to add a new room object to
    // the existing roomList array without modifying its contents.
  }
}
