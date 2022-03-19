const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

// app.use ('/graphql', graphqlHTTP({
//     Schema:
// }))

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Now listening for requests on port ${PORT}.`)
);
