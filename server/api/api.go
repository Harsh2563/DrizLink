package api

import "drizlink/server/api/routes"

// StartHTTPServer initializes and starts the HTTP server
func StartHTTPServer(port string) {
	routes.SetupRoutes(port)
}
