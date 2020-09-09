# BOARD INFINITY BACKEND HACKATHON

```
Name :Suryanarayan Rath
Roll no. :1729083
University :KIIT UNIVERSITY
Branch :Computer Scinece and Communication Engineering
```

## Day-to-Day Tasks

### 06-September-2020

- Created the project ,installed specific NPM packages for the project
- Connected the project with the MONGO DB Atlas
- Created Schema for the TODO using mongoose and validated using validator

### 07-September-2020

- Created Route to save the todo to MongoDB
- Created GET route to view all the todos in the DB
- Set the createdAt key dynamically when the task saved to DB

### 08-September-2020

- Implemented CRON job to dynamically delete data from MongoDB at specific duration.

### 09-September-2020

- Restructured code.
- Implemented condition to delete todos dynamically

## Demo JSON structure for adding Todo

```
{
    "taskName": "Name of the task",
    "taskDescription": "Description of the task",
    "creator": "Creator of the task",
    "duration": "Duration in minutes (Number)"
}
```
