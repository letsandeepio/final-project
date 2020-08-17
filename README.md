# DoSomething App

DoSomething helps people fill free time more mindfully. Users collect and categorize activities they want to do in the app along with the estimated duration for each of them. Activities may include hiking, watching a certain movie, or cooking a certain recipe. The next time they find themselves with a block of unstructured time they can come back to the app, enter how much time they have, select category filters, and receive suggestions of things to do. To avoid causing decision paralysis, we only show one option at a time for users to accept or reject. DoSomething makes it easier for people to fill their time with activities that they actually want to do… much better than scrolling endlessly on social media!

[ [View Live Version](https://gracious-ride-f3cbe4.netlify.app/)] - Please note an active mic recording is required in order to run this demo.

## App Welcome Screen

![welcome](https://raw.githubusercontent.com/letsandeepio/final-project/master/documentation/welcome.png)

## Tech Stack

![tech stack](https://raw.githubusercontent.com/letsandeepio/final-project/master/final-project-fe/public/images/slide-tech-stack.png)

### Front-end

Front-end is a single page application powered by React. It uses Material UI for component based design. Sass is used for further customization. React router is used for routing needs of the app. Apollo Client is used on the front-end to talk to the GraphQL endpoint. App make use of Web Speech Recognition API to enable listen to voice commands.

Bing Search API is used to fetch related images while adding the activity to the database.

Front-end follows Continous Development approach and is hosted [live at Netlify](https://gracious-ride-f3cbe4.netlify.app/)

### Back-end

Back-end is written using Typescript and is essential an express server running on Node.JS. `graphql-yoga` is used to setup the single Graphql endpoint which serves all the data needs of the front end. Prisma ORM (Object Relational Mapping) is used to talk to PostgreSQL Database. The back-end is currently hosted [live at HerokuApp](https://timefiller-api.herokuapp.com/).

## Storybook

Storybook is used to develop & tests components in isolation before integrating them in the final product. To run storybook, please follow the instructions to setup the front-end and then run `npm storybook`.

## Installation

Clone the entire project folder using:

`git clone [repo-url] [folder-name]`

replace the repo-url with the url of this repo and folder-name with the name you want to use for the root folder.

### Setup front-end

CD into `final-project-fe` and run `npm install`. Run `npm start` to start the development server.

### Setup back-end

CD into `final-project-be` and run `npm install` and follow the steps below.

- Sign-up for Bing Image Search API. Copy .env-example to .env file inside `final-project-be` and set the Bing Search API Key.

- Setup a remote or local PostgreSQL databse and ensure it is running using PSQL command.

- CD into `final-project-be/prisma`. Copy the .env-example to .env and set the databse url to your newly setup PSQL database (_postgresql://[user[:password]@][netloc][:port][/dbname]_)

- Run `npx prisma` to generate the local bindings & connect to the database using Prisma ORM.

- Run `npm run db:reset` to setup the tables and seed the data.

- Install `nodemon` using NPM (`npm install -g nodemon` to install it globally)

- run `nodemon` from within `final-project-be` to start the development server.

## Contributors

![scheduler](https://raw.githubusercontent.com/letsandeepio/final-project/master/final-project-fe/public/images/slide-profiles.png)

- Keith Millar [[ View Github ](https://github.com/millarke)]
- Eileen Li [[ View Github ](https://github.com/eileenlimur)]
- Sandeep Chopra [[ View Github ](https://github.com/letsandeepio)]
