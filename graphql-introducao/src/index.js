import { createServer } from "@graphql-yoga/node";

const typeDefs = `
    type Query {
        adicionar (numeros: [Float!]!): Float!
        notas: [Int!]!
        bemVindo (nome: String): String!
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
        adicionar(parent, args, ctx, info) {
            return args.numeros.length === 0 ? 0 : args.numeros.reduce((ac, atual) => {return ac + atual;});
        },
        notas(parent, args, ctx, info) {
            return [10,2,7,7,8];
        },
        bemVindo(parent, args, ctx, info) {
            return `Bem vindo ${args.nome ? args.nome : 'visitante'}`;
        },
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