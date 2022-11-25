BRANCH=$(git branch --show-current)
git checkout gh-pages
git reset --hard main
ng build --output-path docs
cp docs/index.html docs/404.html
git add docs/
git commit -m "BUILD: Build files"
git push -f
git checkout "$BRANCH"