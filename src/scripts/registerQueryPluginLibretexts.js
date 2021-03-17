/*
 * This is the production build
 */
import '../styles/index.scss';
import registerPlugin from './plugin';
import registerAdapt from './plugindos';

// Adds this plugin to the LibreEditor for later activation
// this will ensure that `registerPlugin()` be called after
// CKeditor is initialized on Libretexts page
LibreEditor.queryPlugin = (config) => {
  registerPlugin();
  config.toolbar[12].push('openLibretextsQueryDialog');
  registerAdapt();
  config.toolbar[12].push('openLibretextsAdaptDialog');
};

