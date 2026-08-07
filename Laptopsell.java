class Laptopsell{
	
	public static void main(String[] args){

		Laptop l1 = new Laptop();
		Laptop l2 = new Laptop();
		Laptop l3 = new Laptop();
		
		l1.setDetails("Macbook", 70000, "M1");
		l2.setDetails("Macbook", 85000, "M2");
		l3.setDetails("Macbook", 95000, "M3");

		l1.printDetails();
		l2.printDetails();
		l3.printDetails();
}
}
