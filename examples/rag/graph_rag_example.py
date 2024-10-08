import asyncio
import os

from gptdb.configs.model_config import ROOT_PATH
from gptdb.model.proxy.llms.chatgpt import OpenAILLMClient
from gptdb.rag import ChunkParameters
from gptdb.rag.assembler import EmbeddingAssembler
from gptdb.rag.knowledge import KnowledgeFactory
from gptdb.rag.retriever import RetrieverStrategy
from gptdb.storage.knowledge_graph.knowledge_graph import (
    BuiltinKnowledgeGraph,
    BuiltinKnowledgeGraphConfig,
)

"""GraphRAG example.
    pre-requirements:
    * Set LLM config (url/sk) in `.env`.
    * Setup/startup TuGraph from: https://github.com/TuGraph-family/tugraph-db
    * Config TuGraph following the format below. 
    ```
    GRAPH_STORE_TYPE=TuGraph
    TUGRAPH_HOST=127.0.0.1
    TUGRAPH_PORT=7687
    TUGRAPH_USERNAME=admin
    TUGRAPH_PASSWORD=73@TuGraph
    ```

    Examples:
        ..code-block:: shell
            python examples/rag/graph_rag_example.py
"""


def _create_kg_connector():
    """Create knowledge graph connector."""
    return BuiltinKnowledgeGraph(
        config=BuiltinKnowledgeGraphConfig(
            name="graph_rag_test",
            embedding_fn=None,
            llm_client=OpenAILLMClient(),
            model_name="gpt-3.5-turbo",
        ),
    )


async def main():
    file_path = os.path.join(ROOT_PATH, "examples/test_files/tranformers_story.md")
    knowledge = KnowledgeFactory.from_file_path(file_path)
    graph_store = _create_kg_connector()
    chunk_parameters = ChunkParameters(chunk_strategy="CHUNK_BY_SIZE")
    # get embedding assembler
    assembler = await EmbeddingAssembler.aload_from_knowledge(
        knowledge=knowledge,
        chunk_parameters=chunk_parameters,
        index_store=graph_store,
        retrieve_strategy=RetrieverStrategy.GRAPH,
    )
    await assembler.apersist()
    # get embeddings retriever
    retriever = assembler.as_retriever(3)
    chunks = await retriever.aretrieve_with_scores(
        "What actions has Megatron taken ?", score_threshold=0.3
    )
    print(f"embedding rag example results:{chunks}")
    graph_store.delete_vector_name("graph_rag_test")


if __name__ == "__main__":
    asyncio.run(main())
