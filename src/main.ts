import { Textcomplete } from '@textcomplete/core';
import { TextareaEditor } from '@textcomplete/textarea';

import { Command } from './types';
import { COMMENT_EDITOR_ID } from './constants';
import { commands } from './commands';
import { createSearch, matchCommand, renderCommand, isPullRequestUrl } from './utils';

(() => {
  const strategy = {
    match: /^(c.*)/,
    search: async (
      term: string,
      callback: (searchResults: Command[]) => void,
      /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
      match: RegExpMatchArray,
    ) => {
      callback(await createSearch(commands, matchCommand)(term));
    },
    replace: ({ body }: Command): string => body,
    template: renderCommand,
  };

  if (!isPullRequestUrl(window.location.href)) {
    return;
  }

  const textArea = document.getElementById(COMMENT_EDITOR_ID) as HTMLTextAreaElement;

  if (textArea === null) {
    return;
  }

  new Textcomplete(new TextareaEditor(textArea), [strategy]);
})();
