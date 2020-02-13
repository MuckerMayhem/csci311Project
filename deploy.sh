#!/usr/bin/env sh

#add github to known hosts
ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts


# abort on errors
set -e

# build
npm install
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:MuckerMayhem/csci311Project.git master:gh-pages

cd -
