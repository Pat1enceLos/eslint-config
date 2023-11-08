## ESLint Config Presets

### Usage
---

#### Install
```bash
yarn add -D @pat1encelos/eslint-config
```

#### Config .eslintrc
```js
module.exports = {
  extends: '@pat1encelos'
}
```

#### Add script for package.json
```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

#### Config VS Code auto fix
- Install ESLint VS Code Plugin
- Create `.vscode/settings.json`
```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```