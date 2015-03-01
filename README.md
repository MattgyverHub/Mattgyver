# Boilerplate Webapp Template 
**This is intended to be mostly copy+paste. You won't need any power shell or command line knowledge to begin. Prepros is required ($30 https://prepros.io/)**

The following are working notes on beginning a web project with a solid baseline responsive website/webapp and front-end workflow using Node, Bower, Sass, Bourbon, Prepros, and other goodies. This build supports all the major browsers as well as IE9 and newer. It includes the popular Font Awesome icons, jQuery, and a responsive grid set with typical breakpoints. This webapp boilerplate structure is created specifically to be used with Prepros 5+.

## Getting Started
1. Download the project folder or clone the repo
2. Open Prepros and add the project folder
3. Adjust the output settings on the app.scss, app.js, and libs.js files to generate the min versions. See the prepros_settings screenshots on how this is set up.
4. Click Live Preview and your site should now be running live in the browser (localhost:8000 usually). 

Any changes you make to the scss and js files will be automatically injected/loaded the view in your browser. You can have many browsers open, they will all refresh and scroll in sync with each other. It's glorious. You can also send the url to your phone and tablet for multi-screen auto-refresh development (or use Adobe Edge for live mobile/tablet previews).

#### Notable Elements
- Base HTML5 template generated from: Initializr (http://www.initializr.com/)
- jQuery 1.11.2 (http://jquery.com/)
- Modernizr 2.8.3 (http://modernizr.com/)
- Respond 1.4.2 (https://github.com/scottjehl/Respond)
- Detect Mobile Browser implemented (http://detectmobilebrowser.com/)
- Sass mixins: Bourbon (http://bourbon.io/)
- Responsive framework: Bourbon Neat (http://neat.bourbon.io/)
- Font Awesome implemented (http://fortawesome.github.io/)
- Breakpoints set to the four primary screen sizes (easy to change or add more)
- Google fonts and custom fonts implemented (easy to swap)

*Quick note on Bourbon mixins: any Bourbon mixin that involves prefixing elements (-moz, -o, -webkit, etc...) will instead be handled by Prepros' built-in autoprefixer. It uses the latest auto-prefix libs so the Bourbon prefixes aren't needed. There are still plenty of great mixins to use in Bourbon however, you just won't need the auto-prefix ones.*

#### Forms & Inputs Not Included
This wbeapp build does not have a button theme, navigation menu, form inputs, sticky headers/sidebars, or overall UI. Recommend using Semantic UI (http://semantic-ui.com/) even though it hasn't been properly converted to Sass. The library is a bit bloated, so you should only use what you need. Most elements (buttons, dividers, images) are purely CSS and customizable. Other components each require their own js lib in addition to the CSS (modals, dropdowns, progress bars, sticky bars). 

As a general rule of thumb, if what you are looking for isn't available from Bourbon Refills' patterns/componentsn (http://refills.bourbon.io/), then get it from Semantic UI. Find the component and hit the download button.

#### Preprocessing: Prepros vs. Gulp vs. Grunt
**This project uses Prepros** as the front end task running solution. Automatic watching and concatenation of files, minification, source maps, Sass processing, browser refresh and synchronization are all handled by Prepros. 

Grunt (http://gruntjs.com/) and Gulp are fantastic (especially Gulp http://gulpjs.com/), and can do all that and more, but require a lot more setup and command-line management. All the key features are basically available in Prepros, with nearly zero setup time. Additionally, Gulp on PC has issues due to folder/file name length restrictions. Windows 8 failed to complete a node package installation of Gulp-Sass, which made Sass unusable when using the Gulp node package. 



# Old Stuff
What follows are my initial setup instructions to get things running with Gulp. I left the details here because occasionally I need to get into Bower and download a package for one thing or another. You can also see how it's about 20 steps instead of 4.

## **Step 1:** Intial setup of environment and applications.  

This is a one-time deal to get the primary frameworks installed on your machine. Heads-up, you will be using PowerShell (Windows) to do lots of command line goodness. It's not so scary. I'm here to help!

1. **Install Node.js** Node js is the foundation on which everything is built. From the Node.js website: "Node.js® is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient..." in English, it lets your machine run javascript outside of a web browser. http://nodejs.org/
2. **Install git** Git will allow you to pull from repositories, but if you are here reading this, you might already know that. It's required for the Bower installation a little later, but is useful if you are going to be using Git in general. http://git-scm.com/downloads *Note: When installing Git, select the second option which will add git to the Windows context menu. This makes Git commands available in the PowerShell.*
3. **Install Ruby** Ruby provides additional language and programming to execute and install various other packages. It's primary purpose is to install the SASS framework. You need SASS, it's the only way to style those sheets. http://rubyinstaller.org/downloads/ *Choose version 1.9.3*
4. **Add Ruby to the environment PATH** In the Windows search field, type 'Environment' and select the application that says 'Edit the system environment variables.' From the newly opened System Properties window, click the button for Environment Variables. In the system variables panel, scroll down to the PATH line and double click to edit. Add this to the end of the string: *;C:\Ruby193\bin* (or wherever Ruby got installed).
4. **PowerShell GO!** Open your Windows PowerShell. Run > PowerShell, or do a quick system search for "PowerShell." You may notice PowerShell looks like a DOS or command window. It basically is, except a lot more system commands are exposed for use. 
5. **Install Bower** Once you are in the PowerShell, type the following: *npm install -g bower* This will add the bower framework and commands globally to any future projects.
6. **Install SASS** Next in the PowerShell type *gem install sass* This will add the sass framework and features. 
7. **Install Gulp** Finally we add Gulp to the project. *npm install -g gulp*

## **Step 2:** Setting up the project folders and initial settings.

This is the manual bit where you plan the folder structure for your css, images, and create the empty json/js settings files, things like that. It's mostly housekeeping to get the initial files in place and ready to automate the build.

1. **Create your website project folder.** It's just an empty folder. Pretty easy after all that nonsense above.
2. **Create your site folder structure.** A lot of stuff will be created automatically, but you will still want to create the basic folders; img/, js/, css/, fonts/, shared/ and so on. 
3. **Create a new gulpfile.js**. Just what the title says. This new file will be the workhorse to run the project tasks throughout the life of the project. It's a perpetually running checklist of tasks that are automated and make your life easier; minifying files, generating sass to css output, things like that.
4. **PowerShell GO part 2!** Navigate to your new project folder in Windows explorer and copy the full path. Head over to PowerShell. Change directory to your new project folder by typing *cd* then right-click. The project path you just copied will be pasted into the command line. Hit Enter. The command prompt will show you in the folder now. 
5. **Init the package.json file**. Type *npm init* and you will be presented with a series of questions. Name your project something, and the rest can be default. You will be able to change these later. Once done, a new file named *package.json* will be created in the root of the project.
6. **Init the bower.json file**. Type *bower init* and you will be presented with a series of questions. Same as above-name your project something, and the rest can be default. You will also be able to change these later. Once done, a new file named *bower.json* will be created in the root of the project.

## **Step 3:** Adding amazing libraries and assets to the site.

This will get all the baseline goodies added to the site; Bourbon, Neat, Bitters, jQuery, etc. Bower will be the main tool to gather the assets and put them into the project. These steps are the equivalent of hunting down all the latest versions of things and copying them into the js/ css/ and fonts/ (et. all) folders. Get ready for **PowerShell GO part 3!** All of the following items will be run from the PowerShell.

**All of the following can be had by using the bower.json file in a build. This list is just my notes.** Some things like jQuery come with other dependencies. Really just thinking out loud here and coming up with a process for when we begin new sites.

### Start with the basics:

1. **Install Bourbon:** Type *bower install --save bourbon*
2. **Install Bourbon Neat:** Type *bower install --save neat*
3. **Install Bourbon Bitters:** Type *gem install bitters* (one time only - won't need to do this on future setups)
4. then "cd " into the scss directory and type *bitters install*. Bitters is the UI chrome skin basically, similar in appearance to Bootstrap's chrome.

Add vis Bower any useful tools. It's probably easier for me to still manually gather these libs to keep the overall project files to a minimum. Building sites in the cloud keeps the file qty to a reasonable amount by hand-gathering any specific js libs. I don't need the entire jQuery assets and source, so only grab the single required file.

1. **Install jQuery:** Type *bower install --save jquery* 
2. **Install modernizr:** Type *bower install --save modernizr* 
3. **Install detectizr:** Type *bower install --save detectizr* (Might need to resolve this to 2.8.3 as of this note/)
4. To be continued... I have yet to figure out how to use Browserify. Baby steps.

## **Step 4:** Add Gulp to do all the task running

// Include plugins
npm install --save-dev gulp 
npm install --save-dev gulp-jshint 
npm install --save-dev gulp-concat 
npm install --save-dev gulp-minify-css
npm install --save-dev gulp-uglify 
npm install --save-dev gulp-rename 
npm install --save-dev gulp-ruby-sass 
npm install --save-dev gulp-notify 

- Include in the gulpfile.js: 
```
// Include gulp
var gulp = require('gulp');

// Define base folders
var src = 'assets/';
var dest = 'assets/app/';

// Lint the javascript
var jshint = require('gulp-jshint');

// Include plugins
var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-ruby-sass');
var notify = require('gulp-notify');

// Lint Task
gulp.task('lint', function() {
    return gulp.src(src + 'js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(src + 'js/**/*.js')
		.pipe(concat('main.js'))
		.pipe(gulp.dest(dest + 'js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest(dest + 'js'))
		.pipe(notify({ message: 'Complete: Scripts compiled' }));
});

// Compile CSS from Sass files
gulp.task('sass', function() {
    return gulp.src(src + 'scss/*.scss')
        .pipe(rename({suffix: '.min'}))
        .pipe(sass({style: 'compact'}))
        .pipe(gulp.dest(dest + 'css'))
        .pipe(notify({ message: 'Complete: Am fat and sassy' }));
});

// Compress images 
gulp.task('images', function() {
	return gulp.src(src + 'images/**/*')
		.pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
		.pipe(gulp.dest(dest + 'img'));
});


 // Watch for changes in files and run their task
gulp.task('watch', function() {
	gulp.watch(src + 'js/**/*.js', ['lint', 'scripts']);
	gulp.watch(src + 'scss/**/*.scss', ['sass']);
});

 // Default Task
 // Type: gulp in the PowerShell to begin. CTRL+C to cancel or stop the process
gulp.task('default', ['lint', 'scripts', 'sass', 'watch']);
```
