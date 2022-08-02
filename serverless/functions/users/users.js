exports.handler = async (event) => {
    let arr = ["foo", "bar", "baz", "thud"];


    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
            payload: arr
        })
    }
}