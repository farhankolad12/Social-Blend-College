FROM python:3.10
WORKDIR /code
COPY ./ /code/
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt
CMD ["uvicorn","app:server","--host","0.0.0.0","--port","80"]