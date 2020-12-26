# Getir Backend Challenge

**URL** : `https://getir-backend-challange.herokuapp.com/api/v1/records`

**Method** : `POST`


**Data constraints**

```json
{
    "startDate": "string",
    "endDate": "string",
    "minCount": "number",
    "maxCount": "number"
}
```

**Data example** All fields must be sent.

```json
{
    "startDate": "2016-01-26",
    "endDate": "2018-02-02",
    "minCount": 2700,
    "maxCount": 3000
}
```
### - Querying of records:
```bash
curl -X POST \
  http://localhost:3000/api/v1/records \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
	"startDate": "2016-01-26",
	"endDate": "2018-02-02",
	"minCount": 2700,
	"maxCount": 3000
}'
```

## Success Response

**Condition** : If everything is OK.

**Code** : `200`

**Example Reponse**

```json
{
    "code": 0,
    "msg": "Success",
    "records": [
        {
            "key": "ibfRLaFT",
            "createdAt": "2016-12-25T16:43:27.909Z",
            "totalCount": 2892
        }
    ]
}
```

## Error Response

```json
{
    "message": "\"maxCount\" must be a number"
}
```
## Project Setup

```bash
npm install #Install dependencies
npm start # start module
