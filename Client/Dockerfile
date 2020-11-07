#docker build -t gstavosanchez/clientgo .
#docker login
#docker push gstavosanchez/clientgo
FROM golang:1.15

WORKDIR /

COPY . .

RUN go get -d github.com/gorilla/mux

EXPOSE 3000

CMD ["go","run","main.go"]