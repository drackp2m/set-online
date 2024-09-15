#!/bin/sh

# Lista de extensiones a instalar
extensions="
  GitHub.copilot
  GitHub.copilot-chat
  nrwl.angular-console
  editorconfig.editorconfig
  mrmlnc.vscode-scss
  esbenp.prettier-vscode
  dbaeumer.vscode-eslint
  stylelint.vscode-stylelint
  angular.ng-template
  gruntfuggly.todo-tree
  cyrilletuzi.angular-schematics
  firsttris.vscode-jest-runner
  ryanluker.vscode-coverage-gutters
  GraphQL.vscode-graphql
  orsenkucher.vscode-graphql
  eamodio.gitlens
"

# Instalar cada extensión
for extension in $extensions; do
  code --install-extension "$extension"
done
