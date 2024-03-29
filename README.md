# Gift time 
Welcome in christmas messenger web application!

<img src = "https://user-images.githubusercontent.com/101999487/208204711-085b31f6-a5f7-4eff-998d-a59f02bba6e4.png" />

## What is it?
This is a project of message system web application, realized to help santa claus with his christmas duties.

## What can you do here?
Join us to feel christmas day atmosphere! Just create account, by choosing password, username and account type. Text with another users, choose your dream christmas present or help santa with delivering gifts to children.

<img src = "https://user-images.githubusercontent.com/101999487/208207691-6b205b7d-1fe1-4c17-afba-31f9635f14f7.png" />

## Account types

In this system, there are three different account types to choose from:


### Child
<p align="center">
<img src = "https://user-images.githubusercontent.com/101999487/208208379-3e8009ef-98ee-47d9-81b6-48c3b5daa334.png" width="350" height ="200" />
</p>

Child can write messages to Santa to ask about dream gift and receive messages from santa and notifications about his/her gift delivery status. He is also able to text with other children, and Elves if it is need.

### Santa
<p align="center">
<img src = "https://user-images.githubusercontent.com/101999487/208208425-5f970ae2-2ec1-465f-b80b-92baeee24978.png" width="350" height ="200" />
</p>

Santa receives messages from children about their dream presents. After making up his decision, he can delete message and all gift list if kid was rude or edit this list by adding new presents or replacing presents with these more suitable. After editing, he send message with new presents list to his helpers - Elves. Ofcourse, everybody knows ( I hope), that there can be only one Santa type account!

### Elf
<p align="center">
<img src = "https://user-images.githubusercontent.com/101999487/208209339-62ff1467-a458-4db2-b300-b1b91b62d910.png" width="350" height ="200" />
</p>

Elf is a Santa's best helper. His main task is to prepare gifts after receiving list from Santa. After that, he can mark given presents list as ' ready to send '. What is more, he can also write message to Santa if there are some questions/ doubts about gifts.

## Demo

### 1. Create new account and log in into system.
#### System will check if username is available and password is correctly retyped.
https://user-images.githubusercontent.com/101999487/212500144-d63b0b29-6db3-4a03-ac03-b13ba5fa9846.mp4

### 2. Add/edit/delete presents in Your list.
#### Child user can create his dream presents list and send it to Santa.
https://user-images.githubusercontent.com/101999487/212500233-16586466-476b-42f3-b3d6-9184defab69c.mp4

### 3. Write messages to other users.
#### In mailbox, user is able to browse through all messages, reply to chosen one or just delete one of them.

https://user-images.githubusercontent.com/101999487/212500343-dd227b57-558d-472a-a0d1-373e4ee28e16.mp4

### 4. Santa is able to edit child's presents list.
#### Then, if he finally make up his mind, send presents list to Elves. They are his helpers who will prepare presents to send.

https://user-images.githubusercontent.com/101999487/213158724-2e8a94ca-66f7-4a21-bca4-4619866b551a.mp4

### 5. Elves mark presents order as "completed",  when they complete all ordered presents.

https://user-images.githubusercontent.com/101999487/213159445-195e8e86-b890-438a-a87e-0ba8686429d6.mp4

### 5. " Child's presents successfully sent " notification.
If Elf marks Child's present as "completed", Child will be given a notification about it.

https://user-images.githubusercontent.com/101999487/213160012-b37bb9c7-e408-46e7-a655-ec5641341230.mp4

## Run it on Your machine

### Requirements 

<p>• PostgreSQL ( I used 6.15 version )</p>
<p>• Node JS (I used 18.12.1 version)</p>
<p>• ReactJS ( I used 18.2.0 version )</p>
<p>• JQuery ( I used 3.6.1 version )</p>
<p>• express ( I used 4.18.2 version)</p>
<p>• pg  ( I used 8.8.0 version)</p>
<p>• cors ( I used 2.8.5 version)</p>

### Instalation 

#### PostgreSQL
##### 1. Go to ofiicial postgresql website https://www.postgresql.org/download/ 
##### 2. Select your operating system family ( I used Windows 10 ) and click "Download the installer".


#### NodeJS
##### 1. Go to ofiicial postgresql website https://nodejs.org/en/download/
##### 2. Select your operating system family ( I used Windows 10 ) and download the installer.
##### 3. Verify instalation
```
node -v
```
(The system should display the Node.js version installed on your system)

#### React JS
Full tutorial how to install React JS app you can find here: https://github.com/facebook/create-react-app

#### JQuerry
Full tutorial how to install JQuerry app you can find here: https://jquery.com/download/

#### pg, cors

You can install these packages using terminal ( I installed it in VSCode terminal )

```
npm install cors
```

```
npm install pg
```

#### express
Assuming you’ve already installed Node.js, create a directory to hold your application, and make that your working directory.

```
mkdir myapp
cd myapp
```

Use the npm init command to create a package.json file for your application. For more information on how package.json works, see Specifics of npm’s package.json handling.

```
npm init 
```
Enter app.js, or whatever you want the name of the main file to be. If you want it to be index.js, hit RETURN to accept the suggested default file name.
Now install Express in the myapp directory and save it in the dependencies list. For example:

```
npm install express
```

### Creating database

To create santa users database I used Windows 10 cmd.
#### 1. In your cmd use command "psql -U *your username*". For example, for username "postgres" it could be look like that:
```
psql -U postgres
```
hit "enter" key and then, type password You have set before during postgresql installation.

#### 2. Your output should look similar to this:

![image](https://user-images.githubusercontent.com/101999487/213876906-5f9ef56e-4ae8-4297-8f47-6b549e66c0b5.png)

Now create database by typing:
```
CREATE DATABASE santa;
CREATE TABLE santa_users(
    id SERIAL PRIMARY KEY,
    user_data JSON,
    user_presents JSON,
    user_messages JSON
);
```
Your output should look like that:
```
CREATE DATABASE
CREATE TABLE
```

### Run server
To run server from terminal, go to main project directory "gift_time" and then go to "server" directory.

```
cd gift_time
cd server
```
For example path may look like that:
```
C:\Users\*your username*\...\*directory with project* \gift_time\server
```

In server directory run command:
```
nodemon index
```
Your output should look like that:

![image](https://user-images.githubusercontent.com/101999487/213877626-545a2cb2-42d2-4251-90e5-e34978a8d26a.png)

### Run app
To run server from terminal, go to main project directory "gift_time" and then go to "santa" directory.

```
cd gift_time
cd santa
```
For example path may look like that:
```
C:\Users\*your username*\...\*directory with project* \gift_time\santa
```

In santa directory run command:
```
npm start
```
React app should run in Your browser.

## Technologies
<h3 align="left">Here are technologies I used</h3>


<h> Frontend </h>
<p align="left"> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a></p>
  
<h> Backend </h>
<p align="left"> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </a>  </p>

Postman for API testing


<img width="40" height="40" src="https://user-images.githubusercontent.com/101999487/212501172-a11c27f8-ef80-47c5-9f88-a34233d07667.png"></img>
