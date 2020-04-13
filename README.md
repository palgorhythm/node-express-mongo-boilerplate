## Node Express Mongo Boilerplate

Hello! Here's a handy boilerplate to use when you need to quickly create a JSON api.

Steps:

1. Create a free account at https://cloud.mongodb.com/ and create a cluster. The site will guide you through this.
2. After the cluster has finished provisioning, copy the database URL (it will look something like mongodb+srv://fdkjfakdjf)
3. Create a .env in the root directory, and add the line DB_URL=<YOUR MONGO DATABASE URL>
4. Run the command `npm i` in the root directory, and then run `npm run dev`.
5. In your browser, navigate to http://localhost:3000/api/foo, and you should see an empty array returned.
6. To test the API's functionality, import the Postman json provided into the Postman app, and you'll have "get all", "get by field", and "upsert" requests available.
