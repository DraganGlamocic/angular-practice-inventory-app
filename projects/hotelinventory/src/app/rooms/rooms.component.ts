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

    rooms: Room = {
        totalRooms: 20,
        availableRooms: 10,
        bookedRooms: 5
    }

    roomList: RoomList[] = [
        {
            roomNumber: 1,
            roomType: 'Deluxe Room',
            amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
            price: 500,
            photos: 'https://unsplash.com/photos/a-living-room-with-a-couch-and-a-table-76JYlSoAYM4',
            checkinTime: new Date('11-12-2023'),
            checkoutTime: new Date('12-12-2023'),
        },
        {
            roomNumber: 2,
            roomType: 'Deluxe Room',
            amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
            price: 600,
            photos: 'https://unsplash.com/photos/a-living-room-with-a-couch-and-a-table-76JYlSoAYM4',
            checkinTime: new Date('11-12-2023'),
            checkoutTime: new Date('12-12-2023'),
        },
        {
            roomNumber: 3,
            roomType: 'Private Suite',
            amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
            price: 1000,
            photos: 'https://unsplash.com/photos/a-living-room-with-a-couch-and-a-table-76JYlSoAYM4',
            checkinTime: new Date('11-12-2023'),
            checkoutTime: new Date('12-12-2023'),
        }
    ];


    constructor() {
    }

    ngOnInit(): void {
    }

    toggle() {
        this.hideRooms = !this.hideRooms;
    }

}
