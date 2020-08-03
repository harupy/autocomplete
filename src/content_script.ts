import { MAIN_SCRIPT_PATH } from './constants';

const s = document.createElement('script');
s.src = chrome.runtime.getURL(MAIN_SCRIPT_PATH);
s.onload = () => {
  console.log();
  s.remove();
};
(document.head || document.documentElement).appendChild(s);
