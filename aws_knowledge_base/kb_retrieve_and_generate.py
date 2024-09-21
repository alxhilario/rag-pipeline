import os
import boto3
import argparse
import sys

aws_profile = os.environ.get("AWS_PROFILE") 
region = os.environ.get("AWS_DEFAULT_REGION", "us-east-1") 
knowledge_base_id = os.environ.get("KNOWLEDGE_BASE_ID", "AEC7EUSCHX")
model_id = os.environ.get("FOUNDATION_MODEL_ID", "meta.llama3-8b-instruct-v1:0") 


def retrieve_and_generate(client, query, knowledge_base_id, model_id, region):
    return client.retrieve_and_generate(
        input={
            'text': query
        },
        retrieveAndGenerateConfiguration={
            'type': 'KNOWLEDGE_BASE',
            'knowledgeBaseConfiguration': {
                'knowledgeBaseId': knowledge_base_id,
                'modelArn': f'arn:aws:bedrock:{region}::foundation-model/{model_id}'
            }
        }
    )

def main(argv=sys.argv[1:]):
    parser = argparse.ArgumentParser()
    parser.add_argument('-q', '--query', required=True, help='The question to be asked to the LLM agent.')
    args = parser.parse_args(argv) 

    session = boto3.Session(profile_name=aws_profile)
    bedrock_agent_runtime_client = session.client("bedrock-agent-runtime", region_name=region)
    response = retrieve_and_generate(bedrock_agent_runtime_client, args.query, knowledge_base_id, model_id, region)
    return response['output']['text']

if __name__ == "__main__":
    print(main())