package cache

import (
	// "happy-hbs/common/model"
	// "happy-hbs/modules/hbs/db"
	"sync"
	"website-jmht/common/model"
	"website-jmht/db"
)

type SafeExpressionCache struct {
	sync.RWMutex
	L []*model.Expression
}

var ExpressionCache = &SafeExpressionCache{}

func (this *SafeExpressionCache) Get() []*model.Expression {
	this.RLock()
	defer this.RUnlock()
	return this.L
}

func (this *SafeExpressionCache) Init() {
	es, err := db.QueryExpressions()
	if err != nil {
		return
	}

	this.Lock()
	defer this.Unlock()
	this.L = es
}
