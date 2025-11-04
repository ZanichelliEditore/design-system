#!/bin/sh

set -e

git config --global user.name "${GITHUB_ACTOR}"
git config --global user.email "${GITHUB_ACTOR_ID}+${GITHUB_ACTOR}@users.noreply.github.com"

yarn cache clean
yarn install
yarn build
yarn test

# Required to use OpenID Connect feature
echo "Update npm to the latest version"
npm install -g npm@latest