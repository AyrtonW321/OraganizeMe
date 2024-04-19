import importlib
import sys

import supportedapis

def callmodule(moduleNeeded, input_value):
    print(input_value)

    actualmod = supportedapis.modules.get(moduleNeeded)
    print(actualmod)

    module = importlib.import_module(f'apimodules.{actualmod}.main', package=__name__)
    entry_point = getattr(module, 'needInput', None)

    print(entry_point)

    return entry_point(input_value)