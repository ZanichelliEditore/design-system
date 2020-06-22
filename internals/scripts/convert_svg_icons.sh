#!/bin/bash

dir=$1
if [ ! -n "$dir" ]; then
  echo "folder required"
  exit
fi

json='export const icons = {
  '

for entry in "$dir"/*
do

  path=""
  id=""
  data=""

  path="$(cat $entry | grep 'polygon')"
  path="$(echo -e $path)"
  if [ -n "$path" ]; then
    IFS='"' read -ra arr <<< "$path"
#    id=${arr[1]}
    data=${arr[3]}
    IFS=' '
  else
    path="$(cat $entry | grep 'path')"
    path="$(echo -e $path)"
    if [ -n "$path" ]; then
      IFS='"' read -ra arr <<< "$path"
#      id=${arr[3]}
      data=${arr[1]}
      IFS=' '
    fi
  fi

#  tmp="$(cat $entry | grep 'use id')"
#  tmp="$(echo -e $tmp)"
#  if [ -n "$tmp" ]; then
#    IFS='"' read -ra arr <<< "$tmp"
#    id=${arr[1]}
#    IFS=' '
#  fi

  basename=$(basename $entry)
  id="${basename%.*}"

  json="$json\"$id\": \"$data\",
  "
  ((index++))

done

json="$json};";

echo $json | tee ../../src/components/icons/icons.tsx
