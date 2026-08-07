class productDriver{

	public static void main(String[] args){

		product p1 = new product();
		product p2 = new product();
		product p3 = new product();

		p1.setDetails("PEN", 1500, "Solid");
		p2.setDetails("Water Color", 1000, "liquid");
		p3.setDetails("COPY", 100, "Solid");

		p1.printDetails();
		p2.printDetails();
		p3.printDetails();
}
}

		
		
		

