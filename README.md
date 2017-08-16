# Duke APO Website
The Duke APO website currently deployed can be found here: [dukeapo.org](https://dukeapo.org/)

Original [readme](https://github.com/kriasoft/react-static-boilerplate/blob/master/README.md)

> The most annoying part of any project is getting things installed so I'll do a quick write-up of everything I had to do to get started. These instructions are for Mac.

## Table of Contents

> @author: Brian Lin (ask me if anything is unclear or if you get weird error messages that Googling can't fix)

> Also make sure your read through our [Git Workflow](#our-git-workflow) before submitting any code! (ask Brian for clarification since it's a bit complicated)

- [Downloading the project](#downloading-the-project)
  - [Clone the project](#clone-the-project)
- [Installing stuff](#installing-stuff)
  - [Homebrew](#homebrew)
  - [Yarn](#yarn)
  - [Node](#node)
- [Running the project](#running-the-project)
- [Testing](#testing)
- [Deploying the project](#deploying-the-project)
- [Our Git Workflow](#our-git-workflow)
- [Basic Terminal commands](#basic-terminal-commands)

## Downloading the project

First, open up Terminal. You can just do `CMD` + `Space` and type "Terminal" in the search bar. I recommend pinning Terminal to your dock.

![terminal](http://i.imgur.com/Y1o9O7T.png)

### Clone the project

Open up Terminal and type in `git`. You'll probably have to install Apple's xcode command line tools.

Make a new folder where you want to hold all your GitHub projects. You can do this by opening up Terminal, typing `cd` to go to the highest level folder in your computer (so you have access to everything). Type `ls` to see what folders are around. Some you may recognize are `Desktop` or `Applications`. I just make a `Github` folder here by typing `mkdir Github` (make a directory named Github). Then go into the folder by typing `cd Github` (changing directory to the Github folder, note: "directory" is just another name for a folder. idk why). 

Now that you're inside the folder, `clone` the project from our central GitHub repository down to your computer:

`git clone https://github.com/DukeAPO/dukeapo-client.git`

It should make a new folder called `dukeapo-client`. Type `ls` and see if it's there. If it is, `cd` into it with `cd dukeapo-client`.

## Installing stuff

Now that you're in the project, time to install a bunch of (random) stuff that makes it run.

Note: do all installation in the `dukeapo-client` folder because all the installation files are there.

### Homebrew

First thing you need is **homebrew** which makes installing *other* stuff more easy. Go to their [website](https://brew.sh/) and copy the Terminal script and hit `enter` to run it. 

### Yarn

Yarn is used for dependency management. "Dependency management" just means making sure you have all the ingredients you need to work on a recipe. For instance, you can't run a React project if you don't have React. So React is a dependency. 

Install Yarn with:

`brew install yarn` (that's why we got homebrew)

Now use Yarn to install all of our dependencies:

`yarn install`

### Node

You'll also need **Node**, which runs our project. Just google "install node" and download the appropriate version (should just be the latest Mac one)

Woo nice, you're done with installation!

## Writing code

You'll want a text editor for writing code. I recommend using Sublime Text which is free. 

## Running the project

Type this into Terminal:

```shell
$ yarn start                    # Compiles the app and opens it in a browser with "live reload"
```
It should give you a localhost address that you can copy/paste into your browser to see what the website looks locally (local = on your computer only)

This is important b/c we always want to see what our changes do to the website before deploying it (and sharing it with the world)

## Testing

Testing catches errors you may have missed. Always test before deploying the website

```shell
$ yarn lint                     # Check JavaScript and CSS code for potential issues
$ yarn test                     # Run unit tests. Or, `yarn run test:watch`
```

linting (weird name) checks for styling and syntax errors in your code

unit tests make sure that the website loads as expected

## Deploying the project

Whenever you make changes and think they look good, ask another member of the team to take a look at your code in case there's any bugs or slip ups you missed. If they say it looks good, feel free to publish.

```shell
$ yarn build                  # Builds app in public folder
$ firebase deploy             # Deploys public folder to firebase
```

## Our Git Workflow

### Step 1: Make some changes on a new branch

1. Always update your local copy of the project with the most up-to-date version on GitHub: `git pull origin master`

> When you do make changes, do this on your own branch, not on master.

2. Make a new branch and change to it with: `git checkout -b <nameOfBranch>`

> (Optional): list branches with: `git branch`, change branches with: `git checkout <nameOfBranch>`

3. Make some changes. 

> (Optional): list any files you've modified with: `git st` (short for `git status`), look at specific changes you've made to these files with: `git diff`

4. Run `yarn lint` to check for syntax/spelling/spacing errors. Fix any errors (or ask Brian).

5. Run `yarn test` to make sure all unit tests pass. Fix any errors.

6. Add your changed files to the staging area: `git add <nameOfFile>`

7. Commit these changes with a message describing what you did: `git commit -m "added new title"`

8. Push to the repository (on GitHub): `git push origin <nameOfYourBranch>`


### Step 2: Code review

1. Make a pull request from your branch into master (it's a button on GitHub, ask Brian). Write a description and assign a reviewer(s) to look it over. 

2. Read comments. Make any changes.

3. Lint and test as before. 

3. `git add <stuff>` + `git commit -m "message goes here"` + `git push origin <nameOfBranch>` as before.

4. Repeat until your reviewer says it looks good!

### Step 3: Move your code into master

1. Hit `squash and merge` button on GitHub. 

2. Delete your branch.

3. Close any issues you solved.

### Basic Terminal commands

No need to memorize these, but here's a few Terminal commands that might be useful:

`ls` - lists what files are in your current folder

`open .` - opens the current folder in Finder. Note: `.` = current folder. So you can also do `open <nameOfFolder>` to open a folder that you see with `ls`.

`cd <name of folder>` - changes directory (ie folder) to whatever you specify

`cd ../` - changes directory to the parent folder (whatever folder is holding the one you're in now)

`cd` - goes to the root (highest) directory that contains all folders on your computer

`mkdir <name of folder>` - makes a new folder with desired name

`cat <text file>` - prints the contents of a text file in the Terminal

`rm <name of file>` - deletes a file
