package Inheritance;

public class Product {
	
	public static void main(String[] args) {
		
		Mobile M1 = new Mobile("Apple","Iphone ","Iphone 18 Pro", 1490000,"Tiatanium Black");
		Mobile M2 = new Mobile("Samsung"," S ","S25 Ultra", 1500000," Black");
		Mobile M3 = new Mobile(M1.company,M1.model,"Iphone 17",54000,M1.color);
		
		
		System.out.println("=======================Product 1 Details==============");
		System.out.println(M1);
		System.out.println("=======================Product 2 Details==============");
		System.out.println(M2);
		System.out.println("=======================Product 3 Details==============");
		System.out.println(M3);
	}

}
