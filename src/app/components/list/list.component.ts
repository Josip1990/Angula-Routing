import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoomsService } from './../../services/rooms.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  constructor(private router: Router, private roomsService: RoomsService) {
    this.rooms = roomsService.rooms;
  }

  rooms: any[];

  navigateToDetail(id: number) {
    this.router.navigate(['/detail', id]);
  }
}
