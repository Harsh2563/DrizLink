package routes

import (
	"drizlink/server/api/controllers"
	"drizlink/server/api/middleware"
	"log"
	"net/http"
)

func SetupRoutes(port string) {
	// Register routes
	http.HandleFunc("/api/start-server", controllers.HandleStartServer)

	// Setup server with CORS middleware
	server := &http.Server{
		Addr:    ":" + port,
		Handler: middleware.CorsMiddleware(http.DefaultServeMux),
	}

	// Start server
	log.Printf("HTTP server starting on port %s\n", port)
	log.Fatal(server.ListenAndServe())
}