# AiME News - Tech Blog

## Description

Welcome to AiME - a CMS-style blog site focused on the latest news and advancements in AI generated artistry and content creation.

The site was created utilizing JavaScript, Node.js, Express.js, MySQL, Sequelize, and Handlebars to create a full-stack application that allows users to sign-up and post to the blog, and it includes the following features:

- When the user first visits the site, they are presented with the homepage that shows any existing blog posts, and navigation links to either log in or sign up
- When the user signs up, they are prompted to create a username and password
- Once a user is signed up, their credentials are saved—they can revisit the site at a later time and choose to log in
- Once a user is signed in, they can see navigation links for the homepage, the dashboard, and the option to log out
- When the user clicks on the homepage option in the navigation, they are taken to the homepage and presented with existing blog posts that include the post title and the date created
- When the user enters a comment and clicks on the submit button while signed in, the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
- Once the user clicks on the button to add a new blog post, they are prompted to enter both the title and contents for their blog post, and when they create their new blog post, the title and contents of the post are saved—the dashboard is subsequently updated
- When the user clicks on the logout option in the navigation, they are signed out of the site


![AiME Tech Blog screenshot](public/stylesheets/assets/screenshot.png)

The deployed site can be found at https://aime-news.herokuapp.com.


## Installation

To install this application, first clone the repo to your local machine. Then, you will need to install the node dependencies/modules which can be done by running the ```npm install``` command in your terminal/bash shell. 

## Usage

To use this application, you first need to have MySQL installed, and then initialize the database with the following command:

```
mysql -u root -p
``` 
Next, enter your password for MySQL and source the database: 
```
SOURCE db/schema.sql
quit
``` 
Then run the following to seed the database:
```
npm run seed
```
Finally, initialize the server: 
```
npm run start
```

## Credits

Collaborators include the instructor, TAs, and fellow classmates of the UCF Coding Bootcamp (Spring 2022).


## License

Copyright (c) 2022 Vik Maharaj

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Badges

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

![NODE.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

![Built with Handlebars](https://camo.githubusercontent.com/157406d523db8de87230e52d6800e8afa82a51feca33cb56f7f1c80fc557704f/687474703a2f2f706978656c2d636f6f6b6572732e6769746875622e696f2f6275696c742d776974682d6261646765732f68616e646c65626172732f68616e646c65626172732d73686f72742d666c61742e706e67)

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)