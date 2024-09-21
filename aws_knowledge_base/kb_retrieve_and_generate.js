import { fileURLToPath } from "url";
import { BedrockAgentRuntimeClient, RetrieveAndGenerateCommand } from "@aws-sdk/client-bedrock-agent-runtime";

const REGION = process.env.AWS_DEFAULT_REGION || "us-east-1";
const KNOWLEDGE_BASE_ID = process.env.KNOWLEDGE_BASE_ID || "AEC7EUSCHX";
const MODEL_ID = process.env.FOUNDATION_MODEL_ID || "meta.llama3-8b-instruct-v1:0";

const client = new BedrockAgentRuntimeClient({ region: REGION });

export const retrieveAndGenerate = async (query) => {
    const command = new RetrieveAndGenerateCommand({
        input: {
            'text': query
        },
        retrieveAndGenerateConfiguration: {
            'type': 'KNOWLEDGE_BASE',
            'knowledgeBaseConfiguration': {
                'knowledgeBaseId': KNOWLEDGE_BASE_ID,
                'modelArn': `arn:aws:bedrock:${REGION}::foundation-model/${MODEL_ID}`
            }
        }
    });
    const response = await client.send(command);

    return response;
};

// Invoke function if this file was run directly.
if (process.argv[1] === fileURLToPath(import.meta.url)) {
    const query = process.argv[2];
    if (query === undefined || query === null) {
        console.log('error: query parameter is required.');
        process.exit(1);
    }
    const response = await retrieveAndGenerate(process.argv[2]);
    console.log(response['output']['text']);
}

