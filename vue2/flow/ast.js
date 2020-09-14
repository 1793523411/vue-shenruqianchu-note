ast = {
'type': 1,
'tag': 'ul',
'attrsList': [],
'attrsMap': {
':class': 'bindCls',
'class': 'list',
'v-if': 'isShow'
},
'if': 'isShow',
'ifConditions': [{
'exp': 'isShow',
'block': // ul ast element
}],
'parent': undefined,
'plain': false,
'staticClass': 'list',
'classBinding': 'bindCls',
'children': [{
'type': 1,
'tag': 'li',
'attrsList': [{
'name': '@click',
'value': 'clickItem(index)'
}],
'attrsMap': {
'@click': 'clickItem(index)',
'v-for': '(item,index) in data'
},
'parent': // ul ast element
'plain': false,
'events': {'click': {
'value': 'clickItem(index)'
}
},
'hasBindings': true,
'for': 'data',
'alias': 'item',
'iterator1': 'index',
'children': [
'type': 2,
'expression': '_s(item)+":"+_s(index)'
'text': '{{item}}:{{index}}',
'tokens': [
{'@binding':'item'},
':',
{'@binding':'index'}
]
]
}]
}
