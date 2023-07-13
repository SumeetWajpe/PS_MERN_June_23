export const typeDefs = `#graphql

    #rootQuery
    type Query{
        products(limit:Int,offset:Int):[Product] # [] -> collection | array
        product(id:ID!):Product
        reviews:[Review]
        review(id:ID!):Review
        login(uname:String,pwd:String):User
    }
    
    type User{
        uname:String
        token:String
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
