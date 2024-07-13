"""Client: Simple Flow CRUD example

This example demonstrates how to use the gptdb client to create, get, update, and
delete flows.

Example:
    .. code-block:: python

        GPTDB_API_KEY = "gptdb"
        client = Client(api_key=GPTDB_API_KEY)
        # 1. Create a flow
        res = await create_flow(
            client,
            FlowPanel(name="test_flow", desc="for client flow", owner="gptdb"),
        )
        # 2. Update a flow
        res = await update_flow(
            client,
            FlowPanel(name="test_flow", desc="for client flow333", owner="gptdb"),
        )
        # 3. Delete a flow
        res = await delete_flow(client, flow_id="bf1c7561-13fc-4fe0-bf5d-c22e724766a8")
        # 4. Get a flow
        res = await get_flow(client, flow_id="bf1c7561-13fc-4fe0-bf5d-c22e724766a8")
        # 5. List all flows
        res = await list_flow(client)

"""
import asyncio

from gptdb.client import Client
from gptdb.client.flow import list_flow


async def main():
    # initialize client
    GPTDB_API_KEY = "gptdb"
    client = Client(api_key=GPTDB_API_KEY)
    res = await list_flow(client)
    print(res)


if __name__ == "__main__":
    asyncio.run(main())
