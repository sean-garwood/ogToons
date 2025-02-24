#!/bin/bash

find src -type f | while IFS= read -r file; do
  echo "Checking todos in $file..."
  grep -P -n "// TODO:" "$file" | while IFS=: read -r line text; do
    echo "  $file:$line: $text"
    current_line=$line
  done
done
