const postResolvers = require("../resolvers/posts");
const userResolvers = require("../resolvers/users");
const commentsResolvers = require("../resolvers/comments");

module.exports = {
  Query: {
    ...postResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...postResolvers.Mutation,
    ...commentsResolvers.Mutation,
  },
};
