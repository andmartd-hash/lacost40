import json
from pathlib import Path

BASE_PATH = Path(__file__).resolve().parent.parent / "data"

def load_json(file_name):
    with open(BASE_PATH / file_name, "r", encoding="utf-8") as f:
        return json.load(f)
