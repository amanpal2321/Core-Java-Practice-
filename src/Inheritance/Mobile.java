package Inheritance;

public class Mobile extends ElectronicProduct {
	String company;
	String model;
	
	Mobile(){
	}
	
	Mobile(String company, String model, String name, int price, String color){
		super(name, price, color);
		this.company=company;
		this.model=model;
		
	}
	public  String toString() {
		return "Company Product is: "+company+"\nModel of Product is :"+model+"\nName of Product is :"+name+"\nPrice of Product is :"+price+"\nColor of Product is :"+color;
	}

}
