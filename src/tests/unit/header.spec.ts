import { ComponentFixture, TestBed } from '@angular/core/testing';
import {Header} from '@app/shared/components/header/header';

describe('Header Component', () => {
  let fixture: ComponentFixture<Header>;
  let component: Header;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header]
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger a download when downloadCV is called', () => {
    const mockLink = document.createElement('a');
    const createElementSpy = spyOn(document, 'createElement').and.returnValue(mockLink);
    const clickSpy = spyOn(mockLink, 'click');

    component.downloadCV();

    expect(createElementSpy).toHaveBeenCalledWith('a');
    expect(mockLink.href).toContain('assets/CV_Ashley_Labory.pdf');
    expect(mockLink.download).toBe('CV_Ashley_Labory.pdf');
    expect(clickSpy).toHaveBeenCalled();
  });


  it('should call downloadCV() when button is clicked', () => {
    const downloadSpy = spyOn(component, 'downloadCV');
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');
    button.click();

    expect(downloadSpy).toHaveBeenCalled();
  });

});
