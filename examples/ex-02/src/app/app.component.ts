import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ex-02';
  hidden: boolean = false;

  value: string = 'default';
  // data: string = '';
  data: string[] = ['1', '2', '3'];
  currentStyles: any;

  onClick() {
    debugger;
    this.hidden = !this.hidden;
    this.value = 'XYZ';
  }

  getClass() {
    return !this.hidden ? 'app__container-2' : '';
  }

  ngOnInit() {
    this.currentStyles = {
      'background-color': this.hidden ? 'red' : 'blue',
    };
  }
}
