class VehicleDriver{

	public static void main(String[] args){
  		
		Vehicle v1 = new Vehicle();
		Vehicle v2 = new Vehicle();
		Vehicle v3 = new Vehicle();

		v1.setDetails("Mahindra", "Scorpio", 2000000, "Black");
		v2.setDetails("Mahindra", "Scorpio-N", 3000000, "Black");
		v3.setDetails("Mahindra", "Thar", 1500000, "Black");
		
		v1.printDetails();
		v2.printDetails();
		v3.printDetails();
}
}