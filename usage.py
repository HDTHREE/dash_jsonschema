import dash_jsonschema
import dash

app = dash.Dash(__name__)

app.layout = dash_jsonschema.SchemaForm(id='component')


if __name__ == '__main__':
    app.run_server(debug=True)
