import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Contact } from '@app/features/contact/contact';

describe('Contact (intégration)', () => {
  let fixture: ComponentFixture<Contact>;
  let component: Contact;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact]
    }).compileComponents();

    fixture = TestBed.createComponent(Contact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('devrait afficher le titre "Entrons en contact"', () => {
    const h2 = fixture.debugElement.query(By.css('h2')).nativeElement as HTMLHeadingElement;
    expect(h2.textContent?.trim()).toBe('Entrons en contact');
  });

  it('devrait permettre de saisir le nom, l’email et le message', () => {
    const nameInput = fixture.debugElement.query(By.css('input[type="text"]')).nativeElement as HTMLInputElement;
    const emailInput = fixture.debugElement.query(By.css('input[type="email"]')).nativeElement as HTMLInputElement;
    const messageTextarea = fixture.debugElement.query(By.css('textarea')).nativeElement as HTMLTextAreaElement;

    nameInput.value = 'Ashley';
    nameInput.dispatchEvent(new Event('input'));

    emailInput.value = 'ashley@example.com';
    emailInput.dispatchEvent(new Event('input'));

    messageTextarea.value = 'Message de test';
    messageTextarea.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(component.name()).toBe('Ashley');
    expect(component.email()).toBe('ashley@example.com');
    expect(component.message()).toBe('Message de test');
  });

  it('devrait soumettre le formulaire et appeler alert', () => {
    const alertSpy = spyOn(window, 'alert');
    const consoleSpy = spyOn(console, 'log');

    component.name.set('Ashley');
    component.email.set('ashley@example.com');
    component.message.set('Hello!');
    fixture.detectChanges();

    const form = fixture.debugElement.query(By.css('form')).nativeElement as HTMLFormElement;
    form.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    expect(alertSpy).toHaveBeenCalledWith('Merci ! Votre message a été envoyé.');
    expect(consoleSpy).toHaveBeenCalled();
  });
});
