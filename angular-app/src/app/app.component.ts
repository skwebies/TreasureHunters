import { Equipment } from './models/equipment.model';
import { ApiService } from './services/api.service';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Treasure Hunters';

  constructor() {}

  ngOnInit() {}

}
