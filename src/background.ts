import { MAIN_SCRIPT_PATH } from './constants';
import { isPullRequestUrl } from './utils';

chrome.webNavigation.onHistoryStateUpdated.addListener(function (details) {
  if (isPullRequestUrl(details.url)) {
    chrome.tabs.executeScript(null, { file: MAIN_SCRIPT_PATH });
  }
});
