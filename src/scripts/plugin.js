const registerPlugin = () => {
  CKEDITOR.plugins.add('libreTextsQuery', {
    init(editor) {
      editor.filter.allow('div(box-query);p(box-legend);p(mt-script-comment);pre(script)');

      CKEDITOR.dialog.add('libreTextsQueryDialog', (editor) => {
        return {
          title: 'LibreTexts Query Plugin',
          resizable: CKEDITOR.DIALOG_RESIZE_BOTH,
          minWidth: 500,
          minHeight: 400,
          contents: [
            {
              id: 'tab1',
              label: 'First Tab',
              title: 'First Tab Title',
              accessKey: 'Q',
              elements: [
                {
                  type: 'text',
                  label: 'Please enter a valid page ID',
                  id: 'pageId',
                }
              ],
            },
          ],
          onOk() {
            const dialog = this;

            const pageId = parseInt(dialog.getValueOf('tab1', 'pageId'));

            editor.insertHtml(`
            <div class="box-query">
              <p class="box-legend"><span>Query \\(\\PageIndex{1}\\)</span></p>

              <p class="mt-script-comment">Embed QUERY Assessment</p>
              <pre class="script">template('query',{'PageID':'${pageId}'});</pre>
            </div>
          `);
          },
        };
      });

      editor.addCommand('openLibretextsQueryDialog', new CKEDITOR.dialogCommand('libreTextsQueryDialog'));

      editor.ui.addButton('openLibretextsQueryDialog', {
        label: 'queryDialog',
        command: 'openLibretextsQueryDialog',
        toolbar: 'insert',
        icon: 'https://a.mtstatic.com/@public/production/site_4538/1579208579-favicon.ico',
      });
    },
  });

  if (CKEDITOR.config.extraPlugins.length === 0)
    CKEDITOR.config.extraPlugins += 'libreTextsQuery';
  else
    CKEDITOR.config.extraPlugins += ',libreTextsQuery';
};

export default registerPlugin;

