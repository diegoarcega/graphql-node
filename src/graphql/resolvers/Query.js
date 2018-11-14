module.exports = {
    helloWorld(parent, args, context, info) {
        const { name, age } = args
        return {
            name,
            age,
        };
    }
}