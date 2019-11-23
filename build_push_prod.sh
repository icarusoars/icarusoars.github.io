#!/bin/zsh

# git commit message parameter expected in $1

cd ./jekyll_files
echo "--- In jekyll_files folder ---"
echo ""
bundle exec jekyll build
echo "--- Finished building static site ---"
echo ""
cd ..
echo "--- In root directory ---"
echo ""

rm -rf 2017 2018 2019 2020
rm -rf archive assets category pictures
rm CNAME feed.xml index.html sitemap.xml
echo "--- Cleaned previous built site ---"
echo ""

cp -r ./jekyll_files/_site/* .
echo "--- Copied static site into root ---"
echo ""

git add --all :/
git commit -m "$1"
git push
