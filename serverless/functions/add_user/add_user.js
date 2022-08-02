let middy = require("middy");
let {
    jsonBodyParser,
    httpHeaderNormalizer
} = require("middy/middlewares");


const fnAddUser = async (event) => {
    let {
        email,name
    } = event.body
    console.log("add user-1 ", event.body)
    console.log("add user-2 ", {email,name})

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
        },
        body: JSON.stringify({
            payload: event.body
        })
    }
}

exports.handler = middy(fnAddUser)
    .use(httpHeaderNormalizer())
    .use(jsonBodyParser());
