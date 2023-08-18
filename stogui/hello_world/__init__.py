from distutils.util import strtobool
import os
import streamlit.components.v1 as components

DEBUG = strtobool(os.getenv('STOGUI_DEBUG', 'false'))


if DEBUG:
    _component_func = components.declare_component(
        'hello_world', url='http://localhost:3000',
    )
else:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, 'frontend/build')
    _component_func = components.declare_component('hello_world', path=build_dir)


def hello_world():
    return _component_func()
