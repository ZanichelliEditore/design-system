#!/bin/sh

set -e

git pull
git config --global user.name "${GITHUB_ACTOR}"
git config --global user.email "${GITHUB_ACTOR_ID}+${GITHUB_ACTOR}@users.noreply.github.com"
yarn cache clean
yarn
yarn build
# yarn test
