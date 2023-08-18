from collections.abc import Callable
from dataclasses import dataclass
import subprocess

from front import APP_KEY, RENDERING_KEY, ELEMENT_KEY, NAME_KEY
from front.elements import InputBase
from streamlitfront.base import mk_app

from stogui.drag_and_drop_flow import drag_and_drop_flow
from stogui.hello_world import hello_world
from stogui.pipeline_maker import pipeline_maker


def drag_and_drop_dag_maker(x):
    x


@dataclass
class DnDFlow(InputBase):
    def render(self):
        return drag_and_drop_flow()


def mk_pipeline(steps):
    return steps


@dataclass
class HelloWorld(InputBase):
    def render(self):
        return hello_world()


def hw(x):
    return x


@dataclass
class PipelineMaker(InputBase):
    items: list = None
    steps: list = None
    serializer: Callable = None

    def render(self):
        return pipeline_maker(
            items=self.items, steps=self.steps, serializer=self.serializer,
        )


def main():
    app = mk_app(
        [drag_and_drop_dag_maker, mk_pipeline, hw,],
        config={
            APP_KEY: {'title': 'STOGUI Demo'},
            RENDERING_KEY: {
                'hw': {'execution': {'inputs': {'x': {ELEMENT_KEY: HelloWorld}}}},
                'drag_and_drop_dag_maker': {
                    'execution': {'inputs': {'x': {ELEMENT_KEY: DnDFlow}}}
                },
                'mk_pipeline': {
                    NAME_KEY: 'Pipeline Maker',
                    'execution': {
                        'inputs': {
                            'steps': {
                                ELEMENT_KEY: PipelineMaker,
                                'items': ['chunker', 'featurizer'],
                                'serializer': lambda x: x,
                            },
                        },
                    },
                },
            },
        },
    )
    app()


def run_streamlit_app():
    subprocess.call(['streamlit', 'run', __file__, '--server.headless=true'])


if __name__ == '__main__':
    # Run this app with: streamlit run ./stogui/demo/app.py
    main()
