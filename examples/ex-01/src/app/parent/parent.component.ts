import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  onChangeEvent(event: Event) {
    const input = event.target as HTMLInputElement;

    console.log('Input Value :' + input.value);
  }
}
