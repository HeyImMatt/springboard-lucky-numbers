import requests

def validate_request(req):
    """Validates requests and responds with True or json error"""

    response = {"errors": {}}
    required = "This field is required"

    if int(req["year"] or 0) not in range(1900, 2000):
        response["errors"]["year"] = "Year must be between 1900 and 2000"
    
    if req["color"].lower() not in ["red", "green", "orange", "blue"]:
        response["errors"]["color"] = "Color must be one of: red, green, orange, or blue"

    for k, v in req.items():
        if v == '':
            response["errors"][k] = required

    if response["errors"] == {}:
        return True
    else:
        return response

def get_num_facts(num, year):
    """Gets number facts for lucky number and birth year"""
    API_URL = "http://numbersapi.com"

    n_req = requests.get(f"{API_URL}/{num}/trivia?json").json()
    y_req = requests.get(f"{API_URL}/{year}/year?json").json()

    return {
        "num": {
            "fact": n_req["text"],
            "num": num
        }, 
        "year": {
            "fact": y_req["text"],
            "year": year
        }
    }