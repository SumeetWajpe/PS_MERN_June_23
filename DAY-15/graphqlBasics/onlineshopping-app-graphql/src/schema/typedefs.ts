export const typeDefs = `#graphql

    #rootQuery
    type Query{
        products:[Product] # [] -> collection | array
        product(id:ID!):Product
    }
 # ! -> not null constraint
    type Product{
        id:ID!,
        title:String
        price:Int
        likes:Int
        imageUrl:String
        rating:Int
        description:String
        offer:Offer
    }

    type Offer{
        discount:String
        additionalDiscount:Int
    }

`;
