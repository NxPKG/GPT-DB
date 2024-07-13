import logging
from abc import ABC
from typing import Optional

from gptdb.component import ComponentType
from gptdb.core import LLMClient, ModelOutput, ModelRequest
from gptdb.core.awel import BaseOperator
from gptdb.core.awel.flow import (
    IOField,
    OperatorCategory,
    OperatorType,
    Parameter,
    ViewMetadata,
)
from gptdb.core.operators import BaseLLM, BaseLLMOperator, BaseStreamingLLMOperator
from gptdb.util.i18n_utils import _

logger = logging.getLogger(__name__)


class MixinLLMOperator(BaseLLM, BaseOperator, ABC):
    """Mixin class for LLM operator.

    This class extends BaseOperator by adding LLM capabilities.
    """

    def __init__(self, default_client: Optional[LLMClient] = None, **kwargs):
        super().__init__(default_client)

    @property
    def llm_client(self) -> LLMClient:
        if not self._llm_client:
            try:
                from gptdb.model.cluster import WorkerManagerFactory
                from gptdb.model.cluster.client import DefaultLLMClient

                worker_manager_factory: WorkerManagerFactory = (
                    self.system_app.get_component(
                        ComponentType.WORKER_MANAGER_FACTORY,
                        WorkerManagerFactory,
                        default_component=None,
                    )
                )
                if worker_manager_factory:
                    self._llm_client = DefaultLLMClient(worker_manager_factory.create())
            except Exception as e:
                logger.warning(f"Load worker manager failed: {e}.")
            if not self._llm_client:
                from gptdb.model.proxy.llms.chatgpt import OpenAILLMClient

                logger.info("Can't find worker manager factory, use OpenAILLMClient.")
                self._llm_client = OpenAILLMClient()
        return self._llm_client


class LLMOperator(MixinLLMOperator, BaseLLMOperator):
    """Default LLM operator.

    Args:
        llm_client (Optional[LLMClient], optional): The LLM client. Defaults to None.
            If llm_client is None, we will try to connect to the model serving cluster deploy by GPT-DB,
            and if we can't connect to the model serving cluster, we will use the :class:`OpenAILLMClient` as the llm_client.
    """

    metadata = ViewMetadata(
        label=_("LLM Operator"),
        name="llm_operator",
        category=OperatorCategory.LLM,
        description=_("The LLM operator."),
        parameters=[
            Parameter.build_from(
                _("LLM Client"),
                "llm_client",
                LLMClient,
                optional=True,
                default=None,
                description=_("The LLM Client."),
            ),
        ],
        inputs=[
            IOField.build_from(
                _("Model Request"),
                "model_request",
                ModelRequest,
                _("The model request."),
            )
        ],
        outputs=[
            IOField.build_from(
                _("Model Output"),
                "model_output",
                ModelOutput,
                description=_("The model output."),
            )
        ],
    )

    def __init__(self, llm_client: Optional[LLMClient] = None, **kwargs):
        super().__init__(llm_client)
        BaseLLMOperator.__init__(self, llm_client, **kwargs)


class StreamingLLMOperator(MixinLLMOperator, BaseStreamingLLMOperator):
    """Default streaming LLM operator.

    Args:
        llm_client (Optional[LLMClient], optional): The LLM client. Defaults to None.
            If llm_client is None, we will try to connect to the model serving cluster deploy by GPT-DB,
            and if we can't connect to the model serving cluster, we will use the :class:`OpenAILLMClient` as the llm_client.
    """

    metadata = ViewMetadata(
        label=_("Streaming LLM Operator"),
        name="streaming_llm_operator",
        operator_type=OperatorType.STREAMIFY,
        category=OperatorCategory.LLM,
        description=_("The streaming LLM operator."),
        parameters=[
            Parameter.build_from(
                _("LLM Client"),
                "llm_client",
                LLMClient,
                optional=True,
                default=None,
                description=_("The LLM Client."),
            ),
        ],
        inputs=[
            IOField.build_from(
                _("Model Request"),
                "model_request",
                ModelRequest,
                _("The model request."),
            )
        ],
        outputs=[
            IOField.build_from(
                _("Model Output"),
                "model_output",
                ModelOutput,
                description=_("The model output."),
                is_list=True,
            )
        ],
    )

    def __init__(self, llm_client: Optional[LLMClient] = None, **kwargs):
        super().__init__(llm_client)
        BaseStreamingLLMOperator.__init__(self, llm_client, **kwargs)
