import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddMallComponent } from '../add-mall/add-mall.component';

@Component({
  selector: 'app-list-malls',
  templateUrl: './list-malls.component.html',
  styleUrls: ['./list-malls.component.css'],
})
export class ListMallsComponent implements AfterViewInit {
  value = '';
  displayedColumns: string[] = [
    'Name',
    'Address',
    'City',
    'Description',
    'Actions',
  ];

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  public dialog = inject(MatDialog);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openAddMallDialog(): void {
    this.dialog.open(AddMallComponent, {
      width: '600px',
    });
  }
}

export interface PeriodicElement {
  name: string;
  address: string;
  city: string;
  description: string;
  image: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    address: 'Avenue Allal Al Fassi',
    name: 'Borj Fez',
    city: 'Fez',
    description:
      "un centre commercial situé à Fès qui s'étend sur trois niveaux...",
    image: 'avatar.png',
  },
  {
    address: 'Avenue Allal Al Fassi',
    name: 'Borj Fez',
    city: 'Fez',
    description:
      "un centre commercial situé à Fès qui s'étend sur trois niveaux...",
    image: 'avatar.png',
  },
  {
    address: 'Avenue Allal Al Fassi',
    name: 'Borj Fez',
    city: 'Fez',
    description:
      "un centre commercial situé à Fès qui s'étend sur trois niveaux...",
    image: 'avatar.png',
  },
  {
    address: 'Avenue Allal Al Fassi',
    name: 'Borj Fez',
    city: 'Fez',
    description:
      "un centre commercial situé à Fès qui s'étend sur trois niveaux...",
    image: 'avatar.png',
  },
  {
    address: 'Avenue Allal Al Fassi',
    name: 'Borj Fez',
    city: 'Fez',
    description:
      "un centre commercial situé à Fès qui s'étend sur trois niveaux...",
    image: 'avatar.png',
  },
  {
    address: 'Avenue Allal Al Fassi',
    name: 'Borj Fez',
    city: 'Fez',
    description:
      "un centre commercial situé à Fès qui s'étend sur trois niveaux...",
    image: 'avatar.png',
  },
  {
    address: 'Avenue Allal Al Fassi',
    name: 'Borj Fez',
    city: 'Fez',
    description:
      "un centre commercial situé à Fès qui s'étend sur trois niveaux...",
    image: 'avatar.png',
  },
  {
    address: 'Avenue Allal Al Fassi',
    name: 'Borj Fez',
    city: 'Fez',
    description:
      "un centre commercial situé à Fès qui s'étend sur trois niveaux...",
    image: 'avatar.png',
  },
  {
    address: 'Avenue Allal Al Fassi',
    name: 'Borj Fez',
    city: 'Fez',
    description:
      "un centre commercial situé à Fès qui s'étend sur trois niveaux...",
    image: 'avatar.png',
  },
  {
    address: 'Avenue Allal Al Fassi',
    name: 'Borj Fez',
    city: 'Fez',
    description:
      "un centre commercial situé à Fès qui s'étend sur trois niveaux...",
    image: 'avatar.png',
  },
];
