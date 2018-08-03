#!/bin/bash

set -e

echo "Setting up React development environment"

npm --version
npm init -y
npm i --save-dev babel-loader babel-core babel-preset-react-app \
    cross-env webpack webpack-dev-server

npm i --save react react-dom

npm run build
nmp start
