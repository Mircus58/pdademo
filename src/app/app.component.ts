import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import '@khmyznikov/pwa-install';
import { UpdatesComponent } from './components/update/update.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UpdatesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'pdademo';

}
