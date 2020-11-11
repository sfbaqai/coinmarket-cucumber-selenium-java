package pageObjects;


import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CoinMarketPage {
    
	ArrayList<String> Currencies = new ArrayList<String>();
	ArrayList<String> market_price = new ArrayList<String>();
	ArrayList<String> market_price_second = new ArrayList<String>();

	public CoinMarketPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        wd=driver;
    }
    
	WebDriver wd;
	
	@FindBy(xpath= "//body/div[@id='__next']/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]")
	@CacheLookup
	WebElement ViewAll;
	
	
	
	@FindBy(xpath= "//button[contains(text(),'100')]")
	@CacheLookup
	WebElement selectfirst;
	
	public void clickShowAll() {
		ViewAll.click();
		selectfirst.click();
		try {
			Thread.sleep(5000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	public boolean verifyRows() {
		List<WebElement> rows = wd.findElements(By.xpath(".//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr"));
		System.out.println("Number of Rows:" + rows.size());
		if(rows.size() == 101) {
			return true;
		}else {
			return false;
		}
	}
	
	public void click_random_watchlists() {
		
		Random rd = new Random();
		int upperbound = 100;
		int int_random = 1; 
		JavascriptExecutor executor = (JavascriptExecutor)wd;				
		for(int i=0;i<5;i++) {
			int_random = rd.nextInt(upperbound);
			while(int_random <= 0)
				int_random = rd.nextInt(upperbound);
			
			String xpath_generate = ".//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[" +  int_random +"]/td[1]/div[1]/span[1]";
			executor.executeScript("arguments[0].click();", wd.findElement(By.xpath(xpath_generate)));

			
//			((JavascriptExecutor) wd).executeScript("window.scrollTo(0, document.body.scrollHeight);");
			((JavascriptExecutor) wd).executeScript("arguments[0].scrollIntoView(true);", wd.findElement(By.xpath(xpath_generate)));
			try {
				Thread.sleep(3000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			} 
  			 //wd.findElement(By.xpath(".//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[44]/td[3]/a[1]/div[1]/div[1]/p[1]")).getAttribute("innerText");
			 WebElement currencyElem = wd.findElement(By.xpath(".//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr["+int_random+"]/td[3]/a[1]/div[1]/div[1]/p[1]"));
		     Currencies.add(currencyElem.getAttribute("innerText"));

		}

	}
	
	public void open_watchlist_new_tab(){

		String selectLinkOpeninNewTab = Keys.chord(Keys.CONTROL,Keys.RETURN); 
		WebElement watchlist_btn = wd.findElement(By.xpath(".//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]/button[1]"));
		watchlist_btn.sendKeys(selectLinkOpeninNewTab);
		ArrayList<String> tabs = new ArrayList<String> (wd.getWindowHandles());
	    wd.switchTo().window(tabs.get(1)); //switches to new tab
	    	    
	}
    
	public boolean verifyWatchList() {
		
		try {
			Thread.sleep(6000);
		} catch (InterruptedException e1) {
			e1.printStackTrace();
		}
		
		
		List<WebElement> list = wd.findElements(By.xpath(".//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr"));
		ArrayList<String> elem_names = new ArrayList<String>();
		
		for(int j=1; j <=5;j++) {
			
			((JavascriptExecutor) wd).executeScript("arguments[0].scrollIntoView(true);", wd.findElement(By.xpath(".//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr["+j+"]/td[3]")));
			try {
				Thread.sleep(2000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			
			
			WebElement elem = wd.findElement(By.xpath(".//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr["+j+"]/td[3]/a[1]/div[1]/div[1]/p[1]"));
			elem_names.add(elem.getAttribute("innerText"));
		}
		
        Collections.sort(Currencies);
        Collections.sort(elem_names);
		
		if(list.size()==5 && elem_names.equals(Currencies))
			return true;
		else
			return false;
		
	}
	
	public void select_market_cap_first() {
		wd.findElement(By.xpath(".//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/span[1]/div[1]/button[1]")).click();
		wd.findElement(By.xpath(".//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/button[2]")).click();
		wd.findElement(By.xpath(".//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/button[2]")).click();
	
	}
	public void select_price_filter_record_data() {
		wd.findElement(By.xpath(".//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/span[1]/div[1]/button[1]")).click();
		wd.findElement(By.xpath(".//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/button[2]")).click();
		wd.findElement(By.xpath(".//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/button[2]")).click();
		
		List<WebElement> list = wd.findElements(By.xpath(".//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr"));
		
		wd.findElement(By.xpath(".//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[7]"));
		
		for(int i=1 ; i<=list.size();i++) {
		try {
			market_price.add(wd.findElement(By.xpath(".//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr["+i+"]/td[7]")).getAttribute("innerText"));
		}catch(Exception e) {
			System.out.println("Move On");
		}
		}
	}
	
	

	
	public void change_market_cap_filters() {
			
			
			
			wd.findElement(By.xpath(".//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/span[1]/div[1]/button[1]")).click();
			
			wd.findElement(By.xpath(".//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/button[3]")).click();
			
			wd.findElement(By.xpath(".//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/button[2]")).click();
			
			
			List<WebElement> list = wd.findElements(By.xpath(".//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr"));
			
			wd.findElement(By.xpath(".//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[2]/td[7]"));
			
			for(int i=1 ; i<=list.size();i++) {
			try {
				market_price_second.add(wd.findElement(By.xpath(".//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr["+i+"]/td[7]")).getAttribute("innerText"));
			}catch(Exception e) {
				System.out.println("Move On");
			}
			}
			
	}
	
	public void open_currency_coin_filter() {
	try {
		wd.findElement(By.xpath(".//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/button[1]")).click();
		wd.findElement(By.xpath(".//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/span[1]/div[1]/button[1]")).click();
		wd.findElement(By.xpath(".//html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/button[1]")).click();
		
	}catch(Exception e){
		e.printStackTrace();
		System.out.println("Move on");
	}
		
	}
	
	public boolean verify_market_prices_filter_change(){
		for(String fs : market_price) {
			for(String ss : market_price_second) {
				if(fs.equals(ss)) {
					return false;
				}
			}
		}
		return true;
	}
	
}
