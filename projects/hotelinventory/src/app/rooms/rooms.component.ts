import {
  AfterViewChecked,
  AfterViewInit,
  Component, /*DoCheck,*/
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {Room, RoomList} from "./rooms";
import {HeaderComponent} from "../header/header.component";


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

  constructor() {
  }

  ngOnInit(): void {
    // console.log(this.headerComponent);
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 500,
        photos: 'https://unsplash.com/photos/a-living-room-with-a-couch-and-a-table-76JYlSoAYM4',
        checkinTime: new Date('11-12-2023'),
        checkoutTime: new Date('12-12-2023'),
        rating: 4.55,
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 600,
        photos: 'https://unsplash.com/photos/a-living-room-with-a-couch-and-a-table-76JYlSoAYM4',
        checkinTime: new Date('11-12-2023'),
        checkoutTime: new Date('12-12-2023'),
        rating: 4.37,
      },
      {
        roomNumber: 3,
        roomType: 'Private Suite',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 1000,
        photos: 'https://unsplash.com/photos/a-green-and-black-background-with-a-lot-of-lights-hVm4zmZYnYg',
        checkinTime: new Date('11-12-2023'),
        checkoutTime: new Date('12-12-2023'),
        rating: 3.94,
      }
    ];
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
