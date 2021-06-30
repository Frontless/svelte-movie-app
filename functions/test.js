exports.handler = async function(event, context){
    return {
        statusCode: 200,
        body: JSON.stringify({
            name: "Kim",
            age: 31,
            email: "lequim12@gmail.com"
        })
    }
}