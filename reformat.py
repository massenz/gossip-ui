import pathlib

workdir = pathlib.Path.home() / 'workspaces/webstorm/react'

tf = workdir / 'temp-paste'
with tf.open() as tt:
    lines = tt.readlines()

with tf.open('wt') as out:
    for line in lines:
        emit = ''
        for c in line:
            if c != u'\u200b':
                emit += c
        out.write(emit)
        out.write('\n')
