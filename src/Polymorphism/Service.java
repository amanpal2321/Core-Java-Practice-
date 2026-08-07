package Polymorphism;
import java.util.Scanner;

public class Service {
	public static TwoDShape selectAndGetTwoDShape() {
		Scanner sc=new Scanner(System.in);
		System.out.println("Press 1 for ==>Circle");
		System.out.println("Press 2 for ==>Rectangle");
		System.out.println("Press 3 for ==>Triangle");
		System.out.println("Press 4 for ==>Square");
		int choice=sc.nextInt();
		switch(choice) {
		
		case 1: 
			System.out.println("You have selected Circle");
			Circle c= new Circle();
			return c;
		case 2: 
			System.out.println("You have selected Rectangle");
			Rectangle r= new Rectangle();
			return r;
		case 3: 
			System.out.println("You have selected Triangle");
			Triangle t= new Triangle();
			return t;
		case 4: 
			System.out.println("You have selected Square");
			Sqaure s= new Sqaure();
			return s;
			
			default:
				System.out.println("This is Invalid Choice Please select from valid Option!");
				return selectAndGetTwoDShape();
		}
}
}
