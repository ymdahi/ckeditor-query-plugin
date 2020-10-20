HOME_DIR=/home/jupyterteam

ssh -tt jupyterteam@test.libretexts.org << EOF
cd $HOME_DIR/ckeditor-query-plugin
git fetch --all
git checkout main && git reset --hard origin/main
yarn install
yarn build
cp dist/queryPlugin.min.js $HOME_DIR/public
exit
EOF
