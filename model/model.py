#! /usr/bin/env python3
# -*- encoding: utf-8 -*-
# @File      :     model.py
# @Time      :     2024/08/05 07:49:13
# @Author    :     Allyx
# @Email     :     allyx@allyx.cn
# @License   :     (C)Copyright 2024, Allyx

# Here put the import lib

class ImageNSFW:
    name: str
    nsfw: float

    def __init__(self, name: str, nsfw: float):
        self.name = name
        self.nsfw = nsfw