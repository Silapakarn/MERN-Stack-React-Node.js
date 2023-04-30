package main

import (
	"database/sql"

	_ "github.com/proullon/ramsql/driver"
)

func main(){
	sql.Open("ramsql", "goimdb")

}
