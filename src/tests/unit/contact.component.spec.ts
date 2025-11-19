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
    const event = { target: { value: 'Ashley' } } as any;
    component.updateName(event);
    expect(component.name()).toBe('Ashley');
  });

  it('updateEmail devrait mettre à jour le signal email', () => {
    const event = { target: { value: 'ashley@example.com' } } as any;
    component.updateEmail(event);
    expect(component.email()).toBe('ashley@example.com');
  });

  it('updateMessage devrait mettre à jour le signal message', () => {
    const event = { target: { value: 'Hello!' } } as any;
    component.updateMessage(event);
    expect(component.message()).toBe('Hello!');
  });

  it('submit (cas succès) devrait appeler fetch, activer success et vider les champs', async () => {
    // mock du fetch qui retourne OK
    const fetchSpy = spyOn(window, 'fetch').and.resolveTo({
      ok: true
    } as Response);

    const alertSpy = spyOn(window, 'alert');

    component.name.set('Ashley');
    component.email.set('ashley@example.com');
    component.message.set('Coucou le formulaire');

    const fakeEvent = { preventDefault: () => {} } as Event;

    await component.submit(fakeEvent);

    expect(fetchSpy).toHaveBeenCalledWith(
      'https://formspree.io/f/mnnwjgzr',
      jasmine.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Ashley',
          email: 'ashley@example.com',
          message: 'Coucou le formulaire'
        })
      })
    );

    expect(component.success()).toBeTrue();
    expect(component.name()).toBe('');
    expect(component.email()).toBe('');
    expect(component.message()).toBe('');
    expect(alertSpy).not.toHaveBeenCalled();
  });
});
