package http

import (
	"html/template"
	"net/http"
)

func configTestRoutes() {
	http.HandleFunc("/test/version", func(w http.ResponseWriter, r *http.Request) {
		RenderDataJson(w, map[string]string{"Test": "ok", "Version": "1.0.1"})
	})
}

func configAd() {
	http.HandleFunc("/ad", func(w http.ResponseWriter, r *http.Request) {
		t, _ := template.ParseFiles("templates/ad.html")
		t.Execute(w, nil)
	})
}
