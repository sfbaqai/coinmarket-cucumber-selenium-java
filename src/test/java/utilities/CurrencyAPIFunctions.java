package utilities;

import static io.restassured.RestAssured.given;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map.Entry;

import org.json.JSONArray;
import org.json.JSONObject;

import io.restassured.response.Response;

public class CurrencyAPIFunctions {
	Response response;
	public String getCurrID(String symbol) {
		
		String baseUri="https://pro-api.coinmarketcap.com";	
		response = given().
		header("Accepts", "application/json").
		header("X-CMC_PRO_API_KEY", "f0d24ee2-323d-429b-9c91-925336acae42").
		queryParam("symbol", symbol).
		baseUri(baseUri).
		when().get("/v1/cryptocurrency/map").
		then().assertThat().statusCode(200).and().extract().response();
		
		
		List<String> jsonResponse = response.jsonPath().getList("data");
		Object obj = jsonResponse.get(0);
		String Curr_ID="";
		LinkedHashMap<String, Integer> linkedMap = new LinkedHashMap<String, Integer>();
		linkedMap = (LinkedHashMap<String, Integer>) obj;
		
		for (Entry<String, Integer> entry : linkedMap.entrySet()) {
		    String key = entry.getKey();
		    if(key.equals("id")) {
		    	Curr_ID=String.valueOf(entry.getValue());
		    }
		}
		return Curr_ID;

	}

	
	public void getConvPrice(String CurrID,String amount,String CovertSymbol) {
		
		String baseUri="https://pro-api.coinmarketcap.com";	
		response = given().
		header("Accepts", "application/json").
		header("X-CMC_PRO_API_KEY", "f0d24ee2-323d-429b-9c91-925336acae42").
		queryParam("amount", amount).
		queryParam("id", CurrID).
		queryParam("convert", CovertSymbol).
		baseUri(baseUri).
		when().get("/v1/tools/price-conversion").
		then().assertThat().statusCode(200).and().extract().response();

	}

	public Response getEthereum_data() {
		String baseUri="https://pro-api.coinmarketcap.com";	
		response = given().
		header("Accepts", "application/json").
		header("X-CMC_PRO_API_KEY", "f0d24ee2-323d-429b-9c91-925336acae42").
		queryParam("id", "1027").
		baseUri(baseUri).
		when().get("/v1/cryptocurrency/info").
		then().assertThat().statusCode(200).and().extract().response();
		return response;

	}
	
	public boolean verify_logo(Response response,String logo_info) {
		JSONObject obj = new JSONObject(response.asString());
		String obj2 = obj.getJSONObject("data").getJSONObject("1027").getString("logo");
		if(logo_info.equals(obj2)) {
			return true;
		}else {
			return false;
		}
	}
	
	public boolean verify_tag_value(Response response, String tag_value) {
		JSONObject obj = new JSONObject(response.asString());
		JSONArray array = obj.getJSONObject("data").getJSONObject("1027").getJSONArray("tags");
		for(int i=0;i<array.length();i++) {
			String s =(String) array.get(i);
			if(s.equals(tag_value)) {
				return true;
			}
		}
		return false;
	}
	
	public boolean verify_technical_doc_value(Response response, String technical_doc_value) {
		JSONObject obj = new JSONObject(response.asString());
		JSONArray array = obj.getJSONObject("data").getJSONObject("1027").getJSONObject("urls").getJSONArray("technical_doc");
		
		for(int i=0;i<array.length();i++) {
			String s =(String) array.get(i);
			if(s.equals(technical_doc_value)) {
				return true;
			}
		}
		return false;
	}
	
	public boolean verify_symbol(Response response, String symbol_val) {
		JSONObject obj = new JSONObject(response.asString());
		String str = obj.getJSONObject("data").getJSONObject("1027").getString("symbol");
		if(symbol_val.equals(str))
			return true;
		else
			return false;
	}
	
	public boolean verify_date_added(Response response, String date_val) {
		JSONObject obj = new JSONObject(response.asString());
		String ss=  obj.getJSONObject("data").getJSONObject("1027").getString("date_added");
		if(ss.equals(date_val))
			return true;
		else
			return false;
	}
	
	public boolean verify_platform(Response response, String platform_val) {
		
		if(platform_val == null) {
			JSONObject obj = new JSONObject(response.asString());
			boolean check = obj.getJSONObject("data").getJSONObject("1027").isNull("platform");

			if(check)
				return true;
			else
				return false;
		}else {
		
		JSONObject obj = new JSONObject(response.asString());
		String ss=  obj.getJSONObject("data").getJSONObject("1027").getString("platform");
		if(ss.equals(platform_val))
			return true;
		else
			return false;
		}
	}
	
	
	public Response getRsponse() {
		return this.response;
	}
	
	public Response get_range_ids(Integer start, Integer end) {

		String id_string="";
		for(int i=start; i<=end;i++) {
			if(i==end) {
				id_string=id_string+i;
			}else {
				id_string=id_string+i+",";
			}
		}
		
		String baseUri="https://pro-api.coinmarketcap.com";	
		response = given().
		header("Accepts", "application/json").
		header("X-CMC_PRO_API_KEY", "f0d24ee2-323d-429b-9c91-925336acae42").
		queryParam("id", id_string).
		baseUri(baseUri).
		when().get("/v1/cryptocurrency/info").
		then().assertThat().statusCode(200).and().extract().response();
		return response;
		
	}
	
	public boolean check_mineable_tag(Response response,Integer start, Integer end){
		
		for(int i=start; i<=end;i++) {
			JSONObject obj = new JSONObject(response.asString());
			JSONArray array = obj.getJSONObject("data").getJSONObject(String.valueOf(i)).getJSONArray("tags");
			
			for(int j=0;j<array.length();j++) {
				String s =(String) array.get(j);
				if(!s.equals("mineable")) {
					System.out.println("ID: "+i +"does not contain mineable tag");
					return false;
				}
			}
		}
		return true;
		
	}
	
	public boolean check_correct_ids(Response response,Integer start, Integer end) {
		JSONObject obj = new JSONObject(response.asString());
		for(int i=start;i<=end;i++) {
			
			if(!obj.getJSONObject("data").isNull(String.valueOf(i))) {
				return false;
			}
		}
		
		if(!obj.getJSONObject("data").isNull(String.valueOf(end+1))) {
			return false;
		}
		return true;
	}
}
