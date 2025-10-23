#!/bin/sh

set -e

git pull
git config --global user.name "${GITHUB_ACTOR}"
git config --global user.email "${GITHUB_ACTOR_ID}+${GITHUB_ACTOR}@users.noreply.github.com"
yarn cache clean
yarn
yarn build
# yarn test

# Ensure npm 11.5.1 or later is installed for OIDC 
npm install -g npm@latest