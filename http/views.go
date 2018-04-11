package http

import (
	"html/template"
	"net/http"
)

func views() {
	http.HandleFunc("/ad", func(w http.ResponseWriter, r *http.Request) {
		tmpl := template.Must(template.ParseFiles("templates/ad.html"))
		if r.Method != http.MethodPost {
			tmpl.Execute(w, nil)
			return
		}
		tmpl.Execute(w, struct{ Success bool }{true})
	})

	http.HandleFunc("/index", func(w http.ResponseWriter, r *http.Request) {
		tmpl := template.Must(template.ParseFiles("templates/index.html"))
		if r.Method != http.MethodPost {
			tmpl.Execute(w, nil)
			return
		}
		tmpl.Execute(w, struct{ Success bool }{true})
	})

	http.HandleFunc("/product", func(w http.ResponseWriter, r *http.Request) {
		tmpl := template.Must(template.ParseFiles("templates/product.html"))
		if r.Method != http.MethodPost {
			tmpl.Execute(w, nil)
			return
		}
		tmpl.Execute(w, struct{ Success bool }{true})
	})

	http.HandleFunc("/aboutus", func(w http.ResponseWriter, r *http.Request) {
		tmpl := template.Must(template.ParseFiles("templates/aboutus.html"))
		if r.Method != http.MethodPost {
			tmpl.Execute(w, nil)
			return
		}
		tmpl.Execute(w, struct{ Success bool }{true})
	})
}
