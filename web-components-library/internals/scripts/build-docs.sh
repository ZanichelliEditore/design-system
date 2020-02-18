#!/bin/bash

echo "generating global readme docs"

dir="src/components"
readme_file=$dir"/readme.md"

readme=""

for subdir in "$dir"/*
do
  for doc in "$subdir"/*
  do
    file="$(basename -- $doc)"
    if [ "$file" = "readme.md" ]; then
      readme="$readme""$(cat $doc)""\n\n---\n---\n\n"
    fi
  done
done

echo "$readme" >> $readme_file
