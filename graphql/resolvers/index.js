const postResolvers = require("../resolvers/posts");
const userResolvers = require("../resolvers/users");

module.exports = {
  Query: {
    ...postResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation, 
  },
};
