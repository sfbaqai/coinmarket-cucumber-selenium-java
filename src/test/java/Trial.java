import static io.restassured.RestAssured.given;

import org.json.JSONArray;
import org.json.JSONObject;

import io.restassured.response.Response;

public class Trial {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String baseUri="https://pro-api.coinmarketcap.com";	
		Response response = given().
		header("Accepts", "application/json").
		header("X-CMC_PRO_API_KEY", "f0d24ee2-323d-429b-9c91-925336acae42").
		queryParam("id", "1,2,3,4,5,6,7,8,9,10").
		baseUri(baseUri).
		when().get("/v1/cryptocurrency/info").
		then().assertThat().statusCode(200).and().extract().response();
		System.out.println(response.asPrettyString());
		JSONObject obj = new JSONObject(response.asString());
		System.out.println(obj.getJSONObject("data").isNull("10"));
		
//		for(int i=0;i<array.length();i++) {
//			String s =(String) array.get(i);
//			if(s.equals("mineable")) {
//				System.out.println(s);
//			}
//		}
		
		
		int b=0;
	}

}
