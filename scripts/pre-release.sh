#!/bin/sh

set -e

git config --global user.name "${GITHUB_ACTOR}"
git config --global user.email "${GITHUB_ACTOR_ID}+${GITHUB_ACTOR}@users.noreply.github.com"

# Release job runs unit/spec tests only; prevent Puppeteer postinstall browser download.
export PUPPETEER_SKIP_DOWNLOAD=true

yarn cache clean
yarn install --immutable
yarn build
yarn test

# Required to use OpenID Connect feature
echo "Update npm to the latest version"
npm install -g npm@latest