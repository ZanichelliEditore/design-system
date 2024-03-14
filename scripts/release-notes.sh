#!/bin/sh

VERSION_NUMBER=`cat package.json | grep "\"version\": " | grep -o "[0-9]*\.[0-9]*\.[0-9]*"`
gh release create v$VERSION_NUMBER --draft --generate-notes