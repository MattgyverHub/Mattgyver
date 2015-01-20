# Mattgyver Baseline Project
This is my baseline bower.json, package.json, and gulpfile.js inits for new projects. The following are my working notes on installing a great baseline responsive website and front-end workflow using SASS, Bower, and Gulp. The responsive framework will be Bourbon, Neat, and Bitters, and includes jQuery, Font-Awesome, and some various other goodies. All the files will be minified, and things will happen automatically. It should be great - so let's begin!

## **Step 1:** Intial setup of environment and applications. 

This is a one-time deal to get the primary frameworks installed on your machine. Heads-up, you will be using PowerShell (Windows) to do lots of command line goodness. It's not so scary. I'm here to help!

1. **Install Node.js** Node js is the foundation on which everything is built. From the Node.js website: "Node.js® is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient..." in English, it lets your machine run javascript outside of a web browser. http://nodejs.org/
2. **Install git** Git will allow you to pull from repositories, but if you are here reading this, you might already know that. It's required for the Bower installation a little later, but is useful if you are going to be using Git in general. http://git-scm.com/downloads *Note: When installing Git, select the second option which will add git to the Windows context menu. This makes Git commands available in the PowerShell.*
3. **Install Ruby** Ruby provides additional language and programming to execute and install various other packages. It's primary purpose is to install the SASS framework. You need SASS, it's the only way to style those sheets. http://rubyinstaller.org/downloads/ *Choose version 1.9.3*
4. **Add Ruby to the environment PATH** In the Windows search field, type 'Environment' and select the application that says 'Edit the system environment variables.' From the newly opened System Properties window, click the button for Environment Variables. In the system variables panel, scroll down to the PATH line and double click to edit. Add this to the end of the string: *;C:\Ruby193\bin* (or wherever Ruby got installed).
4. **PowerShell GO!** Open your Windows PowerShell. Run > PowerShell, or do a quick system search for "PowerShell." You may notice PowerShell looks like a DOS or command window. It basically is, except a lot more system commands are exposed for use. 
5. **Install Bower** Once you are in the PowerShell, type the following: *npm install -g bower* This will add the bower framework and commands globally to any future projects.
6. **Install SASS** Next in the PowerShell type *gem install sass* This will add the sass framework and features. 

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

**All of the following can be had by using the bower.json file in a build. This list is just my notes.** Some things like jQuery come with other dependencies. Really just thinking out loud here and coming up with a process.

1. **Install Bourbon:** Type *bower install --save bourbon*
2. **Install Bourbon Neat:** Type *bower install --save neat*
3. **Install Bourbon Bitters:** Type *gem install bitters* This one is a gem, so it's deployed differently.
4. **Install Normalize.css:** Type *bower install --save normalize.css* Note to self, is this needed with Bourbon?
5. **Install FontAwesome:** Type *bower install --save fontawesome* 
6. **Install jQuery:** Type *bower install --save jquery* 
7. **Install jQuery:** Type *bower install --save modernizr* 
8. **Install jQuery:** Type *bower install --save detectizr* Might need to resolve this to 2.8.3 as of this note

To be continued...
