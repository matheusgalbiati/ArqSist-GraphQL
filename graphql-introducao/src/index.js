import { createServer } from "@graphql-yoga/node";

const typeDefs = `
    type Query {
        effectiveJava: Livro!
    },
    type Livro {
        id: ID!
        titulo: String!
        genero: String!
        edicao: Int
        preco: Float
    },
`;

const resolvers = {
    Query: {
        effectiveJava() {
            return {
                id: '123456',
                titulo: 'Effective java',
                genero: 'Técnico',
                edicao: 3,
                preco: 43.9
            }
        }
    }
};

const server = createServer({
    schema: {
        typeDefs,
        resolvers
    }
})

server.start(() => {
    'Servidor no ar...'
})