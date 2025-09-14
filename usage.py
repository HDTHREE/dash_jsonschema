import dash_jsonschema as dj
import dash
from dataclasses_jsonschema import JsonSchemaMixin
from dataclasses import dataclass


@dataclass
class Person(JsonSchemaMixin):
    """A person schema example."""
    name: str
    age: int


app = dash.Dash(__name__)

form = dj.DataclassJsonSchemaForm(schema_dataclass=Person, theme="material-ui-5")
app.layout = form


@app.callback(dash.Output(form, "data"), dash.Input(form, "data"))
def update_form_data(data):
    if data:
        print("Form data updated:", data)
    raise dash.exceptions.PreventUpdate

if __name__ == "__main__":
    app.run(debug=False)
