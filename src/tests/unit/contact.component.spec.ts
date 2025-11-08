import { Contact } from '@app/features/contact/contact';

describe('Contact (unitaire)', () => {
  let component: Contact;

  beforeEach(() => {
    component = new Contact();
  });

  it('devrait initialiser les signaux vides', () => {
    expect(component.name()).toBe('');
    expect(component.email()).toBe('');
    expect(component.message()).toBe('');
  });

  it('updateName devrait mettre à jour le signal name', () => {
    const event = {
      target: { value: 'Ashley' }
    } as unknown as Event;

    component.updateName(event);

    expect(component.name()).toBe('Ashley');
  });

  it('updateEmail devrait mettre à jour le signal email', () => {
    const event = {
      target: { value: 'ashley@example.com' }
    } as unknown as Event;

    component.updateEmail(event);

    expect(component.email()).toBe('ashley@example.com');
  });

  it('updateMessage devrait mettre à jour le signal message', () => {
    const event = {
      target: { value: 'Hello!' }
    } as unknown as Event;

    component.updateMessage(event);

    expect(component.message()).toBe('Hello!');
  });

  it('submit devrait appeler console.log et alert avec les bonnes données', () => {
    const consoleSpy = spyOn(console, 'log');
    const alertSpy = spyOn(window, 'alert');

    // on prépare des données
    component.name.set('Ashley');
    component.email.set('ashley@example.com');
    component.message.set('Coucou le formulaire');

    // on simule un submit
    const fakeEvent = {
      preventDefault: () => {}
    } as Event;

    component.submit(fakeEvent);

    expect(consoleSpy).toHaveBeenCalledWith('Formulaire envoyé (simulation) :', {
      nom: 'Ashley',
      email: 'ashley@example.com',
      message: 'Coucou le formulaire'
    });
    expect(alertSpy).toHaveBeenCalledWith('Merci ! Votre message a été envoyé.');
  });
});
