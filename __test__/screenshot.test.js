const wda = require('@flasco/wda-driver');

test('screenshot', async () => {
  const c = new wda.Client('http://localhost:8100');
  const timex = new Date().getTime();
  await c.screenshot(`${timex}.png`);
}, 10000);
