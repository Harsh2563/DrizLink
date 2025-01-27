package main

import (
	"drizlink/server/api"
)

func main() {
	// Start the HTTP server to handle frontend requests
	api.StartHTTPServer("8000")
}
