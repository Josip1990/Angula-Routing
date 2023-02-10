import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  rooms = [
    {
      id: 1,
      name: 'serverRoom',
      capacity: 0,
      isOccupied: 'true',
    },
    {
      id: 2,
      name: 'conferenceRoom',
      capacity: 10,
      isOccupied: 'true',
    },
    {
      id: 3,
      name: 'directorRoom',
      capacity: 1,
      isOccupied: 'true',
    },
    {
      id: 4,
      name: 'supportRoom',
      capacity: 2,
      isOccupied: 'false',
    },
    {
      id: 5,
      name: 'teamLeadRoom',
      capacity: 5,
      isOccupied: 'true',
    },
    {
      id: 6,
      name: 'classRoom',
      capacity: 20,
      isOccupied: 'true',
    },
    {
      id: 7,
      name: 'techLeadRoom',
      capacity: 8,
      isOccupied: 'false',
    },
    {
      id: 8,
      name: 'devRoom',
      capacity: 7,
      isOccupied: 'true',
    },
    {
      id: 9,
      name: 'Room',
      capacity: 5,
      isOccupied: 'true',
    },
  ];
  constructor() { }
}
