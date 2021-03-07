import { people, findPerson } from "./db";

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => {
      return findPerson(id);
    },
  },
};

export default resolvers;
