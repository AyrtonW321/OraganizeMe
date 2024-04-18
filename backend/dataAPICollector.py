import importlib.util
import sys

from backend import supportedapis

def callmodule(moduleNeeded, input_value):
    actualmod = supportedapis.modules.get(moduleNeeded)
    if actualmod is None:
        print(f"{moduleNeeded} not found")
        return None
    
    entry_point = getattr(actualmod, 'needInput', None)

    if entry_point is None:
        print(f"Entry or exit point not found in module {moduleNeeded}")
        return None

    try: 
        module = importlib.import_module(actualmod.__name__)
        print(f"{module} grabbed")
        # Call the entry point function with input_value
        result = entry_point(input_value)
        return result
    
    except ModuleNotFoundError:
        print(f"{moduleNeeded} not found")
        return None
