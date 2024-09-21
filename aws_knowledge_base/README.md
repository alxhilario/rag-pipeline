# RAG With AWS Bedrock Knowledge Base

> ⚠ Make sure your [AWS credential](https://docs.aws.amazon.com/cli/v1/userguide/cli-configure-files.html) is properly set.

## Query using Python
Install `boto3` package:
```
pip install boto3
```

Query the knowledge base using the `kb_retrieve_and_generate.py` script:
```
# python kb_retrieve_and_generate.py <query>

$ python kb_retrieve_and_generate.py -q "what is the GPS coordinates provided by the contractor for spill_id 44442 and service_id 19?"
41.026944, -82.088056
```



The following are the environment variables used in the script:
* AWS_PROFILE
* AWS_DEFAULT_REGION (defaults to `us-east-1`)
* KNOWLEDGE_BASE_ID (defaults to `AEC7EUSCHX`)
* FOUNDATION_MODEL_ID (defaults to `meta.llama3-8b-instruct-v1:0`)

## Query using Javascript
Install the `@aws-sdk/client-bedrock-agent-runtime` package:
```
npm install @aws-sdk/client-bedrock-agent-runtime
```

Query the knowledge base using the `kb_retrieve_and_generate.js` script:
```
$ node kb_retrieve_and_generate.js "what is the GPS coordinates provided by the contractor for spill_id 44442 and service_id 19?"
41.026944, -82.088056
```

The following are the environment variables used in the script:
* AWS_DEFAULT_REGION (defaults to `us-east-1`)
* KNOWLEDGE_BASE_ID (defaults to `AEC7EUSCHX`)
* FOUNDATION_MODEL_ID (defaults to `meta.llama3-8b-instruct-v1:0`)