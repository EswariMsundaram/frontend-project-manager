import axios from 'axios'

export const apiClient=axios.create({
    baseURL:'http://localhost:4000',
    headers:{
        Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY5MzFkMmUzYjFhYjAzODg1ZDMzMDA1ZCIsInVzZXJuYW1lIjoidXNlcjMiLCJlbWFpbCI6InVzZXIzQHRlc3QuY29tIn0sImlhdCI6MTc2NDk1NjI3OSwiZXhwIjoxNzY0OTYzNDc5fQ.56bkEhaDITYnqdpSUS1lzPqFQswd9wpPzvn-ndp-GzU'
    }
})