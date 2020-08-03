import { Command } from './types';

export function isPullRequestUrl(url: string): boolean {
  const prUrlPattern = /^https:\/\/github\.com\/[^/]+\/[^/]+\/pull\/\d+\/?$/;
  return prUrlPattern.test(url);
}

export function createSearch<T>(
  items: T[],
  matchFunc: (item: T, term: string) => boolean,
  limit = 10,
) {
  return async (term: string): Promise<T[]> => {
    const matched: T[] = [];
    for (const item of items) {
      if (matchFunc(item, term)) {
        matched.push(item);

        if (matched.length === limit) {
          break;
        }
      }
    }
    return matched;
  };
}

export function matchCommand({ body }: Command, term: string): boolean {
  return body.startsWith(term) && body !== term;
}

export function renderCommand({ body, logoUrl }: Command): string {
  return `<img src="${logoUrl}" width="20" height="20" />&nbsp;<small>${body}</small>`;
}
