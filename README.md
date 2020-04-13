## Node Express Mongo Boilerplate

Hello! Here's a handy boilerplate to use when you need to quickly create a JSON api.

Steps:

1. Create a mongo account and copy your database url https://cloud.mongodb.com/. It'll look something like mongodb+srv://fdkjfakdjf
2. Create a .env in the root directory, and add the line DB_URL=<YOUR MONGO DATABASE URL>
3. Run the command `npm i` in the root directory, and then run `npm run dev`.
4. In your browser, navigate to http://localhost:3000/api/foo, and you should see an empty array returned.
5. To test the API's functionality, import the Postman json provided into the Postman app, and you'll have "get all", "get by field", and "upsert" requests available.
