# Dash JSON Schema Form

A dash wrapper for https://github.com/rjsf-team/react-jsonschema-form.

# Getting Started

The package is build via node. Other package managers may work but are not supported.

```shell
nvm install
nvm use
npm install
npm build:venv
source venv/bin/activate
npm build
pip install -e .
```

# Usage

```py
import dash_jsonschema as dj
import dash
from dataclasses_jsonschema import JsonSchemaMixin
from dataclasses import dataclass


@dataclass
class Person(JsonSchemaMixin):
    """A person schema example."""
    name: str
    age: int


app = dash.Dash(__name__, external_stylesheets=["https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"])


form: dj.SchemaForm = dj.SchemaForm(schema=Person.json_schema())
app.layout = form


@app.callback(dash.Output(form, "data"), dash.Input(form, "data"))
def update_form_data(data):
    if data:
        print("Form data updated:", data)
    raise dash.exceptions.PreventUpdate

if __name__ == "__main__":
    app.run(debug=False)
```