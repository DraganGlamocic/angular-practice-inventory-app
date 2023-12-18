import {Component, OnInit} from '@angular/core';
import {Room, RoomList} from "./rooms";

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName = 'Hillbilly Hotel'
  numberOfRooms = 10

  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList: RoomList[] = [];


  constructor() {
  }

  ngOnInit(): void {
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

  toggle() {
    this.hideRooms = !this.hideRooms;
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
