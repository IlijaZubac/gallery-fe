import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MyGalleriesComponent } from '../my-galleries/my-galleries.component';
import { GalleryService } from '../../auth/gallery.service';

@Component({
  selector: 'app-all-galleries',
  templateUrl: './all-galleries.component.html',
  styleUrls: ['./all-galleries.component.css']
})

  @Component({
    selector: 'app-all-galleries',
    templateUrl: './all-galleries.component.html'
  })
  export class AllGalleriesComponent implements OnInit {
  
    private galleries: MyGalleriesComponent[]=[];
  
    constructor(private galleryService: GalleryService) { }
  
    public ngOnInit() {
      this.galleryService.getGalleries().subscribe(data => {
          this.galleries = data;
      }, (err: HttpErrorResponse) => {
          alert(`Backend returned code ${err.status} with message: ${err.error}`);
      });
  }
  
  
  }
