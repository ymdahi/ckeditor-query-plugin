import '../styles/index.scss';

import './config';
import 'ckeditor4';
import registerPlugin from './plugin';

require('../index.html');

registerPlugin();

CKEDITOR.replace('editor');

