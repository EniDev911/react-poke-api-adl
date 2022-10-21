#!/usr/bin/env sh
# abort 
set -e

# build
npm run build

cd dist
git init
git checkout -b main
git add -A
git commit -m 'deploy'

git push -g git@github.com:enidev911/react-poke-api-adl.git main:gh-pages

cd -