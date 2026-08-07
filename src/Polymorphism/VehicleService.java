package Polymorphism;
import java.util.Scanner;
public class VehicleService {
	
	public static Vehicle SelectandGetVehicle() {
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Press 1 for Car");
		System.out.println("Press 2 for Bike");
		System.out.println("Press 3 for Bus");
		System.out.println("Press 4 for Cycle");
		
		
		int choice = sc.nextInt();
		
		switch (choice){
		
		case 1:
			System.out.println("You have selected Car");
			Car c = new Car();
			return c;
		case 2:
			System.out.println("You have selected Bike");
			Bike b = new Bike();
			return b;
		case 3:
			System.out.println("You have selected Bus");
			Bus B = new Bus();
			return B;
		case 4:
			System.out.println("You have selected Car");
			Cycle C = new Cycle();
			return C;
		default:
			System.out.println("You have selected Invalid Vehicle");
			return SelectandGetVehicle();
		}
		}

}
