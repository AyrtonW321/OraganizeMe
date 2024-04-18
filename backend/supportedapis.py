supported = [
    'weather',
    'calendar'
]

modules = {

}

for app in supported:
    print(app)
    current_mod = app + "API"  # Add a slash between the parent directory and module name
    print(current_mod)
    modules[app] = current_mod

