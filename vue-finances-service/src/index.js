const { GraphQLServer} = require('graphql-yoga');
const Biding = require('prisma-binding');
const { prisma } = require('./generated/prisma-client/index');

const binding = new Binding.Prisma({
  typeDefs: `${__dirname}/generated/graphql-schema/prisma.graphql`,
  endpoint: process.env.PRISMA_ENDPOINT
});


const resolvers = {
  Query: {
    user(perent, args, context, info){
      //return prisma.user({ id: args.id  })
      //  .then( user => {
      //    console.log('User:', user);
      //    return user;
      //  })

      return biding.query.user( { where: {id: args.id}}, info )
      .then( user => {
            console.log('User:', user);
            return user;
      });

    }
  }
}

const  server = new GraphQLServer({
  typeDefs: `${__dirname}/schema.graphql`,
  resolvers
});

server.start().then(() => console.log('Server running on http://localhost:4000...'))

