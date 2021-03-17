/*
 * This file is for development only
 */
import '../styles/index.scss';

import './config';
import 'ckeditor4';
import registerPlugin from './plugin';
import registerAdapt from './plugindos';

require('../index.html');
registerPlugin();
registerAdapt();
CKEDITOR.replace('editor');

