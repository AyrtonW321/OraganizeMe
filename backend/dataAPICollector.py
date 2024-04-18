import importlib.util
import sys
import string

import supportedapis

def callmodule(moduleNeeded, input):

    actualmod = supportedapis.modules[moduleNeeded]
    entry_point = getattr(actualmod, 'needInput')

    print('test')

    try: 
        module = importlib.import_module(actualmod)
        print({module} + "grabbed")
    
    except ModuleNotFoundError:
        print({moduleNeeded} + " not found")