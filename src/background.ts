import { MAIN_SCRIPT_PATH } from './constants';

chrome.webNavigation.onHistoryStateUpdated.addListener(function () {
  chrome.tabs.executeScript(null, { file: MAIN_SCRIPT_PATH });
});
