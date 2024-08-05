#! /usr/bin/env python3
# -*- encoding: utf-8 -*-
# @File      :     nsfw.py
# @Time      :     2024/08/05 06:13:48
# @Author    :     Allyx
# @Email     :     allyx@allyx.cn
# @License   :     (C)Copyright 2024, Allyx

# Here put the import lib
import opennsfw2 as n2
from typing import List

def predicts(images: List[str], percent=False, precision=0) -> List[float]:
    if not isinstance(images, list) or not images:
        return []
    return [__predict(image, percent, precision) for image in images]


def predict(image_path: str, percent=False, precision=0) -> float:
    return __predict(image_path, percent, precision)


def __predict(image_path: str, percent=False, precision=0) -> float:
    results = -1
    if not isinstance(image_path, str) or not image_path:
        return results

    try:
        results = n2.predict_image(image_path)
    except Exception as e:
        print(f"Error predicting images: {e}")
        return results
    if percent:
        results *= 100
    if precision is not None and precision > 0:
        results = round(results, precision)
    return results
