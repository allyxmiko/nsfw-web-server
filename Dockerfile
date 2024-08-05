FROM node:lts-alpine AS ui-builder
WORKDIR /app
COPY ./nsfw_ui .
RUN npm install
RUN npm run docs:build
RUN npm cache clean --force

# 使用Python官方基础镜像
FROM python:3.12-slim

# 设置工作目录
WORKDIR /app

# 将requirements.txt文件复制到容器中，并安装依赖
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 将项目文件复制到容器中
COPY . .
RUN rm -rf ./nsfw_ui
COPY --from=ui-builder /app/dist .


# 设置环境变量
ENV PYTHONUNBUFFERED=1

EXPOSE 8000

# 指定启动命令
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]