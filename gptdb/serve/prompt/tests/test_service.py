from typing import List

import pytest

from gptdb.component import SystemApp
from gptdb.serve.core.tests.conftest import system_app
from gptdb.storage.metadata import db

from ..api.schemas import ServeRequest, ServerResponse
from ..models.models import ServeEntity
from ..service.service import Service


@pytest.fixture(autouse=True)
def setup_and_teardown():
    db.init_db("sqlite:///:memory:")
    db.create_all()
    yield


@pytest.fixture
def service(system_app: SystemApp):
    instance = Service(system_app)
    instance.init_app(system_app)
    return instance


@pytest.fixture
def default_entity_dict():
    return {
        "chat_scene": "chat_data",
        "sub_chat_scene": "excel",
        "prompt_type": "common",
        "prompt_name": "my_prompt_1",
        "content": "Write a qsort function in python.",
        "user_name": "zhangsan",
        "sys_code": "gptdb",
    }


@pytest.mark.parametrize(
    "system_app",
    [{"app_config": {"DEBUG": True, "gptdb.serve.test_key": "hello"}}],
    indirect=True,
)
def test_config_exists(service: Service):
    system_app: SystemApp = service._system_app
    assert system_app.config.get("DEBUG") is True
    assert system_app.config.get("gptdb.serve.test_key") == "hello"
    assert service.config is not None


@pytest.mark.parametrize(
    "system_app",
    [
        {
            "app_config": {
                "DEBUG": True,
                "gptdb.serve.prompt.default_user": "gptdb",
                "gptdb.serve.prompt.default_sys_code": "gptdb",
            }
        }
    ],
    indirect=True,
)
def test_config_default_user(service: Service):
    system_app: SystemApp = service._system_app
    assert system_app.config.get("DEBUG") is True
    assert system_app.config.get("gptdb.serve.prompt.default_user") == "gptdb"
    assert service.config is not None
    assert service.config.default_user == "gptdb"
    assert service.config.default_sys_code == "gptdb"


def test_service_create(service: Service, default_entity_dict):
    entity: ServerResponse = service.create(ServeRequest(**default_entity_dict))
    with db.session() as session:
        db_entity: ServeEntity = session.get(ServeEntity, entity.id)
        assert db_entity.id == entity.id
        assert db_entity.chat_scene == "chat_data"
        assert db_entity.sub_chat_scene == "excel"
        assert db_entity.prompt_type == "common"
        assert db_entity.prompt_name == "my_prompt_1"
        assert db_entity.content == "Write a qsort function in python."
        assert db_entity.user_name == "zhangsan"
        assert db_entity.sys_code == "gptdb"
        assert db_entity.gmt_created is not None
        assert db_entity.gmt_modified is not None


def test_service_update(service: Service, default_entity_dict):
    service.create(ServeRequest(**default_entity_dict))
    entity: ServerResponse = service.update(ServeRequest(**default_entity_dict))
    with db.session() as session:
        db_entity: ServeEntity = session.get(ServeEntity, entity.id)
        assert db_entity.id == entity.id
        assert db_entity.chat_scene == "chat_data"
        assert db_entity.sub_chat_scene == "excel"
        assert db_entity.prompt_type == "common"
        assert db_entity.prompt_name == "my_prompt_1"
        assert db_entity.content == "Write a qsort function in python."
        assert db_entity.user_name == "zhangsan"
        assert db_entity.sys_code == "gptdb"
        assert db_entity.gmt_created is not None
        assert db_entity.gmt_modified is not None


def test_service_get(service: Service, default_entity_dict):
    service.create(ServeRequest(**default_entity_dict))
    entity: ServerResponse = service.get(ServeRequest(**default_entity_dict))
    with db.session() as session:
        db_entity: ServeEntity = session.get(ServeEntity, entity.id)
        assert db_entity.id == entity.id
        assert db_entity.chat_scene == "chat_data"
        assert db_entity.sub_chat_scene == "excel"
        assert db_entity.prompt_type == "common"
        assert db_entity.prompt_name == "my_prompt_1"
        assert db_entity.content == "Write a qsort function in python."
        assert db_entity.user_name == "zhangsan"
        assert db_entity.sys_code == "gptdb"
        assert db_entity.gmt_created is not None
        assert db_entity.gmt_modified is not None


def test_service_delete(service: Service, default_entity_dict):
    service.create(ServeRequest(**default_entity_dict))
    service.delete(ServeRequest(**default_entity_dict))
    entity: ServerResponse = service.get(ServeRequest(**default_entity_dict))
    assert entity is None


def test_service_get_list(service: Service):
    for i in range(3):
        service.create(
            ServeRequest(**{"prompt_name": f"prompt_{i}", "sys_code": "gptdb"})
        )
    entities: List[ServerResponse] = service.get_list(ServeRequest(sys_code="gptdb"))
    assert len(entities) == 3
    for i, entity in enumerate(entities):
        assert entity.sys_code == "gptdb"
        assert entity.prompt_name == f"prompt_{i}"


def test_service_get_list_by_page(service: Service):
    for i in range(3):
        service.create(
            ServeRequest(**{"prompt_name": f"prompt_{i}", "sys_code": "gptdb"})
        )
    res = service.get_list_by_page(ServeRequest(sys_code="gptdb"), page=1, page_size=2)
    assert res is not None
    assert res.total_count == 3
    assert res.total_pages == 2
    assert len(res.items) == 2
    for i, entity in enumerate(res.items):
        assert entity.sys_code == "gptdb"
        assert entity.prompt_name == f"prompt_{i}"
