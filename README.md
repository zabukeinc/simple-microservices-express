# badr-be-assessment
assessment as a backend engineer on badr


# System Design
https://drive.google.com/file/d/1vTmn0iC6LX1YXymLDytRG8s5TbxXVjaM/view?usp=sharing

# DB Schema
https://dbdiagram.io/d/Badr-Backend-Assessment-64507c4fdca9fb07c455a78b


# Setup Project
```
cd badr-be-assessment
npm install

cd services/user
npm install

cd services/transaction
npm install

cd services/material
npm install

cd services/gateway
npm install
```

# Configurations
On each services has their own `.env`, make sure you have configured it up based on your local machine.
Note: Each env must be on different port(s).

# Run the apps
You can run the apps concurently using:

On folder be-badr-assessment
```
npm run dev
```

Or you can run single service using:


```
cd services/user
npm run dev
```