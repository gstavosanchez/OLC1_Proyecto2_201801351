FROM golang:alpine

RUN mkdir -p /go/src/servergo

WORKDIR /go/src/servergo

COPY . .

RUN go get -u github.com/gorilla/mux

RUN go build -o /go/bin/servergo cmd/main.go

EXPOSE 3000
