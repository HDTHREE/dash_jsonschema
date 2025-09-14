from __future__ import print_function as _

import os as _os
import sys as _sys
import json

import dash as _dash

# noinspection PyUnresolvedReferences
from ._imports_ import *
from ._imports_ import __all__

if not hasattr(_dash, "__plotly_dash") and not hasattr(_dash, "development"):
    _sys.exit(1)

_basepath: str = _os.path.dirname(__file__)
_filepath: str = _os.path.abspath(_os.path.join(_basepath, "package-info.json"))
with open(_filepath) as f:
    package: dict[str] = json.load(f)

package_name: str = package["name"].replace(" ", "_").replace("-", "_")
__version__ = package["version"]

_current_path: str = _os.path.dirname(_os.path.abspath(__file__))

_this_module: str = _sys.modules[__name__]

_js_dist: list[dict[str]] = [
    {
        "relative_package_path": "dash_jsonschema.js",
        "namespace": package_name
    },
    {
        "relative_package_path": "dash_jsonschema.js.map",
        "namespace": package_name,
        "dynamic": True
    },
    # {
    #     "dev_package_path": "proptypes.js",
    #     "dev_only": True,
    #     "namespace": "dash_jsonschema"
    # }
]

_css_dist = []


for _component in __all__:
    setattr(locals()[_component], "_js_dist", _js_dist)
    setattr(locals()[_component], "_css_dist", _css_dist)


try:
    import jsonschema
except ImportError:
    DataclassJsonSchemaForm = None
else:
    from .schema_mixin import DataclassJsonSchemaForm
