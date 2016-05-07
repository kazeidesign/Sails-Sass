# Sails-Sass

Use SASS in a [Sails.js](http://sailsjs.org) application simply with Node.js

## Ready to use

This app is ready to use. Clone this repository ``` git clone https://github.com/kazeidesign/Sails-Sass.git ``` in your server.

Run `` cd Sails-Sass/ && npm install && sails lift ``.

Look in your browser at [localhost:1337](http://localhost:1337). Your Sails.js app is ready and you can use SASS (.scss & .sass) in **assets/styles/**.

## Getting Started

#### Needed

[Node.js](https://nodejs.org/en/): version 4.4.4 LTS or more

[Sails.js](http://sailsjs.org): version 0.12.3 or more

[Grunt-sass](https://www.npmjs.com/package/grunt-sass): SASS compiler 

Compile Sass to CSS using node-sass. This task uses libsass, which is a Sass compiler in C++. It's a lot faster than the original Ruby compiler and fully compatible.

To install Grunt-sass, use in terminal:

`npm install --save-dev grunt-sass`

or in your **package.json**:

`"grunt-sass": "~1.2.0"`

---

#### Create SASS task

To use it, you need to create a new Grunt task in **tasks/config/**. Create a new file `sass.js`:

```js
module.exports = function(grunt) {                  // Create new Grunt task

  grunt.config.set('sass', {                        // Task sass
    dev: {
      files: [{
        expand: true,                               // 'expand directory'
        cwd: 'assets/styles/',                      // 'source folder'
        src: ['importer.scss', 'importer.sass'],    // 'source files'
        dest: '.tmp/public/styles/',                // 'destination folder'
        ext: '.css'                                 // 'extension of compiled file'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-sass');                 // Load task Grunt-sass  
};

```

---


#### Add extension .scss and .sass in the tasks config

Add ` |scss|sass ` after `less` into two files in **tasks/config/**:
1. `copy.js`
2. `sync.js`

```js
src: ['**/*.!(coffee|less|scss|sass)'],     // Add |scss|sass after less
```

---


#### Add the task sass in the register

Add ` 'sass:dev,' ` after ` 'less:dev,' ` into two files in **tasks/register/**:
1. `compileAssets.js`
2. `syncAssets.js`

```js
'sass:dev',     // Add 'sass:dev,' after 'less:dev,' 
```

---


#### Use it

In your terminal, launch `sails lift` and start to write your [Syntactically Awesome Style Sheets](http://sass-lang.com/).

You can use three format: 
* .scss
* .sass
* .less (Less is still enable and use `grunt-contrib-less` to compile)


Enjoy!

[KazeiDesign](https://github.com/kazeidesign)

---

#### To do

* [grunt-scss-lint](https://github.com/ahmednuaman/grunt-scss-lint)
* [grunt-sass-lint](https://github.com/sasstools/grunt-sass-lint)
* [grunt-postcss](https://github.com/nDmitry/grunt-postcss)