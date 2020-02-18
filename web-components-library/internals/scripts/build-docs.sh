#!/bin/bash

echo "generating global readme docs"

dir="src/components"
readme_dir="src/readme"

readme=""

IFS='"'

eval "$(rm -R ${readme_dir})"
eval "$(mkdir -m775 ${readme_dir})"

for subdir in "$dir"/*
do
  for doc in "$subdir"/*
  do
    file="$(basename -- $doc)"
    if [ "$file" = "readme.md" ]; then
      group="$(cat $doc | grep 'readme-group')"
      if [ -n "$group" ]; then
        read -ra arr <<< "$group"
        readme_file="readme-${arr[1]}.md"
      else
        readme_file="readme.md"
      fi
      readme="$(cat $doc)"
      echo "$readme" >> "$readme_dir/$readme_file"
      echo $'\r---\r---' >> "$readme_dir/$readme_file"
    fi
  done
done

IFS=' '
