package http

import (
	"net/http"
)

func configStatic() {
	fs := http.FileServer(http.Dir("templates/react-templates/jmht/build/"))
	http.Handle("/", fs)
}
