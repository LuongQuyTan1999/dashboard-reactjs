module.exports = {
    parser: "babel-eslint", //babel-eslint
    parserOptions : {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    extends: [ // eslint-plugin-react
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb" ,// Eslint-config-airbnb
        "prettier" // npm install --save-dev eslint-config-prettier eslint-plugin-prettier prettier
    ],
    rules: { //eslint.org
        semi : 1,
        quotes: [2,'double'],
        'react/prop-types' : 1,
        'react/jsx-max-props-per-line' : 1,
        // 'linebreak-style' : 0,
        // 'import/no-extraneous-dependencies' : 0,
        // 'class-method-use-this' : 0,
        // 'react/jsx-filename-extension' : 0,
        // 'react/jsx-one-expression-per-line' : 0,
        // 'react/forbid-prop-types' : 0,
        // 'react/require-default-props' : 0,
        // 'prettier/prettier' :['error']
    },
    plugins : ["prettier"],
    env: {
        "es6" : true,
        "browser" : true,
        "node" : true
    },
    {
    "husky": {
      "hooks": {
        "pre-commit": "npm test",
        "pre-push": "npm test",
        "...": "..."
      }
    }
}
}
