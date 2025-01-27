package controllers

import (
	"drizlink/server/api/middleware"
	"drizlink/server/api/structs"
	"drizlink/server/interfaces"
	connection "drizlink/server/internal"
	"encoding/json"
	"fmt"
	"net/http"
)

func HandleStartServer(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var req structs.StartServerRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// Ensure IP address has a port
	serverAddress := middleware.EnsurePort(req.IPAddress)
	fmt.Printf("Starting server on address: %s\n", serverAddress)

	server := interfaces.Server{
		Address:     serverAddress,
		Connections: make(map[string]*interfaces.User),
		IpAddresses: make(map[string]*interfaces.User),
		Messages:    make(chan interfaces.Message),
	}

	// Start the server in a goroutine
	go func() {
		go connection.StartHeartBeat(100, &server)
		connection.Start(&server)
	}()

	w.Header().Set("Content-Type", "application/json")
	response := structs.ServerResponse{
		Status:  "success",
		Message: fmt.Sprintf("Server started successfully on %s", serverAddress),
	}
	json.NewEncoder(w).Encode(response)
}
