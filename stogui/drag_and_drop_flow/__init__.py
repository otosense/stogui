from distutils.util import strtobool
import os
import streamlit.components.v1 as components
import mimetypes

mimetypes.add_type('application/javascript', '.js')
mimetypes.add_type('text/css', '.css')

DEBUG = strtobool(os.getenv('STOGUI_DEBUG', 'false'))


if DEBUG:
    _component_func = components.declare_component(
        'drag_and_drop_flow', url='http://localhost:5173',
    )
else:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, 'frontend/dist')
    _component_func = components.declare_component('drag_and_drop_flow', path=build_dir)


def drag_and_drop_flow():
    return _component_func()
