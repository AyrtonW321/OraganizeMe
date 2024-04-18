supported = {
    'weather',
    'calender'
}

modules = {

}

for i in supported:
    currentMod = '../'+supported[i]+'/'+supported+'API.py'
    modules[supported[i]] = currentMod

