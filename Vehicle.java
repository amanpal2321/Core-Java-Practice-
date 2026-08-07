class Vehicle{
	String name;
	String model;
 	int price;
	String color;
public void setDetails(String name, String model, int price, String color){
		 
		this.name=name;
		this.model=model;
		this.price=price;
		this.color=color;
}

public void printDetails(){
     		System.out.println("Vehicle name is: " +name);
		System.out.println("Vehicle model is: " +model);
		System.out.println("Vehicle price is: " +price);
		System.out.println("Vehicle color is: " +color);
		System.out.println("============================");
}
}