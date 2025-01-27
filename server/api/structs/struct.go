package structs

type StartServerRequest struct {
	IPAddress     string `json:"ipAddress"`
	Username      string `json:"username"`
	StoreFilePath string `json:"storeFilePath"`
}

type ServerResponse struct {
	Status  string `json:"status"`
	Message string `json:"message"`
}
