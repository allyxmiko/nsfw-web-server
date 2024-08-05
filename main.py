#! /usr/bin/env python3
# -*- encoding: utf-8 -*-
# @File      :     main.py
# @Time      :     2024/08/05 05:37:34
# @Author    :     Allyx
# @Email     :     allyx@allyx.cn
# @License   :     (C)Copyright 2024, Allyx

# Here put the import lib
import tempfile
from nsfw import predict
import os
import uvicorn
from typing import List
from fastapi import FastAPI, UploadFile, Form
from model import ImageNSFW
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount("/assets", StaticFiles(directory="./dist/assets"), name="assets")

temp_dir = os.path.join(tempfile.gettempdir(), "nsfw")
if not os.path.exists(temp_dir):
    os.makedirs(temp_dir)


@app.get("/")
async def index():
    return FileResponse("./dist/index.html")

@app.post("/nsfw")
async def create_task(images: List[UploadFile], precent: bool = Form(default=True), precision: int = Form(default=0)):
    nsfw_list : List[ImageNSFW] = []
    for image in images:
        if image.size <= 0 or image.filename == "":
            return {
                "code": 400,
                "msg": "请上传图片文件！"
            }
        file_path = os.path.join(temp_dir, image.filename)
        with open(file_path, "wb+") as f:
            f.write(await image.read())

        try:
            result = predict(file_path, precent, precision)
            os.remove(file_path)

        except Exception as e:
            return {
                "code": 500,
                "msg": str(e)
            }
        nsfw_list.append(ImageNSFW(image.filename, nsfw=result))

    return {
            "code": 0,
            "msg": "请求成功！",
            "data": nsfw_list
        }


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)