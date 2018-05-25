import assert from 'assert';
import rewiremock from 'rewiremock';

const index = rewiremock.proxy('./index.mjs', (r) => ({
  './foo.js': r.withDefault(() => 'fake-foo'),
})).default;

describe('rewiremock with esm in mocha', () => {

  it('should use the mock', () => {
    assert.equal(index(), 'fake-foo');
  });

});
