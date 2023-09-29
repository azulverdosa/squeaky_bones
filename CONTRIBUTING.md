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

Want some extra details on how to run through this process like a pro? Have a quick read of this article [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/) to prep you for your first steps into open source contributions.

## Getting Started

Start off easy by adding something small (like adding a new dog instance). This will help you orient yourself in the project and increase your confidence and experience. No one will judge you if you make a mistake, and you can't break anything! Ask for some pointers if you get stuck. You got this!

The only thing that is required to get started is `git`. Make sure you have it installed on your computer by running `git --version` in your terminal. If you have not installed it yet, here are some brief instructions:

<details>

<summary> <strong>Installing on macOS</strong> </summary>

There are several ways to install Git on macOS. The easiest is probably to install the Xcode Command Line Tools. On Mavericks (10.9) or above you can do this simply by trying to run git from the Terminal the very first time:

```sh
git --version
```

If you don’t have it installed already, it will prompt you to install it.

</details>

<details>

<summary> <strong>Installing on Linux</strong> </summary>

If you want to install the basic Git tools on Linux via a binary installer, you can generally do so through the package management tool that comes with your distribution. If you’re on Fedora (or any closely-related RPM-based distribution, such as RHEL or CentOS), you can use dnf:

```sh
sudo dnf install git-all
```

If you’re on a Debian-based distribution, such as Ubuntu, try apt:

```sh
sudo apt install git-all
```

For more options, there are instructions for installing on several different Unix distributions on the [Git website](https://git-scm.com/download/linux).

</details>

<details>

<summary> <strong>Installing on Windows</strong> </summary>

There are also a few ways to install Git on Windows. The most official build is available for download on the Git website. Just go to [HERE](https://git-scm.com/download/win) and the download will start automatically. Note that this is a project called Git for Windows, which is separate from Git itself; for more information on it, go to [Git For Windows](https://gitforwindows.org).

To get an automated installation you can use the Git Chocolatey package. Note that the Chocolatey package is community maintained.

</details>

Want some extra `git` info and instructions? Check these out:

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

## Step-by-Step Guide

### 1. Fork this repository

Fork this repository by clicking on the `fork` button on the top of this page. Give your new repo any new name (`<your-repo-name>`) and description you like or leave it as the default. This will create a copy of this repository in your account. A fork is basically your own working copy of this repository.

<img src="/images/fork.png" alt="fork button" />

### 2. Clone the repository

Now you will clone the forked repository to your machine. Go to your GitHub account, open the forked repository called `<your-repo-name>` _(forked from azuleverdosa/pet_database)_ . Click on the `Code` button at the top right and then click the _copy to clipboard_ icon.

<img src="/images/clone.png" alt="clone button" />

Open a terminal and run the following git command inside the folder you want to clone the repo:

```sh
git clone <url-you-just-copied>
```

> **NOTE:** replace `<url-you-just-copied>` (including the <>) with the url you just copied for this repository (your fork of this project).

<!-- <img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/copy-to-clipboard.png" alt="copy URL to clipboard" /> -->

For example:

```sh
git clone git@github.com:<user-name>/pet_database.git
```

Here you're copying the contents of the `pet_database` repository on your GitHub to your computer.

> **NOTE:** `<user-name>` will be your GitHub username.

### 3. Create a branch

It's common practice to create a new branch for each new feature or bugfix you are working on. Change into the new repository directory on your computer (if you are not already there):

```sh
cd <your-repo-name>
```

Now create a branch using the `git switch` command:

```sh
git switch -c <your-new-branch-name>
```

> **NOTE:** replace `<your-new-branch-name>` (including the <>) with whatever you want to call this new branch.

For example:

```sh
git switch -c create/new-dog/jane
```

<details>

<summary> <strong>Want more info on branch naming conventions? Click here for details!</strong> </summary>

- [Best Practices](https://tilburgsciencehub.com/building-blocks/collaborate-and-share-your-work/use-github/naming-git-branches/)
- [Cheatsheet](https://medium.com/@abhay.pixolo/naming-conventions-for-git-branches-a-cheatsheet-8549feca2534)

</details>

### 4. Install the dependencies

In most cases, before you begin making your changes you'll need to install the project's dependencies. This repo does not have any (as of yet) so you don't need this step, but it's useful to know. In your terminal you would run:

```sh
npm install
```

### 5. Make desired changes

Now it's time to make your changes. Let's add a new instance of a dog to the `dogs` collection 🌭

<!-- 🐾🐕 -->

1. Open your new repo in your favourite editor (preferable VSCode 😉).

2. Ensure you have switched to your new branch.
   <details>
   <summary> <strong>Not sure how? Click here for details!</strong> </summary>
   In your code editor terminal type:

   > `git branch`

   This will list all the branches and highlight the branch you are using.

   If your newly created branch IS highlighted, you are good to go!

   If your newly created branch is NOT highlighted, repeat the git switch steps WITHOUT -c

   > `git switch <your-new-branch-name>`

   </details>

3. Open the `dogs` file.

4. Add a new dog object to the end of the `dogs` array.

5. Save the file when you are done.

### 6. Commit your changes

This involves a few steps, first, run `git status` to see which changes you have made. This should look something like:

<img src="/images/status.png" alt="git status" />

Next, `add` these changes to your next commit by running:

```sh
git add dogs.js
```

Finally, you can commit your changes with a message by running:

```sh
git commit -m "<Your-message>"
```

For example:

```sh
git commit -m "Add new dog"
```

> **NOTE:** You MUST include the " " around your commit comments.

### 7. Push changes to GitHub

Push your changes using the command `git push`:

```sh
git push -u origin <your-new-branch-name>
```

> **NOTE:** replace `<your-new-branch-name>` (including the <>) with the name of the branch you created earlier.

### 8. Open a pull request

If you go to your repository on GitHub, you'll see a `Compare & pull request` button. Click on that button and you're almost there!

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/compare-and-pull.png" alt="create a pull request" />

1. Describe your changes and submit your pull request.

2. Now submit the pull request!

### 🚀 Congratulations! 🚀

You just took your first step as an open source contributor and completed the standard `fork -> clone -> edit -> pull request` workflow that you'll often encounter as a contributor!. Your pull request will be reviewed as soon as possible. When I merge all your changes into the main branch of this project, you will get a notification email letting you know it's approved.

If you feel like it, please give this repos a star ⭐.

<!-- <img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/submit-pull-request.png" alt="submit pull request" /> -->

### Git source control in your code editor

Additionally, there are many code editors that will allow you to perform all these git commands through the editor itself. I use VS Code and you can follow their [walk through](https://code.visualstudio.com/docs/sourcecontrol/intro-to-git) of how to clone, commit and push to your remote repo. If you are using a different code editor, check out their documentation to see if they have any instructions for source control!

### Where to go from here?

<!-- Celebrate your contribution and share it with your friends and followers by going to [web app](https://firstcontributions.github.io/#social-share). -->

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
