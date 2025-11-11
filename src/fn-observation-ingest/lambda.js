// Recommended Packages for this Lambda
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb")
const { PutCommand, DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");
const { defaultProvider } = require("@aws-sdk/credential-provider-node");
const { Client } = require("@opensearch-project/opensearch");
const { AwsSigv4Signer } = require("@opensearch-project/opensearch/aws");
const AWSXRay = require('aws-xray-sdk-core');
AWSXRay.captureHTTPsGlobal(require('http'));
AWSXRay.captureHTTPsGlobal(require('https'));

const openSearchEndpoint = "https://s6tkjpxuugo2q82i4z3d.eu-central-1.aoss.amazonaws.com";

const osClient = new Client({
    ...AwsSigv4Signer({
        region: "eu-central-1",
        service: 'aoss', // 'es' for managed, 'aoss' for serverless
        getCredentials: defaultProvider(),
    }),
    node: openSearchEndpoint,
});

const dynamoClient = AWSXRay.captureAWSv3Client(new DynamoDBClient());

exports.handler = async (event) => {
    console.log(JSON.stringify(event));

    // Check where it should be stored

    // Call the correct message
}

async function insertIntoDynamoDB() {
    // Format the message for DynamoDB parameters (check README for indexes)

    // Use the `dynamoClient` to insert the record into DynamoDB
}

async function insertIntoOpenSearch() {
    // Format the message for OpenSearch parameters (check README for indexes)

    // Use the `osClient` to insert the record into OpenSearch
}
