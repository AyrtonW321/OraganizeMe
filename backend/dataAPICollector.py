import importlib
import sys

import supportedapis

def callmodule(moduleNeeded, input_value):

    actualmod = supportedapis.modules.get(moduleNeeded)

    module = importlib.import_module(f'apimodules.{actualmod}.main', package=__name__)
    entry_point = getattr(module, 'needInput', None)

    # try: 
    #     print(f"{module} grabbed")
    #     # Call the entry point function with input_value
    #     result = entry_point(input_value)
    #     return result
    
    # except ModuleNotFoundError:
    #     print(f"Module {moduleNeeded} not found")
    #     return None

