import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
 
})
export class LayoutComponent implements OnInit {

  constructor(private auth: AuthService) {}

  ngOnInit() {
  }

}
