import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'donejs-chatter/models/test';

F.attach(QUnit);

QUnit.module('donejs-chatter functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('donejs-chatter main page shows up', function() {
  F('title').text('donejs-chatter', 'Title is set');
});
