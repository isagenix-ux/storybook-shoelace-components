#!/bin/bash

# Build Storybook
npm run build-storybook

# Get commit message from argument or use default
commit_message=${1:-"Deploy Storybook updates"}

# Git commands
git add .
git commit -m "$commit_message"
git push origin main 