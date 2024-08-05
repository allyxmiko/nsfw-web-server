FROM node:lts-alpine AS ui-builder
WORKDIR /app
COPY ./nsfw_ui/package.json ./nsfw_ui/package-lock.json .
RUN npm ci --no-optional --no-audit --silent
COPY ./nsfw_ui/ .
RUN npm run docs:build


# 使用Python官方基础镜像
FROM python:3.12.4-alpine

# 设置工作目录
WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt -q && \
    pip install --no-cache-dir opencv-python-headless -q

COPY . .
# 清理不需要的文件
RUN rm -rf ./nsfw_ui

COPY --from=ui-builder /app/docs/.vuepress/dist ./ui


# 设置环境变量
ENV PYTHONUNBUFFERED=1
ENV NODE_ENV=production

EXPOSE 8000

# 指定启动命令
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]