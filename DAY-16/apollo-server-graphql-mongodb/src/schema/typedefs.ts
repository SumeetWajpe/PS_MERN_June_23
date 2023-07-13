export const typeDefs = `#graphql

    #rootQuery
    type Query{
        products:[Product] # [] -> collection | array
        product(id:ID!):Product
        reviews:[Review]
        review(id:ID!):Review
    
    }
    
    type Mutation{
        deleteProduct(id:ID!):ID
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

    type Review{
        id:ID!,
        comment:String,
        user:String
        product:Product
    }

`;
