import dash_jsonschema as dj
import dash
from dataclasses_jsonschema import JsonSchemaMixin
from dataclasses import dataclass


@dataclass
class Person(JsonSchemaMixin):
    name: str
    age: int


app = dash.Dash(__name__)


app.layout = dj.SchemaForm(id="component", schema=Person.json_schema())


if __name__ == "__main__":
    app.run(debug=True)
