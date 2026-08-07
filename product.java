class product{
	String name;
	int quantity;
	String nature;
public void setDetails(String name, int quantity, String details){
		
			this.name=name;
			this.quantity=quantity;
			this.nature=nature;
}
public void printDetails(){
		System.out.println("Product name is: " +name);
		System.out.println("Product quantity is: " +quantity);
		System.out.println("Product nature is: " +nature);
		System.out.println("================================");
}
}
	