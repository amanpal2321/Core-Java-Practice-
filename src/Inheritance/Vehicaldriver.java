package Inheritance;

public class Vehicaldriver {
	public static void main(String[] args) {
		System.out.println("This is vehical Driver");
		Car c1 = new Car("TATA",500000, "Black",200,4);
		
		Car c2 = new Car("Mahindra", 150000, "Mate Black", 250,6);
		System.out.println(c1);
		System.out.println(c2);
	}
}
