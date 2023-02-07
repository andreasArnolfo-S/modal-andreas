{
  "name": "modal-andreas",
  "version": "1.2.3",
  "description": "A simple component to show a modal",
  "main": "index.js",
  "scripts": {
    "clean": "rm -rf dist",
    "build": "yarn clean && tsc && cp package.json README.md",
    "start": "react-scripts start"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/andreasArnolfo-S/modal-andreas.git"
  },
  "keywords": [
    "react",
    "typescript"
  ],
  "author": {
    "name": "Andreas Arnolfo"
  },
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/andreasArnolfo-S/modal-andreas/issues"
  },
  "devDependencies": {
    "@types/react": "^17.0.14",
    "@types/react-dom": "^18.0.6",
    "@types/react-transition-group": "^4.4.5",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "tailwindcss": "^3.2.4",
    "typescript": "^4.3.5",
    "web-vitals": "^2.1.2"
  },
  "dependencies": {
    "daisyui": "^2.46.1",
    "react-code-blocks": "^0.0.9-0",
    "react-scripts": "^5.0.1"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
