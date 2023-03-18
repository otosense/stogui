from distutils.util import strtobool
import os
from typing import Callable, Iterable
import streamlit.components.v1 as components
import streamlit as st

DEBUG = strtobool(os.getenv('STOGUI_DEBUG', 'false'))


if DEBUG:
    _component_func = components.declare_component(
        'session_table', url='http://localhost:3001',
    )
else:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, 'frontend/build')
    _component_func = components.declare_component('session_table', path=build_dir)


def oto_table(
    *, sessions=None, query=None
):
    component_value = _component_func(sessions=sessions, query=query)
    return component_value
