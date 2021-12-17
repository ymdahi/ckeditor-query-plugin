// print CKEditor Query Plugin version info
const versionInfo = 'CKEditor Ydahi Plugin Development Version';
console.log(versionInfo);

const registerPlugin = () => {

  CKEDITOR.plugins.add( 'ydahiPlugin', {
    init: function( editor ) {
        editor.addCommand( 'insertTimestamp', {
            exec: function( editor ) {
                var now = new Date();
                editor.insertHtml( 'The current date and time is: <em>' + now.toString() + '</em>' );
            }
        });
        editor.ui.addButton( 'Timestamp', {
          label: 'Insert Timestamp',
          command: 'insertTimestamp',
          toolbar: 'insert',
          icon: 'https://a.mtstatic.com/@public/production/site_4538/1579208579-favicon.ico',
      });
    }
    
  });
  CKEDITOR.config.extraPlugins = 'ydahiPlugin';
};

export default registerPlugin;
