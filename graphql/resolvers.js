const jjg = {
    name: "jjg",
    age: "33",
    gender: "female"
}

const resolvers = {
    Query: {
        person:() => jjg
    }
}

export default resolvers