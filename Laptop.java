class Laptop{
	String name;
	int price;
	String model;
public void setDetails(String name, int price, String model){
		
			this.name=name;
			this.price=price;
			this.model=model;
}
public void printDetails(){
		System.out.println("Product name is: " +name);
		System.out.println("Product price is: " +price);
		System.out.println("Product model is: " +model);
		System.out.println("================================");
}
}
	