supported = [
    'weather',
    'calender'
]

modules = {

}

i = 0
for apps in supported:
    currentMod = '../'+supported[i]+'/'+supported[i]+'API.py'
    modules[supported[i]] = currentMod
    i += 1

print(modules)