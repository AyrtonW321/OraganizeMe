import importlib
import sys

import supportedapis

def callmodule(moduleNeeded, input_value):
    print(input_value)

    actualmod = supportedapis.modules.get(moduleNeeded)
    print(actualmod)

    module = importlib.import_module(f'apimodules.weatherAPI.main', package=__name__)
    entry_point = getattr(module, 'needInput', None)

    print(entry_point)


    return entry_point(input_value)


    # try: 
    #     print(f"{module} grabbed")
    #     # Call the entry point function with input_value
    #     result = entry_point(input_value)
    #     return result
    
    # except ModuleNotFoundError:
    #     print(f"Module {moduleNeeded} not found")
    #     return None

