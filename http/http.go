package http

import (
	"encoding/json"
	"log"
	"net/http"
	_ "net/http/pprof"
	"website-jmht/g"
)

type Dto struct {
	Msg  string      `json:"Msg"`
	Data interface{} `json:"Data"`
}

func init() {
	configCommonRoutes()
	configProcRoutes()
	configTestRoutes()
}

func RenderJson(w http.ResponseWriter, v interface{}) {
	bs, err := json.Marshal(v)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	w.Write(bs)
}

func RenderDataJson(w http.ResponseWriter, data interface{}) {
	RenderJson(w, Dto{Msg: "success", Data: data})
}

func RenderMsgJson(w http.ResponseWriter, msg string) {
	RenderJson(w, map[string]string{"msg": msg})
}

func AutoRender(w http.ResponseWriter, data interface{}, err error) {
	if err != nil {
		RenderMsgJson(w, err.Error())
		return
	}
	RenderDataJson(w, data)
}

func Start() {
	if !g.Config().Http.Enabled {
		return
	}

	addr := g.Config().Http.Listen
	if addr == "" {
		return
	}
	s := &http.Server{
		Addr:           addr,
		MaxHeaderBytes: 1 << 30,
	}
	log.Println("http listening", addr)
	log.Fatalln(s.ListenAndServe())
}