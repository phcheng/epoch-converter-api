# Epoch Converter API

# REST API

The REST API to the example app is described below.

## Get Current Timestamp & Human-Date

### Request

`GET /`

### Response

    {"timestamp":"1672531199","human_date":"31-12-2022 23:59:59"}

## Convert from Timestamp to Human-Date

### Request

`GET /:timestamp`

    https://epoch-converter-api.herokuapp.com/1672531199

### Response

    {"timestamp":"1672531199","human_date":"31-12-2022 23:59:59"}

`GET /:timestamp/:format`

    https://epoch-converter-api.herokuapp.com/1672531199/DD-MM-YYYY HH:mm:ss

### Response

    {"timestamp":"1672531199","human_date":"31-12-2022 23:59:59"}