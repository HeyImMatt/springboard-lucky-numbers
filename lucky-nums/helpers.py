def validate_request(req):
    """Validates requests and responds with True or json error"""
    response = {"errors": {}}
    required = "This field is required"

    for k, v in req.items():
        if v == '':
            response["errors"][k] = required

    if int(req["year"] or 0) not in range(1900, 2000):
        response["errors"]["year"] = "Year must be between 1900 and 2000"
    
    if req["color"].lower() not in ["red", "green", "orange", "blue"]:
        response["errors"]["color"] = "Color must be one of: red, green, orange, or blue"

    if response["errors"] == {}:
        return True
    else:
        return response
