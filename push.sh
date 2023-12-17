#!/bin/bash

# Check if an argument was provided
if [ -z "$1" ]; then
    echo "No argument provided. Please provide a commit message."
    exit 1
fi

# Run the git commands
git add .
git commit -m "$1"

git push
