# React + Redux + WP-API v2  Wordpress Theme

Experimental boilerplate inspired by inspired by [Picard](https://github.com/Automattic/Picard) theme,
for this i transform to ES6 syntax and improve the code

## Installation

### 1. Working WordPress installation

First, prepare a proper WordPress environment:

* You will obviously need a working *WordPress* installation,
* You will also need *WP REST API*. It is a plugin that creates REST API to be used by the theme. Plugin is currently **NOT** in plugins repository, you have to upload the files manually. Install and activate the [WP REST API](https://github.com/WP-API/WP-API/tree/master) plugin (make sure that you are using the `master` branch – the default is currently develop),
* Set your permlink structure to `/%year%/%monthnum%/%day%/%postname%/`.

### 2. Theme building
Unlike other themes, this one uses a build process, you need:

* *node.js* and *npm*
* *[gulp](http://gulpjs.com/)*

**theme setup**

1. Download the theme files to `wp-content/themes` directory of your WordPress installation. You can clone this repository (`git clone https://github.com/felipeegasneris/react-redux-wp-api.git`)
2. In theme directory, run `npm install` to install the node dependencies.
3. In theme directory, run `gulp build` to compile the JavaScript and SASS.
4. In theme directory, run `gulp watch` to actively develop the theme and have the styles and JS files automatically update.



## Todos

- implement Redux.
- Work with different permalink structures.
- implement a beauty css.
- finalize the project xD
