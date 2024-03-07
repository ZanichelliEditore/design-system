import {newE2EPage} from "@stencil/core/testing";

declare global {
  interface Window {
    onOtpChange: (e) => void;
  }
}

it("Test ZOtp should emit inputChange event", async () => {
  const page = await newE2EPage();

  // Define a window.onCustomEvent function on the page.
  let inputValue = "";
  await page.exposeFunction("onOtpChange", (e) => {
    inputValue = e.detail.value;
  });

  // Attach an event listener to page to capture a custom event on page load/navigation.
  const type = "otpChange";
  page.evaluateOnNewDocument((type) => {
    document.addEventListener(type, (e: CustomEvent) => {
      window.onOtpChange({type, detail: e.detail});
    });
  }, type);

  await page.setContent(`<z-otp></z-otp>`);
  const input = await page.find("z-otp >>> div input");

  expect(inputValue).toEqual("");

  await input.press("6");
  await page.waitForChanges();
  expect(inputValue).toEqual("6");
});
