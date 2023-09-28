# Contributor Instructions

> Contributing to an open source project for the first time can be pretty scary. This repo is here to help you take your first steps as an open source contributor by adding to a simple collection. Have a look around, have an additional thought? Add it!

## Table of Contents

- [Who Can Contribute?](#who-can-contribute)
- [Why Contribute to Open Source Projects?](#why-contribute-to-open-source-projects)
- [Getting Started](#getting-started)
- [File & Folder Details](#file--folder-details)
- [Step-by-Step Guide](#step-by-step-guide)
- [Where to go from here?](#where-to-go-from-here)
- [Further Reading](#further-reading)

## Who Can Contribute?

Anyone and everyone can! However this is geared mostly for beginners 😉

## Why Contribute to Open Source Projects?

When you contribute to Open Source, you are taking part in the collaborative effort of a vast community of passionate developers and contributors! This means that you'll meet new people and make friends, collaborate with other developers on projects, find mentors and have an opportunity to learn from each other. Open source also empowers you to build your confidence as a developer, build your resume, and build your professional network. Moreover, your contribution—no matter how big or small—makes a direct impact on the future of the open source project.

## Getting Started

Start off easy by adding something small (like adding a new dog instance). This will help you orient yourself in the project and increase your confidence and experience. No one will judge you if you make a mistake, and you can't break anything! Ask for some pointers if you get stuck. You got this!

Want some extra details on how to run through this process like a pro? Have a quick read of this article [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/) to prep you for your first steps into open source contributions.

The only thing that is required to get started is `git`. Make sure you have it installed on your computer by running `git --version` in your terminal. If you want some more detailed instruction on `git`, [try this](https://help.github.com/articles/set-up-git/). Want some extra `git` info and instruction? Check these out:

- [How to use Git: A reference guide](https://www.digitalocean.com/community/cheatsheets/how-to-use-git-a-reference-guide)
- [Resource To learn Git](https://try.github.io/)
- [Git & GitHub Crash Course For Beginners](https://www.youtube.com/watch?v=SWYqp7iY_Tc)
- [Git Tutorial - Learn Command-line Git & GitHub](https://www.youtube.com/playlist?list=PLpcSpRrAaOarEpNz71TSfNVd0eQmsZSgN) (4 part video tutorial)

## File & Folder Details & Descriptions

Here are some details about the files & folders in the repo and where you to start if you want to contribute something:

### Cats Folder

> `catBreeds.js`

- A collection of cat breeds created based on [this Wikipedia file](https://en.wikipedia.org/wiki/List_of_cat_breeds).
- If you would like to add a breed to the file, please cite where you got the description in your commit comments.
- If there is any additional information you might like to contribute please go ahead! However please include detailed commit comments as to why you think it's significant - I don't mind if you go over 50 characters 😉

> `cats.js`

- A collection that lists specific instances of cats with details describing them.
- Feel free to add to this file with a completed entry that matches the structure of the other entries (noted at the top of the file).

### Dogs Folder

> `dogBreeds.js`

- An incomplete collection of dogs based on [this Britannica site](https://www.britannica.com/topic/list-of-dog-breeds-2027892).
- If you would like to add a breed to the file, please cite where you got the description in your commit comments. You could start by using [this Wikipedia list](https://en.wikipedia.org/wiki/List_of_dog_breeds). - If there is any additional information you might like to contribute please go ahead! However please include detailed commit comments as to why you think it's significant - I don't mind if you go over 50 characters 😉

> `dogs.js`

- A collection that lists specific instances of dogs with details describing them.
- Feel free to add to this file with a completed entry that matches the structure of the other entries (noted at the top of the file).

### Sales Folder

> `dailymargins.csv`

- A table showing the date, net purchases, gross sales, tax, total margin on the sales of a small business for just over a year.
- Feel free to add a date (in order please 😊) with a complete line of info, but there are a few notes to keep in mind if you want to contribute here:
  - this data is for a small business and sales should not be more than $6000 per day and purchases should stay under $3000 per day.
  - the tax percentage on sales is approximately 14.5%... approximately 😉
  - no worries if you don't read this note and just add random numbers - I'll reach out to you through the PR and ask you to tweak it... kinda like the real world!

> `ordersplaces.csv`

- A table showing the orders received for a distribution center.
- This data is pretty detailed, feel free to add something but there are a few notes to keep in mind if you want to contribute here:

  - any pet product will do, but pet products only please 😊
  - deal sizes are:
    - small - less than $3000
    - medium - greater than $3000 & less than $7000
    - large - greater than $7000
  - QTR-ID, MSRP & product codes are important! If you are going to duplicate a product that is already listed please copy these values as well, if you create a new product ensure you create a new QTR-ID, MSRP & product code
  - all order numbers must be unique
  - orders can ship to any address in the world!
  - each country belongs to region of the world and each region has an abbreviation, they are:
    - East Asia Pacific - EAP
    - Europe and Central Asia - ECA
    - Latin America and the Caribbean - LAC
    - Middle, East and North Africa - MENA
    - South Asia - SAR
    - Sub-Saharan Africa - SSA
    - Please ensure your country's region is correct and you can cross check [here](https://www.nationsonline.org/oneworld/countries_of_the_world.htm)

<!-- <img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/fork.png" alt="fork this repository" /> -->

## Step-by-Step Guide

### 1. Fork this repository

Fork this repository by clicking on the fork button on the top of this page. Give your new repo any name and description you like (or leave it as the default), this will create a copy of this repository in your account. A fork is basically your own working copy of this repository.

### 2. Clone the repository

<!-- <img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/clone.png" alt="clone this repository" /> -->

Now you will clone the forked repository to your machine. Go to your GitHub account, open the forked repository called `<your-repo-name>` _(forked from azuleverdosa/pet_database)_. Click on the "Code" button and then click the _copy to clipboard_ icon.

Open a terminal and run the following git command inside the folder you want to copy the repo:

```
git clone <url-you-just-copied>
```

> **NOTE:** replace `<url-you-just-copied>` (including the <>) with the url you just copied for this repository (your fork of this project).

<!-- <img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/copy-to-clipboard.png" alt="copy URL to clipboard" /> -->

For example:

```
git clone git@github.com:<yourusername>/pet_database.git
```

> **NOTE:** `<this-is-you>` will be your GitHub username. Here you're copying the contents of the pet_database repository on your GitHub to your computer.

### 3. Create a branch

It's common practice to create a new branch for each new feature or bugfix you are working on. Change into the new repository directory on your computer (if you are not already there):

```
cd <your-repo-name>
```

Now create a branch using the `git switch` command:

```
git switch -c <your-new-branch-name>
```

> **NOTE:** replace `<your-new-branch-name>` (including the <>) with whatever you want to call this new branch.

For example:

```
git switch -c create/new-dog/jane
```

<details>

<summary> <strong>Want more info on branch naming conventions? Click here for details!</strong> </summary>

- [Best Practices](https://tilburgsciencehub.com/building-blocks/collaborate-and-share-your-work/use-github/naming-git-branches/)
- [Cheatsheet](https://medium.com/@abhay.pixolo/naming-conventions-for-git-branches-a-cheatsheet-8549feca2534)

</details>

### 4. Install the dependencies

In most cases, before you begin making your changes you'll need to install the project's dependencies. This repo does not have any (as of yet) so you don't need this step, but it's useful to know. In your terminal you would run:

```
npm install
```

<!-- ### 5. Open your repo in your your code editor -->

### 6. Make desired changes

Now it's time to make your changes. Let's add a new instance of a dog to the `dogs` collection 🌭

<!-- 🐾🐕 -->

1. Open your new repo in your favourite editor (preferable VSCode 😉).

2. Ensure you have switched to your new branch.
   <details>
   <summary> <strong>Not sure how? Click here for details!</strong> </summary>
   In your code editor terminal type:

   > `git branch  `

   This will list all the branches and highlight the branch you are using.

   If your newly created branch IS highlighted, you are good to go!

   If your newly created branch is NOT highlighted, repeat the git switch steps WITHOUT -c

   > `git switch <your-new-branch-name>`

   </details>

<!-- 2. Ensure you have switched to your new branch - in your code editor terminal type:

   > `git branch  `

   this will list all the branches and highlight the branch you are using

   if you are not on your new branch repeat the git switch steps WITHOUT -c

   > `git switch <your-new-branch-name>` -->

3. Add a new dog object to the end of the `dogs` array.

4. Save the file when you are done.

### 7. Commit your changes

This involves a few steps, first, run `git status` to see which changes you have made. This will look something like:

<img width="300" src=".github/status.png" alt="Git status" />

Next, `add` these changes to your next commit by running:

```
git add dogs.js
```

Finally you can commit your changes with a message by running:

```sh
git commit -m <"Your message">
```

For example:

```sh
git commit -m "Adding a new rebus"
```

### Push changes to GitHub

Push your changes using the command `git push`:

```
git push -u origin your-branch-name
```

replacing `your-branch-name` with the name of the branch you created earlier.

### 6. Submit your changes for review

If you go to your repository on GitHub, you'll see a `Compare & pull request` button. Click on that button.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/compare-and-pull.png" alt="create a pull request" />

Now submit the pull request.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/submit-pull-request.png" alt="submit pull request" />

When I merge all your changes into the main branch of this project, you will get a notification email letting you know it's.

### Git source control in your code editor

Additionally, there are many code editors that will allow you to perform all these git commands through the editor itself. I use VS Code and you can follow their [walk through](https://code.visualstudio.com/docs/sourcecontrol/intro-to-git) of how to clone, commit and push to your remote repo. If you are using a different code editor, check out their documentation to see if they have any instructions for source control!

### Where to go from here?

Congrats! You just completed the standard _fork -> clone -> edit -> pull request_ workflow that you'll often encounter as a contributor!

Celebrate your contribution and share it with your friends and followers by going to [web app](https://firstcontributions.github.io/#social-share).

Keep this good time rollin'! Here is a list of projects with easy issues you can get started on:

- [FirstContributions](https://firstcontributions.github.io/#project-list)
- [Friendly Beginner Repos Repos from @MunGell](https://github.com/MunGell/awesome-for-beginners)
- [GitHub Endorsed "Great for New Contributors" ](https://github.com/showcases/great-for-new-contributors)

## Further Reading

- [Understanding the GitHub Flow](https://guides.github.com/introduction/flow/)
- [Learn GitLab with tutorials](https://about.gitlab.com/get-started/)
- [GitHub Open Source Guide](https://opensource.guide/)
- [How open source contributions can boost your career](https://opensource.com/article/19/5/how-get-job-doing-open-source)
- [How to write the perfect pull request](https://github.blog/2015-01-21-how-to-write-the-perfect-pull-request/)
- [How to write a good commit message](https://dev.to/chrissiemhrk/git-commit-message-5e21)
- [How to start a great OSS project](https://go.gitlab.com/Hm4BNB)
- [5 things for your first time contributing](https://go.gitlab.com/nlPKcN)