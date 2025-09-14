from dataclasses import is_dataclass
from dataclasses_jsonschema import JsonSchemaMixin
from .SchemaForm import SchemaForm

class DataclassJsonSchemaForm(SchemaForm):
    def __init__(self, *args, schema_dataclass=None, **kwargs):
        if schema_dataclass is not None:
            if not is_dataclass(schema_dataclass) or not issubclass(schema_dataclass, JsonSchemaMixin):
                raise ValueError("schema_dataclass must be a dataclass that inherits from JsonSchemaMixin")
            schema = schema_dataclass.json_schema()
            kwargs["schema"] = schema
        super().__init__(*args, **kwargs)
