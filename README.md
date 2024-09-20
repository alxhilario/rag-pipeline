# rag-pipeline

## RAG With AWS Bedrock Knowledge Base

Query the knowledge base using the `kb_retrieve_and_generate.py` script:

```
# python kb_retrieve_and_generate.py <query>

$ python kb_retrieve_and_generate.py -q "what is the GPS coordinates provided by the contractor for spill_id 44442 and service_id 19?"
41.026944, -82.088056
```
Make sure your aws credential file is properly set.

The following are the environment variables used in the script:
* AWS_PROFILE
* AWS_DEFAULT_REGION (defaults to `us-east-1`)
* KNOWLEDGE_BASE_ID (defaults to `AEC7EUSCHX`)
* FOUNDATION_MODEL_ID (defaults to `meta.llama3-8b-instruct-v1:0`)

