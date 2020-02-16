FROM tiangolo/uvicorn-gunicorn:python3.7
COPY ./app /app
RUN pip install -r requirements.txt