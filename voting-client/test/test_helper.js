import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.windows = win;

Object.keys(windows).forEach((key) => {
  if (!(key in global)) {
    global[key] = windows[key];
  }
})

chai.use(chaiImmutable);
