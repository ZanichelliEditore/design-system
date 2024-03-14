#!/bin/sh

VERSION_NUMBER=`cat package.json | grep "\"version\": " | grep -o "[0-9]*\.[0-9]*\.[0-9]*"`
echo $VERSION_NUMBER