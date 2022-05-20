import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    });

    it('should create the app', () => {
        // eslint-disable-next-line @typescript-eslint/typedef
        const fixture = TestBed.createComponent(AppComponent);
        // eslint-disable-next-line @typescript-eslint/typedef
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'moneystat'`, () => {
        // eslint-disable-next-line @typescript-eslint/typedef
        const fixture = TestBed.createComponent(AppComponent);
        // eslint-disable-next-line @typescript-eslint/typedef
        const app = fixture.componentInstance;
        expect(app.title).toEqual('moneystat');
    });

    it('should render title', () => {
        // eslint-disable-next-line @typescript-eslint/typedef
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        // eslint-disable-next-line @typescript-eslint/typedef
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('.content span')?.textContent).toContain('moneystat app is running!');
    });
});
