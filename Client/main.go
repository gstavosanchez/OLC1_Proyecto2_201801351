package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"io/ioutil"

	"github.com/gorilla/mux"
)

type codeJava struct {
	Code string `json:Code`
}
type allCode []codeJava

var codes = allCode{
	{
		Code: "Some content",
	},
}

func indexRoute(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(codes)
}
func setCode(w http.ResponseWriter, r *http.Request) {

	var newCode codeJava
	reqBody, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Println(w, "Insert a valid Task")
	}
	//fmt.Println(reqBody)
	json.Unmarshal(reqBody, &newCode)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(newCode)
	//fmt.Println(newCode)
}

func main() {
	router := mux.NewRouter().StrictSlash(true)

	//router.Handle("/", http.FileServer(http.Dir("./public")))
	///router.HandleFunc("/code", setCode).Methods("POST")
	router.PathPrefix("/client/").Handler(http.StripPrefix("/client/", http.FileServer(http.Dir("./public")))).Methods("GET")
	fmt.Println("Server on port 3000")
	log.Fatal(http.ListenAndServe(":3000", router))

}
