#!/bin/bash

grep -r -P -n "^// TODO:" src/ | while IFS=: read -r file line text; do
  echo "$file:$line: $text"
  current_line=$line
  grep -A 10 -P "^// TODO:" "$file" | tail -n +2 | while IFS= read -r continuation; do
    ((current_line++))
    if [[ $continuation =~ ^// ]]; then
      echo "$file:$current_line: $continuation"
    else
      break
    fi
  done
done
