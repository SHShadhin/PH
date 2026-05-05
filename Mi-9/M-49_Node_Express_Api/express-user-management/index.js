const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Hello from Express World')
}) 

const users = [
  {
    id: 1,
    name: 'Rahim Uddin',
    email: 'rahim@example.com',
    role: 'user',
    age: 25,
    isActive: true,
  },
  {
    id: 2,
    name: 'Karim Hasan',
    email: 'karim@example.com',
    role: 'admin',
    age: 30,
    isActive: true,
  },
  {
    id: 3,
    name: 'Ayesha Akter',
    email: 'ayesha@example.com',
    role: 'user',
    age: 22,
    isActive: false,
  },
  {
    id: 4,
    name: 'Sadia Rahman',
    email: 'sadia@example.com',
    role: 'moderator',
    age: 28,
    isActive: true,
  },
  {
    id: 5,
    name: 'Tanvir Ahmed',
    email: 'tanvir@example.com',
    role: 'user',
    age: 35,
    isActive: false,
  },
];
app.get("/users", (req, res) => {
  res.send(users)
})

app.get('/products', (req, res) => {
  res.send('Products will available very soon and you will purchage')
})

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})