# Pet Information Database

> List of dogs and cats and their basic details, for use as mock data AND to help new developers contribute to open source!

## Table of Contents

- [General Info](#general-information)
- [Project Status](#project-status)
- [First-time Contributor Instructions](#hacktoberfest-instructions)
- [Further Reading](#further-reading)
- [Room for Improvement](#room-for-improvement)
- [Contact](#contact)
- [Support](#🤝-support)
- [License](#license)

## General Info

This is a mini project of mine that is going to be used as mock-data of dogs and cats with a short list of pet details. I plan to use this database as mock-data in applications that I have on the back burner. I am opening this up for Hacktoberfest to allow new developers the chance to make their first contributions! There are some other files in this same repo that are related to random thoughts I've had for applications.

## Project Status

Status: In Progress

## First-time Contributor Instructions

Contributing to an open source project for the first time can be pretty scary. This repo is here to help you take your first steps as an open source contributor by adding to a simple database. Have a look around, have an additional thought? Add it!

### Who can contribute?

Anyone and everyone can! However this is geared mostly for beginners 😉

### Why Contribute to Open Source Projects?

When you contribute to Open Source, you are taking part in the collaborative effort of a vast community of passionate developers and contributors! This means that you'll meet new people and make friends, collaborate with other developers on projects, find mentors and have an opportunity to learn from each other. Open source also empowers you to build your confidence as a developer, build your resume, and build your professional network. Moreover, your contribution—no matter how big or small—makes a direct impact on the future of the open source project.

### Getting Started

Start off easy by adding something small (like adding a new dog breed). This will help you orient yourself in the project and increase your confidence and experience. No one will judge you if you make a mistake, and you can't break anything! Ask for some pointers if you get stuck. You got this!

The only thing that is required to get started is `git`. Make sure you have it installed on your computer by running `git --version` in your terminal. If you want some more detailed instruction on `git`, [try this](https://help.github.com/articles/set-up-git/).

### File & folder details

Here are some details about the files & folders in the repo and where you to start if you want to contribute something:

#### Cats Folder

> `catBreeds.js`

- A list created based on [this Wikipedia file](https://en.wikipedia.org/wiki/List_of_cat_breeds).
- If you would like to add a breed to the file, please cite where you got the description in your commit comments.
- If there is any additional information you might like to contribute (please add it with detailed commit comments as to why you think it's significant).

> `cats.js`

- A database that lists specific instances of a cat with details describing them.
- Feel free to add to this file with a completed entry that matches the structure of the other entries (noted at the top of the file).

#### Dogs Folder

> `dogBreeds.js`

- An incomplete list of dogs based on [this Britannica site](https://www.britannica.com/topic/list-of-dog-breeds-2027892).
- If you would like to add a breed to the file, please cite where you got the description in your commit comments. You could start by using [this Wikipedia list](https://en.wikipedia.org/wiki/List_of_dog_breeds).

> `dogs.js`

- A database that lists specific instances of a dogs with details describing them.
- Feel free to add to this file with a completed entry that matches the structure of the other entries (noted at the top of the file).

#### Sales Folder

> `dailymargins.csv`

- A table showing the date, net purchases, gross sales, tax, total margin on the sales of a small business for just over a year.
- Feel free to add a date (in order please 😊) with a complete line of info, but there are a few notes to keep in mind if you want to contribute here:
  - this data is for a small business and sales should not be more than $6000 per day and purchases should stay under $3000.
  - the tax percentage on sales is approximately 14.5%
  - no worries if you don't read this note and just add random numbers - I'll reach out to you through the PR and ask you to tweak it... kinda like the real world!

> `ordersplaces.csv`

- A table showing the orders received for a distribution center.
- This data is pretty detailed, feel free to add something but to keep in mind the pattern that has been started and are a few notes to keep in mind if you want to contribute here:

  - any pet product will do, but pet products only please 😊
  - they can ship to any address in the world!
  - deal sizes are:
    - small - less than $3000
    - medium - greater than $3000 & less than $7000
    - large - greater than $7000
  - QTR-ID, MSRP & product codes are important! If you are going to duplicate a product that is already listed please copy these items as well, if you create a new product ensure you create a new QTR-ID, MSRP & product code as well
  - all order numbers must be unique
  - each country belongs to region of the world and each region has an abbreviatoion, they are:
    - East Asia Pacific - EAP
    - Europe and Central Asia - ECA
    - Latin America and the Caribbean - LAC
    - Middle, East and North Africa - MENA
    - South Asia - SAR
    - Sub-Saharan Africa - SSA
    - please ensure your country region is correct by checking [here](https://www.nationsonline.org/oneworld/countries_of_the_world.htm)

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/fork.png" alt="fork this repository" />

### Step-by-Step Guide

> ### 1. Fork this repository

Fork this repository by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account.

> ### 2. Clone the repository

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/clone.png" alt="clone this repository" />

Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the _copy to clipboard_ icon.

Open a terminal and run the following git command:

```
git clone "url you just copied"
```

where "url you just copied" (without the quotation marks) is the url to this repository (your fork of this project). See the previous steps to obtain the url.

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/copy-to-clipboard.png" alt="copy URL to clipboard" />

For example:

```
git clone git@github.com:this-is-you/first-contributions.git
```

where `this-is-you` is your GitHub username. Here you're copying the contents of the first-contributions repository on GitHub to your computer.

> ### 3. Create a branch

Change to the repository directory on your computer (if you are not already there):

```
cd first-contributions
```

Now create a branch using the `git switch` command:

```
git switch -c your-new-branch-name
```

For example:

```
git switch -c add-alonzo-church
```

> ### 4. Make desired changes and commit those changes

Now open `Contributors.md` file in a text editor, add your name to it. Don't add it at the beginning or end of the file. Put it anywhere in between. Now, save the file.

<img align="right" width="450" src="https://firstcontributions.github.io/assets/Readme/git-status.png" alt="git status" />

If you go to the project directory and execute the command `git status`, you'll see there are changes.

Add those changes to the branch you just created using the `git add` command:

```
git add Contributors.md
```

Now commit those changes using the `git commit` command:

```
git commit -m "Add your-name to Contributors list"
```

replacing `your-name` with your name.

> ### 5. Push changes to GitHub

Push your changes using the command `git push`:

```
git push -u origin your-branch-name
```

replacing `your-branch-name` with the name of the branch you created earlier.

<details>
<summary> <strong>If you get any errors while pushing, click here:</strong> </summary>

- ### Authentication Error
     <pre>remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead.
  remote: Please see https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/ for more information.
  fatal: Authentication failed for 'https://github.com/<your-username>/first-contributions.git/'</pre>
  Go to [GitHub's tutorial](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account) on generating and configuring an SSH key to your account.

</details>

> ### 6. Submit your changes for review

If you go to your repository on GitHub, you'll see a `Compare & pull request` button. Click on that button.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/compare-and-pull.png" alt="create a pull request" />

Now submit the pull request.

<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/submit-pull-request.png" alt="submit pull request" />

Soon I'll be merging all your changes into the main branch of this project. You will get a notification email once the changes have been merged.

### Where to go from here?

Congrats! You just completed the standard _fork -> clone -> edit -> pull request_ workflow that you'll often encounter as a contributor!

Celebrate your contribution and share it with your friends and followers by going to [web app](https://firstcontributions.github.io/#social-share).

You could join our slack team if you need any help or have any questions. [Join slack team](https://join.slack.com/t/firstcontributors/shared_invite/zt-1n4y7xnk0-DnLVTaN6U9xLU79H5Hi62w).

Now let's get you started with contributing to other projects. We've compiled a list of projects with easy issues you can get started on. Check out [the list of projects in the web app](https://firstcontributions.github.io/#project-list).

### [Additional material](additional-material/git_workflow_scenarios/additional-material.md)

## Further Reading

- [GitHub Open Source Guide](https://opensource.guide/)
- [Resource To learn Git](https://try.github.io/)
- [Git Tutorial Part 1: What is Version Control?](https://www.youtube.com/watch?v=9GKpbI1siow&feature=youtu.be)
- [Git Tutorial Part 2: Vocab (Repo, Staging, Commit, Push, Pull)](https://www.youtube.com/watch?v=n-p1RUmdl9M)
- [Git Tutorial Part 3: Installation, Command-line & Clone](https://www.youtube.com/watch?v=UFEby2zo-9E)
- [Git Tutorial Part 4: GitHub (Pushing to a Server)](https://www.youtube.com/watch?v=ol_UCWox9kc)
- [Git & GitHub Crash Course For Beginners](https://www.youtube.com/watch?v=SWYqp7iY_Tc)
- [Git Magic](http://www-cs-students.stanford.edu/~blynn/gitmagic/index.html)
- [Friendly Beginner Repos](https://github.com/MunGell/awesome-for-beginners)
- [GitHub Endorsed Beginning Contributer Repos](https://github.com/showcases/great-for-new-contributors)
- [Sourcetree - Git GUI for macOS and Windows](https://www.sourcetreeapp.com/)
- [VS Code - extensible code editor](https://code.visualstudio.com/)
- [GitHub Atom - Hackable Text Editor for the 21st Century](https://atom.io/)

## Room for Improvement

Improvement Thoughts:

- Build out detailed list that can be used for veterinarians, dog daycare, or any other project I can think of
- Open up for Hactoberfest to help jr devs get involved on GtiHub

## Contact

Created by [@azulverdosa](https://github.com/azulverdosa) - feel free to contact me!

- [LinkedIn](https://www.linkedin.com/in/avatorre/ 'linked')
- [Email](mailto:ellemocambo@gmail.com)

## 🤝 Support

Contributions, issues, and feature requests are welcome!

Give a ⭐️ if you like this project!

## Acknowledgments

- Repo Inspiration - [@Donard97](https://github.com/Donard97/vet-clinic-database)
- New Contributors Instructions Inspiration - [GitHub](https://github.com/firstcontributions/first-contributions)

## License

MIT License Copyright (c) [2023] [AvaElise]
