const responseJson = pm.response.json();
const jwt = responseJson.token; //Remplace "token" with the rsponse key with the JWT

pm.environment.set("JWT", `Bearer ${jwt}`);