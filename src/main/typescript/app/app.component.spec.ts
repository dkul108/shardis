/* tslint:disable:no-unused-variable */
import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {ClarityModule} from 'clarity-angular';
import {RouterTestingModule} from '@angular/router/testing';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {CoreModule} from './core/core.module';
import {CounterModule} from './counter/counter.module';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let element: Element;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule,
        CoreModule,
        CounterModule,
        ReactiveFormsModule,
        ClarityModule.forRoot(),
        RouterTestingModule
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    element = fixture.nativeElement;
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create the app', async(() => {
    expect(element).toBeTruthy();
  }));

  it(`should have as title 'shardis works!'`, async(() => {
    expect(component.title).toEqual('shardis works!');
  }));

  it('should render title in a h1 tag', async(() => {
    expect(element.querySelector('h1').textContent).toContain('shardis works!');
  }));
});
