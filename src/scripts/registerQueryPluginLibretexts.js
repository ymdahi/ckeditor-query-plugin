import registerPlugin from './plugin';

// Adds this plugin to the LibreEditor for later activation
LibreEditor.queryPlugin = (config) => {
  registerPlugin();
  config.toolbar[12].push('openLibretextsQueryDialog');
};

