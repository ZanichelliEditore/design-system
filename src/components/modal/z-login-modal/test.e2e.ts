import { newE2EPage } from "@stencil/core/testing";

type CustomWindow = Window &
  typeof globalThis & {
    onInputChange: (a) => unknown;
    onInputCheck: (a) => unknown;
  };

it("Test signup z-button should emit signupClick event", async () => {
  const page = await newE2EPage();

  // Define a window.onCustomEvent function on the page.
  let counter = 0;
  await page.exposeFunction("onSignupClick", (e) => {
    counter++;
  });

  // Attach an event listener to page to capture a custom event on page load/navigation.
  const type = "signupClick";
  page.evaluateOnNewDocument((type) => {
    document.addEventListener(type, (e) => {
      (window as CustomWindow).onSignupClick({ type, detail: e.detail });
    });
  }, type);

  await page.setContent(`<z-login-modal></z-login-modal>`);
  const button = await page.find("z-login-modal div.signup z-button");

  expect(counter).toEqual(0);
  await button.click();
  await page.waitForChanges();
  expect(counter).toEqual(1);
  await button.click();
  await page.waitForChanges();
  expect(counter).toEqual(2);
});

it("Test zaino digitale z-button should emit zainoDigitaleClick event", async () => {
  const page = await newE2EPage();

  // Define a window.onCustomEvent function on the page.
  let counter = 0;
  await page.exposeFunction("onZainoDigitaleClick", (e) => {
    counter++;
  });

  // Attach an event listener to page to capture a custom event on page load/navigation.
  const type = "zainoDigitaleClick";
  page.evaluateOnNewDocument((type) => {
    document.addEventListener(type, (e) => {
      (window as CustomWindow).onZainoDigitaleClick({ type, detail: e.detail });
    });
  }, type);

  await page.setContent(`<z-login-modal></z-login-modal>`);
  const button = await page.find(
    "z-login-modal div.providers z-button.zainoDigitale"
  );

  expect(counter).toEqual(0);
  await button.click();
  await page.waitForChanges();
  expect(counter).toEqual(1);
  await button.click();
  await page.waitForChanges();
  expect(counter).toEqual(2);
});

it("Test login form should emit loginSubmit event", async () => {
  const page = await newE2EPage();

  // Define a window.onCustomEvent function on the page.
  let loginData = null;
  await page.exposeFunction("onLoginSubmit", (e) => {
    loginData = e.detail;
  });

  // Attach an event listener to page to capture a custom event on page load/navigation.
  const type = "loginSubmit";
  page.evaluateOnNewDocument((type) => {
    document.addEventListener(type, (e) => {
      (window as CustomWindow).onLoginSubmit({ type, detail: e.detail });
    });
  }, type);

  await page.setContent(`<z-login-modal></z-login-modal>`);
  const username = await page.find("z-login-modal div.username z-input input");
  const password = await page.find("z-login-modal div.password z-input input");
  const button = await page.find("z-login-modal div.login z-button");

  expect(loginData).toEqual(null);

  // INFO: login form is not filled
  await button.click();
  await page.waitForChanges();
  expect(loginData).toEqual(null);

  // INFO: fill username field
  const usernameValue = "email@example.com";
  await username.focus();
  await page.keyboard.type(usernameValue);

  await button.click();
  await page.waitForChanges();
  expect(loginData).toEqual(null);

  // INFO: fill password field
  const passwordValue = "password";
  await password.focus();
  await page.keyboard.type(passwordValue);

  await button.click();
  await page.waitForChanges();
  expect(loginData).toEqual({
    username: usernameValue,
    password: passwordValue,
    originalUsername: usernameValue,
  });
});

it("Test username cleaning before emitting loginSubmit event", async () => {
  const page = await newE2EPage();

  // Define a window.onCustomEvent function on the page.
  let loginSubmitUsername = null;
  await page.exposeFunction("onLoginSubmit", (e) => {
    loginSubmitUsername = e.detail.username;
  });

  // Attach an event listener to page to capture a custom event on page load/navigation.
  const type = "loginSubmit";
  page.evaluateOnNewDocument((type) => {
    document.addEventListener(type, (e) => {
      (window as CustomWindow).onLoginSubmit({
        type,
        detail: e.detail,
      });
    });
  }, type);

  await page.setContent(`<z-login-modal></z-login-modal>`);
  const username = await page.find("z-login-modal div.username z-input input");
  const password = await page.find("z-login-modal div.password z-input input");
  const button = await page.find("z-login-modal div.login z-button");

  await password.focus();
  await page.keyboard.type("password");

  // INFO: trim
  let usernameValue = " email@example.com ";
  await username.focus();
  await page.keyboard.type(usernameValue);
  // await setUsernameValue(page, usernameValue);
  await button.click();
  await page.waitForChanges();
  expect(loginSubmitUsername).toEqual(usernameValue.trim());

  await resetUsernameValue(page);

  // INFO: lower case
  usernameValue = "EmaiL@Example.COM";
  await username.focus();
  await page.keyboard.type(usernameValue);
  // await setUsernameValue(page, usernameValue);
  await button.click();
  await page.waitForChanges();
  expect(loginSubmitUsername).toEqual(usernameValue.toLowerCase());

  await resetUsernameValue(page);

  // INFO: phone
  usernameValue = "123-456.789";
  await username.focus();
  await page.keyboard.type(usernameValue);
  await button.click();
  await page.waitForChanges();
  expect(loginSubmitUsername).toEqual("+39123456789");

  await resetUsernameValue(page);

  // INFO: phone (ok)
  usernameValue = "+41123456789";
  await username.focus();
  await page.keyboard.type(usernameValue);
  await button.click();
  await page.waitForChanges();
  expect(loginSubmitUsername).toEqual(usernameValue);
});

async function resetUsernameValue(page) {
  await page.evaluate((selector) => {
    document.querySelector(selector).value = "";
  }, "z-login-modal div.username z-input input");
}
