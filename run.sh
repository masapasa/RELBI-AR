docker build -t hackathon_server .
docker system prune -f
docker run -it -p 80:80 hackathon_server