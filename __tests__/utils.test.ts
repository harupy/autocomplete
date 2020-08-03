import {
  isPullRequestUrl,
  createSearch,
  matchCommand,
  renderCommand,
} from '../src/utils';

describe('utils', () => {
  it(isPullRequestUrl.name, () => {
    expect(isPullRequestUrl('https://github.com/owner/repo/pull/123')).toBe(true);
    expect(isPullRequestUrl('https://github.com/owner/repo/pull/123/')).toBe(true);
    expect(isPullRequestUrl('https://github.com/owner/repo/pull/123/files')).toBe(false);
    expect(isPullRequestUrl('https://example.com')).toBe(false);
  });

  it(createSearch.name, async () => {
    const search = createSearch(['foo', 'bar'], (item, term) => item.startsWith(term));

    expect(search('f')).resolves.toEqual(['foo']);
    expect(search('b')).resolves.toEqual(['bar']);
    expect(search('a')).resolves.toEqual([]);
  });

  it(createSearch.name + ' with limit', async () => {
    const items = [...Array(10).keys()].map(() => 'a');
    const search = createSearch(items, (item, term) => item.startsWith(term), 5);
    expect(search('a')).resolves.toEqual(items.slice(0, 5));
  });

  it(matchCommand.name, () => {
    expect(matchCommand({ body: 'abc', logoUrl: '' }, 'a')).toBe(true);
    expect(matchCommand({ body: 'abc', logoUrl: '' }, 'abc')).toBe(false);
  });

  it(renderCommand.name, () => {
    const htmlStr = renderCommand({ body: 'foo', logoUrl: 'foo.com' });
    expect(htmlStr).toContain('img');
    expect(htmlStr).toContain('small');
  });
});
