import { newE2EPage } from '@stencil/core/testing';

describe('z-myz-list-item test end2end', () => {

  it('Test that component exists', async () => {
    const page = await newE2EPage();
    await page.setContent(`<z-myz-list-item></z-myz-list-item>`);
    const el = await page.find('z-myz-list-item');
    expect(el).not.toBeNull();
    expect(el.shadowRoot).not.toBeNull;
  });


  it('Test that prop text is created', async () => {
    const page = await newE2EPage();
    await page.setContent(`<z-myz-list-item></z-myz-list-item>`);


    await page.$eval('z-myz-list-item', (elm: any) => {
      elm.text = 'elemento';
    });

    await page.waitForChanges();

    const el = await page.find('z-myz-list-item >>> li > span');
    expect(el).toEqualText('elemento');

  });

  it('Test that prop link is created', async () => {
    const page = await newE2EPage();
    await page.setContent(`<z-myz-list-item></z-myz-list-item>`);


    await page.$eval('z-myz-list-item', (elm: any) => {
      elm.text = 'elemento';
      elm.link = 'http://www.google.it';
    });

    await page.waitForChanges();

    const el = await page.find('z-myz-list-item >>> li span a ');
    expect(el).toEqualText('elemento');
    expect(el.getAttribute('href')).toBe('http://www.google.it');

    const iconElem = await page.find('z-myz-list-item >>> li span img ');

    expect(iconElem).toBeNull;
  });
});
