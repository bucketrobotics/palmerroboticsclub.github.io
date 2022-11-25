BRANCH=$(git branch --show-current)
git checkout gh-pages
git reset --hard main
ng build --output-path docs
git add docs/
git commit -m "BUILD: Build files"
git push -f
git checkout "$BRANCH"