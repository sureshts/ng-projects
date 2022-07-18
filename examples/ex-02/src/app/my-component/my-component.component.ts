import { HttpClient } from '@angular/common/http';
import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss'],
})
export class MyComponentComponent implements OnInit, OnChanges, OnDestroy {
  @Input() value: string = '';
  data$!: Observable<any>;
  subscription1$!: Subscription;
  constructor(private httpClient: HttpClient) {
    console.log('**** constructor');
  }

  ngOnInit(): void {
    console.log('**** ngOnInit');

    // const promise = new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(1);
    //   }, 3000);
    // });

    // promise.then((value) => {
    //   debugger;
    //   console.log(value);
    // });

    const observeable = new Observable((observer) => {
      setTimeout(() => {
        observer.next('1');
      }, 1000);
      setTimeout(() => {
        observer.next('2');
      }, 3000);
    });

    observeable.subscribe((value) => {
      console.log(value);
    });

    this.data$ = this.httpClient.get<any>(
      'https://api.spacexdata.com/v3/launches'
    );

    this.subscription1$ = this.httpClient
      .get<any>('https://api.spacexdata.com/v3/launches')
      .subscribe((data) => {
        console.log(data);
      });
  }

  ngOnChanges(simpleChange: SimpleChanges) {
    console.log('**** ngOnChanges');
  }

  ngOnDestroy() {
    this.subscription1$.unsubscribe();
    console.log('**** ngOnDestroy');
  }
}
